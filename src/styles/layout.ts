import styled from "styled-components";

export const Container = styled.div`
  margin: 20px auto;
  display: grid;
  grid-gap: 25px;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

export const Header = styled.header`
  grid-area: header;
  justify-self: center;
`;

export const Main = styled.main`
  grid-area: main;
  padding-left: 2%;
`;

export const Footer = styled.footer`
  grid-area: footer;
  padding: 20px;
  background: maroon;
  color: #fff;
`;
