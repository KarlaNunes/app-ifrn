import React from "react";
import { Container, theme } from "../../global/styles/theme";
import { StatusBar, View } from "react-native";
import { StyledSubtitle, StyledTitle, StyledView } from "./styles";
import { Footer } from "../../components/Footer";
import { Task } from "../../components/Task";

export default function Tasks() {
    return (
        <Container bgColor={theme.colors.background}>
            <StatusBar
                backgroundColor={theme.colors.primary}
                translucent={false}
                barStyle="light-content"
            />

            <StyledView>
                <StyledTitle>Agenda.IFRN</StyledTitle>
                <StyledSubtitle>
                    Você tem 2 tarefas
                </StyledSubtitle>
            </StyledView>

            <Task taskDescription="Pagar boleto" />
            <Task taskDescription="Arrumar a cama" />
            <Task taskDescription="Entregar notebook" />

            <Footer />
        </Container>
    );
}