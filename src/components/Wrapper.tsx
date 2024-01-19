import styled from 'styled-components'
import { ReactNode } from 'react'
export const Wrapper = ({ children }: {children: ReactNode}) => {
    
    return(
        <WrapperDiv>
            {children}
        </WrapperDiv>
    )
}
const WrapperDiv = styled.div`
    display: flex;
    justify-content: center;
    background-color: #1a1d23;
    width: 100vw;
    min-height: 100lvh;
    max-width: 100%;
`