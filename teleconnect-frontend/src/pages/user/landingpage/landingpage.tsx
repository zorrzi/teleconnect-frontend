import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';


export const LandingPage = () => {
    return (
        <p>Landing Page</p>
    )
}

const LandingPageStyles = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 100px 1fr;
    height: 100vh;
    width: 100vw;
    background-color: #f9f9f9;
`