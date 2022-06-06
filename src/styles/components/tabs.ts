import styled from "styled-components";

type ITabButton = { isActive: boolean };

export const Container = styled.div`
  font-family: arial;
  margin: 0 auto;
  width: 70%;
  text-align: center;
  margin-top: 15vh;
  margin-bottom: 50px;
`;

export const TabButton = styled.button<ITabButton>`
  margin-right: 15px;
  font-size: 20px;
  background: transparent;
  border: none;
  outline: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  color: ${(props) => (props.isActive ? "black" : "rgba(0, 0, 0, 0.4)")};
  border-bottom: 2px solid
    ${(props) => (props.isActive ? "#42b3f4" : "transparent")};
`;
