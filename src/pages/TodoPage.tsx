import { observer } from 'mobx-react'
import { styled } from 'styled-components'
import { Input, InputGroup } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { store } from '../store/store'
import { ITask, Statuses } from '../types'
import { Task } from '../components/Task'

export const TodoPage = observer(() => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const addTask = () => {
    // store.createTask(title, description, Statuses.AWAITS)
    store.addTask({title, description, status: Statuses.PENDING, id: 0, userId: 0})
  }
  return (
    <Wrapper>
        <Title>To-do list</Title>
        <FormWrapper>
            <InputWrapper>
                <StyledInputGroup>
                    <Input color='#ffffff' variant='flushed' placeholder='Add task' value={title} onChange={(e) => setTitle(e.target.value)} maxLength={40} />
                    <Input color='#ffffff' size='xs' variant='flushed' placeholder='Add description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </StyledInputGroup>
                <StyledCheckIcon boxSize={10} viewBox='0 -1.5 14 14' onClick={addTask} color='green.500' />
            </InputWrapper>
        </FormWrapper>
        {store.tasks.map((task: ITask) => {
            return <Task title={task.title} key={Math.random()} description={task.description} status={task.status} id={task.id} userId={task.userId}/>
        })}
    </Wrapper>
  )
})
const StyledInputGroup = styled(InputGroup)`
    display: flex;
    flex-direction: column;
    padding-right: 15px;
`
const FormWrapper = styled.div`
    width: 100%;
    background-color: #1a1d23;
    padding: 15px 20px;
    border-radius: 10px;
`
const StyledCheckIcon = styled(CheckIcon)`
    cursor: pointer;
`
const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`
const Title = styled.p`
    color: #ffffff;
    font-weight: 900;
    font-size: calc(28px + 0.5vw);
    padding-top: 10px;
`
const Wrapper = styled.div`
    padding: 10px 15px;
    margin-top: 15vh;
    width: 500px;
    min-height: 500px;
    height: min-content;    
    background-color: #23272f;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
`