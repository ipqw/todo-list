import { observer } from 'mobx-react'
import { styled } from 'styled-components'
import { ContentWrapper, Footer, Link, Title, Wrapper } from './TodoPage'
import { Text } from '../components/Task'
export const ErrorPage = observer(() => {

    return (
        <Wrapper>
            <StyledContentWrapper>
                <Title>Error!</Title>
                <Text>Something went wrong.</Text>
            </StyledContentWrapper>
            <Footer>Go to <Link href='/login'>login</Link> / <Link href='/reg'>sign up</Link> page</Footer>
        </Wrapper>
    )
})
const StyledContentWrapper = styled(ContentWrapper)`
    justify-content: space-evenly;
`