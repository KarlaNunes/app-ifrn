import React from "react";
import { Title } from "./styles";
import { Container, theme } from "../../global/styles/theme";
import { TextInput } from "../../components/Input/styles";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export default function RegisterTask() {
  return(
    <Container bgColor={theme.colors.background}>
        <Title>Cadastro de tarefa</Title>

        <TextInput border="1px solid #B2B2B2" placeholder="Título" />
        <TextInput border="1px solid #B2B2B2" placeholder="Descrição" />
        <TextInput border="1px solid #B2B2B2" placeholder="Categorias" />
        <TextInput border="1px solid #B2B2B2" placeholder="Data" />

        <Button bgColor={theme.colors.primary} content="Cadastrar" /> 

        <Footer />
    </Container>
  )
}