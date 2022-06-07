import React, { useState, useEffect } from "react";
import { Container, Img, H1, P, ContainerInput, Button } from "./style";
import Pedido from "../../assets/imgs/pedidos.png";
import Lixeira from "../../assets/imgs/lixeira.svg";
import axios from "axios";

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const getPedidos = async () => {
      const response = await axios.get("http://localhost:3001/order");
      console.log(response);
      setPedidos(response.data.pedidos);
    };

    getPedidos();
  }, []);

  async function deletePedido(id) {
    const response = await axios.delete(`http://localhost:3001/order/${id}`);

    if (response.status === 200) {
      setPedidos(response.data.pedidos);
    }
  }

  return (
    <div className="App">
      <Container>
        <Img src={Pedido} />
        <H1>Pedidos</H1>
        {pedidos.length > 0 ? (
          pedidos.map((pedido, index) => (
            <ContainerInput>
              <div key={index}>
                <P>Nome: {pedido.clientName}</P>
                <P>Pedido: {pedido.order}</P>
                <P>Status: {pedido.statuss}</P>
              </div>
              <button onClick={(e) => deletePedido(pedido.id)}>
                <img src={Lixeira} />
              </button>
            </ContainerInput>
          ))
        ) : (
          <div>Sem Items Cadastrados</div>
        )}

        <Button to={"/"}>Voltar</Button>
      </Container>
    </div>
  );
}

export default Pedidos;
