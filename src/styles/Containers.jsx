import styled from "styled-components";

export const PageContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh; 
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 700px;
    padding: 2rem;
    height: 600px;
    background-color: #afa6a6;


    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`

export const ContainerTasks = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 500px;
    padding: 2.5rem;
    margin-top: 20px;


    background-color: #6d6565;
    
`

export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
`