import { useState, useReducer } from 'react'
import { FaPlus, FaTrash } from 'react-icons/fa'
import styled from 'styled-components'

const ContainerForm = styled.div`
  padding: 0.5rem 2rem;
`

const StyledForm = styled.form`
  display: flex;
  gap: 15px;
`

const ContainerList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  margin-top: 1rem;
  padding: 1rem;

  .list{
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
    text-align: center;

    .btn-delete{
        margin-left: 10px;
    }
  }
`

const ListTasks = () => {
  const initialTasks = []

  const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        const newTask = {
          id: Math.random(),
          text: taskText,
        }

        setTaskText('')

        return [...state, newTask]
      case 'DELETE':
        return state.filter((task) => task.id !== action.id)
      default:
        return state
    }
  }

  const [taskText, setTaskText] = useState('')
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatchTasks({ type: 'ADD' })
  }

  const deleteTask = (id) => {
    dispatchTasks({ type: 'DELETE', id: id })
  }

  return (
    <ContainerForm>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <button type='submit'>
          <FaPlus />
        </button>
      </StyledForm>
      <ContainerList>
        <ul className='list'>
          {tasks.map((task) => (
            <li key={task.id} onDoubleClick={() => deleteTask(task.id)}>
              {task.text}
              <button className='btn-delete'>
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </ContainerList>
    </ContainerForm>
  )
}

export default ListTasks
