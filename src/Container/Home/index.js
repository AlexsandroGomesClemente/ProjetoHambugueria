import React, { useRef } from "react";
import { Container, Img, H1, P, Input, Button } from "./style";
import Logo from "../../assets/imgs/logo.png";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Home() {
  const history = useHistory();
  const pedido = useRef();
  const name = useRef();

  async function newOrder() {
    const response = await axios.post("http://localhost:3001/order", {
      order: pedido.current.value,
      clientName: name.current.value,
      price: 20,
      statuss: "Preparando",
    });

    if (response.status === 200) {
      history.push("/pedidos");
    }
  }

  return (
    <div className="App">
      <Container>
        <Img src={Logo} />
        <H1>Faça seu pedido !</H1>
        <P>Pedido</P>
        <Input ref={pedido} type="text" />
        <P>Nome do Cliente</P>
        <Input ref={name} type="text" />
        <Button onClick={newOrder}>Novo Pedido</Button>
      </Container>
    </div>
  );
}

export default Home;
