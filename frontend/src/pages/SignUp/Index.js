import React, { useState } from "react";
import './index.css';
import { SingUp } from "../../components/SingUp/Index";
import CPFMask from "../../components/Validations/CPFMask"
import validateCPF from '../../components/Validations/CPFValidator';
import CELLMask from "../../components/Validations/CELLMask";
import axios from "axios";


function SignUp() {
    const [cpf, setCPF] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [date, setDate] = useState(''); 
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [isValidCPF, setIsValidCPF] = useState(true);
    const [isValidFields, setIsValidFields] = useState(true);

    const handleCPFChange = (maskedCPF) => {
        setCPF(maskedCPF);
        setIsValidCPF(validateCPF(maskedCPF));
    };

    const handleConfirmClick = () => {
        const areFieldsValid = name && surname && date && email && cellphone && password && confirm;
        setIsValidFields(areFieldsValid && isValidCPF && password === confirm);

        if (areFieldsValid && isValidCPF && password === confirm) {
            console.log("Form is valid and can be submitted");
        } else {
            console.error("Fields are not valid");
        }
    };

    return (
        <SingUp>
            <div id="modal">
                <div id="modalContainer">
                    <div id="title">
                        <h1 className="title">Crie sua conta</h1>
                    </div>
                    <form id="form">
                        <div className="inputContainer">
                            <div id="formLineOne">
                                <div id="name">
                                    <label className="label">Nome</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="input name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    {isValidFields && !setName && <span className="span">Insira seu nome</span>}
                                </div>
                                <div id="surname">
                                    <label className="label">Sobrenome</label>
                                    <input
                                        type="text"
                                        name="surname"
                                        className="input"
                                        value={surname}
                                        onChange={e => setSurname(e.target.value)}
                                    />
                                    {isValidFields && !setSurname && <span className="span">Insira seu sobrenome</span>}
                                </div>
                            </div>
                            <div id="formLineTwo">
                                <div id="cpf">
                                    <label className="label">CPF</label>
                                    <CPFMask
                                        className="cpf"
                                        value={cpf}
                                        onChange={handleCPFChange} />
                                    {isValidCPF ? null : <span className="span">Insira um CPF válido</span>}
                                </div>
                                <div id="date">
                                    <label className="label">Data de nascimento</label>
                                    <input
                                        type="date"
                                        name="date"
                                        className="input"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                    {isValidFields && !date && (
                                        <span className="span">Insira sua data de nascimento</span>
                                    )}
                                </div>
                            </div>
                            <div id="formLineTree">
                                <div id="email">
                                    <label className="label">E-mail</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="input"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} />
                                    {isValidFields && !setEmail && <span className="span">Insira um email válido</span>}
                                </div>
                                <div id="cellphone">
                                    <label className="label">Telefone</label>
                                    <CELLMask
                                        value={cellphone}
                                        onChange={(maskedCellphone) => setCellphone(maskedCellphone)}
                                    />
                                    {isValidFields && !setCellphone && (<span className="span">Insira um número de telefone válido</span>)}
                                </div>
                            </div>
                            <div id="formLineFour">
                                <div id="password">
                                    <label className="label">Senha</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="input"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    {isValidFields && !setPassword && <span className="span">Insira uma senha</span>}

                                </div>
                                <div id="confirm">
                                    <label className="label">Confirmar senha</label>
                                    <input type="password"
                                        name="confirm"
                                        className="input"
                                        value={confirm}
                                        onChange={e => setConfirm(e.target.value)} />
                                    {isValidFields && password !== confirm && (
                                        <span className="span">Senhas não coincidem</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        </form>
                    <div id="buttons">
                        <button className="cancel">Cancelar</button>
                        <button className="confirm" onClick={handleConfirmClick}>
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </SingUp>
    );
}

export default SignUp;