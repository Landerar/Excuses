import { useState } from "react";

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== passwordRepeat) {
            setError('Passwords do not match');
            return;
        }
     try {
        const response = await fetch (`${import.meta.env.VITE_API_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password, passwordRepeat }),
        });
        const data = await response.json();
        if (data.error) {
            setError(data.error);
        } else {
            setEmail('');
            setUsername('');
            setPassword('');
            setPasswordRepeat('');
        }
     } catch (error){
        setError('Error registering user');
     }
    };

    return (
        <div>
          <h1>Register</h1>
          <form onSubmit={handleRegister}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label>Repeat Password:</label>
              <input
                type="password"
                value={passwordRepeat}
                onChange={(e) => setPasswordRepeat(e.target.value)}
              />
            </div>
            {error && <p>{error}</p>}
            <button type="submit">Register</button>
          </form>
        </div>
    ); 
};

export default RegisterForm;