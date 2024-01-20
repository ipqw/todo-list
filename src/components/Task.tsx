import styled from 'styled-components'
import { ITask } from '../types'
import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ButtonGroup, Editable, EditableInput, EditablePreview, Flex, IconButton, Input, useEditableControls } from '@chakra-ui/react'
import { store } from '../store/store'
export const Task = ({title, description, status, id}: ITask) => {
    const EditableControls = () => {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls()
    
        return isEditing ? (
            <ButtonGroup justifyContent='center' size='sm'>
                <CheckIcon color='white' {...getSubmitButtonProps()} />
                <CloseIcon color='white' {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent='center'>
                <EditIcon color='white' {...getEditButtonProps()} />
            </Flex>
        )
    }
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
                        <DeleteIcon onClick={() => store.deleteTask(id || 0)} style={{cursor: 'pointer'}} boxSize={6} color='white'/>
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