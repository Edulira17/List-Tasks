
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import {
  MainContainer,
  ContainerTasks,
  ContainerList,
  PageContainer
}
  from "./styles/Containers"
import ListTasks from "./components/ListTasks/ListTasks";



function App() {

  return (
    <PageContainer>
      <GlobalStyles />
      <MainContainer>
        <h1>Lista de tarefas</h1>
        <ContainerTasks>
          <h2>Crie sua tarefa aqui:</h2>
          <ContainerList>
            <ListTasks />
          </ContainerList>
        </ContainerTasks>
      </MainContainer>
    </PageContainer>
  )
}

export default App
