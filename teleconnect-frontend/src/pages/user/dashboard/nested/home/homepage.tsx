import styled from 'styled-components';
import toast from 'react-hot-toast';

export const Home = () => {
    return (
        <HomeStyles>
            <h1>Home</h1>
            <button onClick={() => toast.error('Erro')}>Click me!</button>
        </HomeStyles>
    )
}

const HomeStyles = styled.div`
    background-color: #f9f9f9;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`