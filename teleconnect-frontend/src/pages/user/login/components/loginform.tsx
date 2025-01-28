import styled from 'styled-components';

export const LoginForm = () => {
    return (
        <LoginStyles>
            <Title>Conectando possibilidades e transformando futuros</Title>
            <Subtitle>Bem-vindo de volta! Faça login na sua conta.</Subtitle>
            <Form>
                <FormGroup>
                    <Icon src="/user.png" alt="Ícone CPF" />
                    <Input type="text" id="cpf" placeholder="Digite seu CPF" required />
                    <Label htmlFor="cpf">CPF</Label>
                </FormGroup>
                <FormGroup>
                    <Icon src="/padlock.png" alt="Ícone Senha" />
                    <Input type="password" id="password" placeholder="Digite sua senha" required />
                    <Label htmlFor="password">Senha</Label>
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
            <RegisterText>
                Não tem uma conta? <a href="/user/signup">Faça seu cadastro!</a>
            </RegisterText>
        </LoginStyles>
    );
};

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

const RegisterText = styled.p`
    font-size: 0.9rem;
    color: #666666;
    margin-top: 30px;
    text-align: center; /* Centraliza o texto */
    
    a {
        color: #3CBBB4;
        font-weight: 700;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;
