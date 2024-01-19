import { observer } from 'mobx-react'
import { styled } from 'styled-components'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useState } from 'react'

export const TodoPage = observer(() => {
  const [task, setTask] = useState<string>('')
  return (
    <Wrapper>
        <Title>To-do list</Title>
        <InputGroup>
          <Input color='#ffffff' placeholder='task' value={task} onChange={(e) => setTask(e.target.value)} />
          <InputRightElement>
            <CheckIcon color='green.500' />
          </InputRightElement>
        </InputGroup>
    </Wrapper>
  )
})
const Title = styled.p`
    color: #ffffff;
    font-weight: 900;
    font-size: calc(28px + 0.5vw);
`
const Wrapper = styled.div`
    margin-top: 15vh;
    width: 500px;
    height: 500px;
    background-color: #23272f;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
`