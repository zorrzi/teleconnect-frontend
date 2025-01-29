import styled from 'styled-components';
import toast from 'react-hot-toast';

import { ListPackages } from '../../components/Catalogo/listPackages';
export const Catalog = () => {
    return (
        <HomeStyles>
            <ListPackages />
        </HomeStyles>
    )
}

const HomeStyles = styled.div`
    padding: 20px;
    background-color: #f0f0f0; /* Exemplo de cor de fundo para diferenciar */
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex: 1; /* Garante que o conteúdo ocupe o espaço disponível */
`;
