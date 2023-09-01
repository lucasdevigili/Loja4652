import { Link } from "react-router-dom"

function Buttons() {
    return (
        <>
            <Link to="/SignIn" className="link">Entrar</Link>
            <Link to="/SignUp" className="link">Cadastrar</Link>
        </>
    )
}

export default Buttons