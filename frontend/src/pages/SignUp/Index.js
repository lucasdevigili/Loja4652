import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import bcrypt from "bcryptjs-react";
import { SignUpContainer } from "../../components/SingUp/Index";
import CPFMask from "../../components/Validations/CPFMask"
import validateCPF from '../../components/Validations/CPFValidator';
import CELLMask from "../../components/Validations/CELLMask";

function SignUp() {

    const [isSuccess, setIsSuccess] = useState(false); 

    const [errors, setErrors] = useState({
        name: false,
        surname: false,
        user_data: false,
        cpf: false,
        email: false,
        cellphone: false,
        password: false,
        confirm: false,
    });

    const [cpf, setCPF] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [user_data, setDate] = useState('');
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

    useEffect(() => {
        if (isSuccess) {
            console.log("Cadastro bem-sucedido. Redirecionando para a página inicial...");
        }
    }, [isSuccess]);

    const handleConfirmClick = async () => {
        const areFieldsValid = name && surname && user_data && email && cellphone && password && confirm;
        setIsValidFields(areFieldsValid && isValidCPF && password === confirm);
    
        setErrors({
            name: !name,
            surname: !surname,
            user_data: !user_data,
            cpf: !isValidCPF,
            email: !email,
            cellphone: !cellphone,
            password: !password,
            confirm: password !== confirm,
        });
        
        if (areFieldsValid && isValidCPF && password === confirm) {
            console.log("Form is valid and can be submitted");
            const passwordHash = bcrypt . hashSync(password, 8);
            
            const formData = {
                cpf: cpf.replace(/\D/g, ""),
                name: `${name} ${surname}`,
                user_data: user_data.replace(/\D/g, ""),
                email,
                cellphone: cellphone.replace(/\D/g, ""),
                password:passwordHash,
            };
            try {
                await axios.post("http://localhost:8800/users", formData)
                    .then(response => {
                        console.log("Form data sent successfully:", response.data);
                        setIsSuccess(true);
                    })
                    .catch(error => {
                        console.error("Error sending form data:", error);
                        if (error.response && error.response.data.sqlState === '23000' && error.response.data.errno === 1062) {
                            setErrors({
                                ...errors,
                                email: true,
                            });
                        }
                    });
            } catch (error) {
                console.error("Error sending form data:", error);
            }
        } else {
            console.error("Fields are not valid");
        }
    };

    if (isSuccess) {
        return <Redirect to="/login" />;
    }

    return (
        <SignUpContainer>
            <div id="modal">
                <div id="modalContainer">
                    <div id="title">
                        <h1 className="title">Crie sua conta</h1>
                    </div>
                    <form id="form">
                        <div className="inputContainer">
                            <div id="formLineOne">
                                <div id="name">
                                    <label className="label">Nome:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="input name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                   {errors.name && <span className="span">Insira seu nome</span>}
                                </div>
                                <div id="surname">
                                    <label className="label">Sobrenome:</label>
                                    <input
                                        type="text"
                                        name="surname"
                                        className="input"
                                        value={surname}
                                        onChange={e => setSurname(e.target.value)}
                                    />
                                    {errors.surname && <span className="span">Insira seu sobrenome</span>}
                                </div>
                            </div>
                            <div id="formLineTwo">
                                <div id="cpf">
                                    <label className="label">CPF:</label>
                                    <CPFMask
                                        className="cpf"
                                        value={cpf}
                                        onChange={handleCPFChange} />
                                    {errors.cpf && <span className="span">Insira um CPF válido</span>}
                                </div>
                                <div id="date">
                                    <label className="label">Data de nascimento:</label>
                                    <input
                                        type="date"
                                        name="date"
                                        className="input"
                                        value={user_data}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                    {errors.user_data && <span className="span">Insira sua data de nascimento</span>}
                                </div>
                            </div>
                            <div id="formLineThree">
                                <div id="email">
                                    <label className="label">E-mail:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="input"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} />
                                    {errors.email && <span className="span">Insira um email válido</span>}
                                </div>
                                <div id="cellphone">
                                    <label className="label">Telefone:</label>
                                    <CELLMask
                                        value={cellphone}
                                        onChange={(maskedCellphone) => setCellphone(maskedCellphone)}
                                    />
                                    {errors.cellphone && <span className="span">Insira um número de telefone válido</span>}
                                </div>
                            </div>
                            <div id="formLineFour">
                                <div id="password">
                                    <label className="label">Senha:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="input"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    {errors.password && <span className="span">Insira uma senha</span>}

                                </div>
                                <div id="confirm">
                                    <label className="label">Confirmar senha:</label>
                                    <input type="password"
                                        name="confirm"
                                        className="input"
                                        value={confirm}
                                        onChange={e => setConfirm(e.target.value)} />
                                    {errors.confirm && <span className="span">Senhas não coincidem</span>}
                                </div>
                            </div>
                        </div>
                    </form>
                    <div id="buttons">
                        <Link className="cancel" to="/">Cancelar</Link>
                        <button className="confirm" onClick={handleConfirmClick}>Confirmar</button>
                    </div>
                </div>
            </div>
        </SignUpContainer>
    );
}

export default SignUp;