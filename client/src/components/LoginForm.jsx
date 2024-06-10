import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (data.token){
                localStorage.setItem('token', data.token);
                navigate('/');
            } else {
                setError('Invalid email or password');
            }
        }catch (error) {
            setError('Error logging in');
    }
};
    return (
        <div className="login-form">
        <h1>Login</h1>
        <p>¿Listo para entrar y crear las mejores excusas jamás vistas?</p>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          {error && <p>{error}</p>}
          <button type="submit">Login</button>
        </form>
        <p>¡No te preocupes, tus excusas estarán a salvo con nosotros!</p>
      </div>
    );
};

export default LoginForm;