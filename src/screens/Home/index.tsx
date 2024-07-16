import React from "react";
import ifrn from "../../assets/ifrn.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, theme } from "../../global/styles/theme";
import { Logo, Title } from "../Home/styles";

export default function Home() {
  return(
    <Container bgColor={theme.colors.primary}>
      <Logo source={ifrn} />
      <Title>Agenda IFRN</Title>

      <Input placeholder="Login" /> 
      <Input placeholder="Senha" /> 

      <Button bgColor="#666666" content="Entrar" /> 
    </Container>
  )
}