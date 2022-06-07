import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const Img = styled.img`
  width: 142px;
  height: 154px;
  margin-bottom: 25px;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  margin-bottom: 38px;
`;

export const P = styled.p`
  padding-left: 15px;
  font-style: normal;
  background-color: rgba(255, 255, 255, 0.25);
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #eeeeee;

  margin-bottom: 2px;
`;

export const ContainerInput = styled.div`
  padding: 19px 15px;
  margin-bottom: 42px;

  width: 382px;
  height: 111px;

  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 14px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  button > img {
    background: transparent;
    border: none;
  }
`;

export const Button = styled(Link)`
  width: 342px;
  height: 68px;
  padding: 24px 113px;
  margin-top: 16px;

  background: #d93856;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 2px;

  text-decoration: none;
  text-align: center;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
