import React from "react";
import { FooterContainer, StyledTouchableOpacity, TextButton } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Footer() {
    return (
        <FooterContainer>
            <StyledTouchableOpacity>
                <MaterialCommunityIcons name="calendar-check-outline" size={24} color="black" />                
                <TextButton>Registrar Tarefa</TextButton>               
            </StyledTouchableOpacity>

            <StyledTouchableOpacity>
                <MaterialCommunityIcons name="format-list-bulleted-triangle" size={24} color="black" />                
                <TextButton>Listar Tarefas</TextButton>               
            </StyledTouchableOpacity>
        </FooterContainer>
    );
}