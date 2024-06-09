import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Generar Escusa</Link>
                </li>
                <li>
                   <Link to="/add-excuse-part">Añadir Excusa</Link>
                </li>
                <li>
                    <Link to="/register">Registro</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;