import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { SignInContainer } from "../../components/SignIn/Index";
import Cookies from "js-cookie";
import bcrypt from "bcryptjs-react";

function SignIn() {
    const initialState = { email: '', password: '' };
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState(null);

    const history = useHistory();

    useEffect(() => {
        const jwtToken = Cookies.get("jwtToken");
        if (jwtToken) {
            setError("Você já está logado.");
        }
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:8800/users/${values.email}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const matchingUsers = await response.json();

                if (matchingUsers.length > 0) {
                    const matchingUser = matchingUsers[0];

                    try {
                        const passwordMatch = await bcrypt.compare(values.password, matchingUser.password);

                        if (passwordMatch) {
                            const timestamp = new Date().getTime();
                            const secret = "quatromeiacincodoiseomelhordetodos";
                            const token = `${matchingUser.email}:${timestamp}:${secret}`;

                            if (token) {
                                Cookies.set("jwtToken", token);
                                history.push("/");
                            } else {
                                setError("Token não encontrado");
                            }
                        } else {
                            setError("Senha incorreta");
                        }
                    } catch (error) {
                        setError("Erro ao comparar senhas");
                    }
                } else {
                    setError("E-mail não encontrado");
                }
            } else {
                setError("Erro ao buscar usuário");
            }
        } catch (error) {
            setError("Erro de rede");
        }
    }

    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value,
        });
    }

    return (
        <SignInContainer>
            <div id="modal">
                <div id="modalContainer">
                    <div id="title">
                        <h1 className="title">Entre em sua conta</h1>
                    </div>
                    <form id="form" onSubmit={handleSubmit}>
                        <div id="inputContainer">
                            <div id="formLineOne">
                                <label className="label">E-mail:</label>
                                <input
                                    type="text"
                                    name="email"
                                    className="input"
                                    value={values.email}
                                    onChange={onChange}
                                />
                            </div>
                            <div id="formLineTwo">
                                <label className="label">Senha:</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="input"
                                    value={values.password}
                                    onChange={onChange}
                                />
                                {error && <span className="span">{error}</span>}
                            </div>
                            <div id="formLineThree">
                                <Link to="#">Esqueceu sua senha?</Link>
                            </div>
                            <div id="formLineFour">
                                <span>Não tem cadastro?</span>
                                <Link to="/SignUp" className="signUpSpan">Cadastre-se</Link>
                            </div>
                        </div>
                        <div id="buttons">
                            <Link to="/" className="cancel">Cancelar</Link>
                            <button type="submit" className="confirm">Confirmar</button>
                        </div>
                    </form>
                </div>
            </div>
        </SignInContainer>
    );
}

export default SignIn;