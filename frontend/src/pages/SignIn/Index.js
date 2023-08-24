import {Link} from "react-router-dom"
import { SignInContainer } from "../../components/SignIn/Index";

function SignIn() {
    return (
        <SignInContainer>
            <div id="modal">
                <div id="modalContainer">
                    <div id="title">
                        <h1 className="title">Entre em sua conta</h1>
                    </div>
                    <form id="form">
                        <div id="inputContainer">
                            <div id="formLineOne">
                                <label className="label">E-mail:</label>
                                <input
                                    type="text"
                                    name="email"
                                    className="input"
                                />
                            </div>
                            <div id="formLineTwo">
                                <label className="label">Senha:</label>
                                <input
                                    type="password"
                                    name="senha"
                                    className="input"
                                />
                                <span className="span">E-mail ou senha incorreta</span>
                            </div>
                            <div id="formLineThree">
                                <Link to="#">Esqueceu sua senha?</Link>
                            </div>
                            <div id="formLineFour">
                                <span>Não tem cadastro?</span>
                                <Link to="/SignUp" className="signUpSpan">Cadastre-se</Link>
                            </div>
                        </div>
                    </form>
                    <div id="buttons">
                        <Link to="/" className="cancel">Cancelar</Link>
                        <button className="confirm">Confirmar</button>
                    </div>
                </div>
            </div>
        </SignInContainer>
    );
}

export default SignIn;