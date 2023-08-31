import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignInContainer } from "../../components/SignIn/Index";
import bcrypt from "bcryptjs-react";

function SignIn() {
    const initialState = { email: '', password: '' };
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState(null);

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
                    const matchingUser = matchingUsers[0]; // Assuming there's only one matching user

                    console.log("Usuário no banco de dados:", matchingUser);
                    console.log("Dados inseridos nos inputs:", values);
                    console.log("Senha do banco ", values.password, " senha inserida ", matchingUser.password);

                    try {
                        const passwordMatch = await bcrypt.compare(values.password, matchingUser.password);

                        if (passwordMatch) {
                            console.log("Usuário encontrado e senha correta:", matchingUser);
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
                                    name="password" // Verifique se esse atributo está definido como "password"
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
