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

  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #eeeeee;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  padding: 19px 15px;
  margin-bottom: 42px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;

  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
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

  text-align: center;

  text-decoration: none;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
