import { observer } from 'mobx-react'
import { styled } from 'styled-components'
import { ContentWrapper, Footer, Link, Title, Wrapper } from './TodoPage'
import { Avatar, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { store } from '../store/store'
import { useNavigate } from 'react-router-dom'
export const RegPage = observer(() => {
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>('')
    const [error, setError] = useState<string>('')
    useEffect(() => {
        store.setUser(null)
        localStorage.clear()
    }, [])
    const handleRegistration = async () => {
        localStorage.setItem('username', username)
        const response = await store.registration(username)
        if(response && !response.message){
            navigate('/', {replace: true})
        }
        else if(response?.message === "Validation error"){
            setError('User with this name already exists')
        }
    }
    return (
        <Wrapper style={{minHeight: '250px'}}>
            <ContentWrapper style={{minHeight: '250px'}}>
                <Title>Registration</Title>
                <StyledInputGroup>
                    <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em'>
                        <Avatar size='xs' bg='teal.500' />
                    </InputLeftElement>
                    <Input color='white' value={username} onChange={(e) => setUsername(e.target.value)} variant='outline' placeholder='Username' />
                    <InputRightElement color='gray.300' fontSize='1.2em'>
                        <StyledArrowRightIcon onClick={handleRegistration} />
                    </InputRightElement>
                </StyledInputGroup>
                <Error>{error}</Error>
            </ContentWrapper>
            <Footer>Do you have an account yet? <Link href='/login '>Login</Link></Footer>
        </Wrapper>
    )
})
const StyledArrowRightIcon = styled(ArrowRightIcon)`
    cursor: pointer;
`
const Error = styled.p`
    color: #ffffff;
    padding-top: 30px;
`
const StyledInputGroup = styled(InputGroup)`
    margin-top: 30px;
`