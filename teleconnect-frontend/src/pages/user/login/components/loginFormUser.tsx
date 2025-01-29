import { useState } from "react";
import styled from "styled-components";
import { loginUser } from "../api/login";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const LoginForm = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            toast.error("Preencha todos os campos!");
            return;
        }

        try {
            await loginUser(formData.email, formData.password);
            toast.success("Login realizado com sucesso!");
            navigate("/");
        } catch (error) {
            toast.error("Erro ao fazer login. Verifique suas credenciais.");
        }
    };

    return (
        <LoginStyles>
            <Title>Bem-vindo de volta!</Title>
            <Subtitle>Faça login na sua conta.</Subtitle>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Icon src="/user.png" alt="Ícone Email" />
                    <Input 
                        type="email" 
                        name="email" 
                        placeholder="Digite seu Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <Label>Email</Label>
                </FormGroup>
                <FormGroup>
                    <Icon src="/padlock.png" alt="Ícone Senha" />
                    <Input 
                        type="password" 
                        name="password" 
                        placeholder="Digite sua senha" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                    <Label>Senha</Label>
                </FormGroup>
                <BaixoForm>
                <Button type="submit">Login</Button>
                <SignupText>
                    Ainda não tem uma conta? <a href="/user/signup">Cadastre-se aqui</a>
                </SignupText>
                </BaixoForm>
            </Form>
        </LoginStyles>
    );
};

const BaixoForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const LoginStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    width: 100%;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #3CBBB4;
    margin-bottom: 40px;
    text-align: left;
`;

const Subtitle = styled.p`
    font-size: 1rem;
    color: #666666;
    margin-bottom: 20px;
    text-align: left;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormGroup = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

const Icon = styled.img`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    margin-right: 10px;
`;

const Label = styled.label`
    position: absolute;
    left: 40px; /* Ajustado para acomodar o ícone */
    top: 10px;
    font-size: 1rem;
    color: #aaaaaa;
    pointer-events: none;
    transition: all 0.2s ease;

    input:focus ~ &,
    input:not(:placeholder-shown) ~ & {
        top: -16px;
        font-size: 0.85rem;
        color: #3CBBB4;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 10px 0 10px 40px; /* Espaço ajustado para o ícone */
    border: none;
    border-bottom: 2px solid #cccccc;
    font-size: 1rem;
    background: transparent;
    color: #333333;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-bottom: 2px solid #3CBBB4;
    }

    &::placeholder {
        color: transparent; /* Placeholder escondido para usar apenas o label */
    }
`;

const Button = styled.button`
    width: 100%;
    max-width: 200px; /* Ajusta o tamanho máximo do botão */
    padding: 12px 0;
    background-color: #3CBBB4;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #32A09A;
    }
`;

const SignupText = styled.p`
    font-size: 0.9rem;
    text-align: center;
    
    a {
        color: #3CBBB4;
        font-weight: 700;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;
