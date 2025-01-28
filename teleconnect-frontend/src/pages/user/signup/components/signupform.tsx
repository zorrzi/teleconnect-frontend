import { useState } from "react";
import styled from "styled-components";
import { registerUser } from "../api/register";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const SignupForm = () => {
    const [formData, setFormData] = useState({
        cpf: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("As senhas não coincidem.");
            return;
        }

        try {
            await registerUser(formData);
            toast.success("Cadastro realizado com sucesso!");
            navigate("/user/login");
        } catch (error) {
            toast.error("Erro ao registrar usuário. Tente novamente.");
        }
    };

    return (
        <SignupStyles>
            <Title>Crie sua conta</Title>
            <Subtitle>Preencha os dados abaixo para se cadastrar.</Subtitle>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Icon src="/user.png" alt="Ícone Nome" />
                    <Input 
                        type="text" 
                        name="name" 
                        placeholder="Digite seu nome" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                    <Label>Nome</Label>
                </FormGroup>
                <FormGroup>
                    <Icon src="/cpf.png" alt="Ícone CPF" />
                    <Input 
                        type="text" 
                        name="cpf" 
                        placeholder="Digite seu CPF" 
                        value={formData.cpf} 
                        onChange={handleChange} 
                        required 
                    />
                    <Label>CPF</Label>
                </FormGroup>
                <FormGroup>
                    <Icon src="/phone.png" alt="Ícone Telefone" />
                    <Input 
                        type="text" 
                        name="phone" 
                        placeholder="Digite seu telefone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                    />
                    <Label>Telefone</Label>
                </FormGroup>
                <FormGroup>
                    <Icon src="/email.png" alt="Ícone Email" />
                    <Input 
                        type="email" 
                        name="email" 
                        placeholder="Digite seu email" 
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
                <FormGroup>
                    <Icon src="/padlock.png" alt="Ícone Confirmação de Senha" />
                    <Input 
                        type="password" 
                        name="confirmPassword" 
                        placeholder="Confirme sua senha" 
                        value={formData.confirmPassword} 
                        onChange={handleChange} 
                        required 
                    />
                    <Label>Confirme sua senha</Label>
                </FormGroup>
                <BaixoForm2>
                <Button type="submit">Cadastrar</Button>
                <LoginText>
                    Já tem uma conta? <a href="/user/login">Faça login</a>
                </LoginText>
                </BaixoForm2>
            </Form>
        </SignupStyles>
    );
};

const BaixoForm2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const SignupStyles = styled.div`
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
    margin-bottom: 1rem;
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
    margin-bottom: 1.5rem;
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

const LoginText = styled.p`
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
