import React from "react";
import { Container, Title, Logo } from "./styles";
import ifrn from "../../assets/ifrn.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Home() {
  return(
    <Container>
      <Logo source={ifrn} />
      <Title>Agenda IFRN</Title>

      <Input placeholder="Login" /> 
      <Input placeholder="Senha" /> 

      <Button bgColor="#666666" content="Entrar" /> 
    </Container>
  )
}