import { observer } from 'mobx-react'
import { styled } from 'styled-components'
import { Input, InputGroup } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { store } from '../store/store'
import { ITask, Statuses } from '../types'
import { Task } from '../components/Task'
import { useNavigate } from 'react-router-dom'
import { useWindowDimensions } from '../hooks/useWindowDimensions'

export const TodoPage = observer(() => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const navigate = useNavigate()
  const { width } = useWindowDimensions();
  useEffect(() => {
    if(!localStorage.getItem('username')){
        navigate('/login', {replace: true})
    }
    store.downloadUserData()
  }, [])
  const addTask = () => {
    store.createTask(title, description, Statuses.PENDING)
    setTitle('')    
    setDescription('')
  }
  return (
    <Wrapper>
        <ContentWrapper>
            <Title>To-do list</Title>
            <FormWrapper>
                <InputWrapper>
                    <StyledInputGroup>
                        <Input color='#ffffff' variant='flushed' placeholder='Add task' value={title} onChange={(e) => setTitle(e.target.value)} maxLength={40} />
                        <Input color='#ffffff' size='xs' variant='flushed' placeholder='Add description' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </StyledInputGroup>
                    <StyledCheckIcon boxSize={width < 250 ? 6 : 10} viewBox='0 -1.5 14 14' onClick={addTask} color='green.500' />
                </InputWrapper>
            </FormWrapper>
            {store.tasks.map((task: ITask) => {
                return <Task title={task.title} key={task.id} description={task.description} status={task.status} id={task.id} userId={task.userId}/>
            })}
        </ContentWrapper>
        <Footer><Link href='/login'>Logout</Link></Footer>
    </Wrapper>
  )
})
export const Link = styled.a`
    font-weight: 900;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`
export const ContentWrapper = styled.div`
    display: flex;
    padding: 10px 15px;
    flex-direction: column;
    align-items: center;
    width: 500px;
    min-height: 500px;
    height: min-content;    
    @media screen and (max-width: 500px){
        width: 250px;
    }
    @media screen and (max-width: 250px){
        width: 200px;
        padding: 0 5px;
    }
    @media screen and (max-width: 200px){
        width: 150px;
    }
`
export const Footer = styled.p`
    font-size: calc(8px + 0.5vw);
    font-weight: 700;
    color: #06a1d4;
    padding-bottom: 10px;
    cursor: default;
`
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
export const Title = styled.p`
    color: #ffffff;
    font-weight: 900;
    font-size: calc(28px + 0.5vw);
    padding-top: 10px;
    padding-bottom: 10px;
    @media screen and (max-width: 250px){
        font-size: 24px;
    }
    @media screen and (max-width: 200px){
        
    }
`
export const Wrapper = styled.div`
    margin-top: 15vh;
    width: 500px;
    min-height: 500px;
    height: min-content;    
    background-color: #23272f;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    margin-bottom: 250px;
    justify-content: space-between;
    @media screen and (max-width: 500px){
        width: 250px;
    }
    @media screen and (max-width: 250px){
        width: 200px;
    }
    @media screen and (max-width: 200px){
        width: 150px;
    }
`