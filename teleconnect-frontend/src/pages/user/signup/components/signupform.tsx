import styled from 'styled-components';

export const SignupForm = () => {
    return (
        <SignupStyles>
            <Title>Conectando possibilidades e transformando futuros</Title>
            <Subtitle>Seja bem-vindo! Preencha os dados para criar a sua conta.</Subtitle>
            <Form>
                <FormGroup>
                    <Icon src="/user.png" alt="Ícone CPF" />
                    <Input type="text" id="cpf" placeholder="CPF" required />
                    <Label htmlFor="cpf">CPF</Label>
                </FormGroup>
                <FormGroup>
                    <Icon src="/email.png" alt="Ícone Email" />
                    <Input type="email" id="email" placeholder="Email" required />
                    <Label htmlFor="email">Email</Label>
                </FormGroup>
                <FormGroup>
                    <Icon src="/phone.png" alt="Ícone Telefone" />
                    <Input type="tel" id="telefone" placeholder="Telefone" required />
                    <Label htmlFor="telefone">Telefone</Label>
                </FormGroup>
                <FormGroup>
                    <Icon src="/padlock.png" alt="Ícone Senha" />
                    <Input type="password" id="password" placeholder="Senha" required />
                    <Label htmlFor="password">Senha</Label>
                </FormGroup>
                <FormGroup>
                    <Icon src="/padlock.png" alt="Ícone Confirmar Senha" />
                    <Input type="password" id="confirmar-senha" placeholder="Confirmar Senha" required />
                    <Label htmlFor="confirmar-senha">Confirmar Senha</Label>
                </FormGroup>
                <Button type="submit">Cadastre-se</Button>
            </Form>
            <RegisterText>
                Já tem uma conta? <a href="/user/login">Faça Login!</a>
            </RegisterText>
        </SignupStyles>
    );
};

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
        color: transparent;
    }
`;

const Button = styled.button`
    width: 100%;
    max-width: 200px;
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
    margin-top: 20px;
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
