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
    align-items: center;
    justify-content: center;
    background-color: #1a1d23;
    /* background-color: #087EA4; */
    /* background-color: #23272f; */
    width: 100vw;
    min-height: 100lvh;
`