import styled from 'styled-components'
import { ITask } from '../types'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
export const Task = ({title, description, status}: ITask) => {
    
    return(
        <Wrapper>
            <StyledAccordion allowToggle>
                <AccordionItem style={{border: 'none'}}>
                    <AccordionItemTop>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <Title>{title}</Title>
                            </Box>
                            <AccordionIcon boxSize={8} color='white' />
                        </AccordionButton>
                        <EditIcon style={{marginRight: '15px'}} boxSize={6} color='white'/>
                        <DeleteIcon boxSize={6} color='white'/>
                    </AccordionItemTop>
                    <AccordionPanel pb={4}>
                        <Text>{description}</Text>
                        <Text>Status: {status}</Text>
                    </AccordionPanel>
                </AccordionItem>
            </StyledAccordion>
        </Wrapper>
    )
}

const StyledAccordion = styled(Accordion)`
    width: 100%;
`
const AccordionItemTop = styled.div`
    display: flex;
    align-items: center;
`
const Title = styled.p`
    color: #ffffff;
    height: min-content;
`
const Text = styled.p`
    color: #ffffff;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1f2227;
    margin-top: 10px;
    padding: 10px 10px;
    width: 100%;
    border-radius: 10px;
`