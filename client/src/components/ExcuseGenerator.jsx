import { useState } from "react";

const ExcuseGenerator = () => {
    const [excuse, setExcuse] = useState("");

    const generateExcuse = async () => {
        try {
            const response= await fetch(`${import.meta.env.VITE_API_URL}/excuses/generate`);
            const data = await response.json();
            console.log("data",data)
            setExcuse(data.data);
        } catch (error) {
            console.error('failed to generate excuse', error);
        }
    };
    return (
        <div>
            <h1>Generador de Escusas</h1>
            <button onClick={generateExcuse}>Generar Excusa</button>
            {excuse && <p>{excuse}</p>}
        </div>
    )
};

export default ExcuseGenerator;