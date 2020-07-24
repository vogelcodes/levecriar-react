import React from 'react';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.png';

const Signup: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="LeveCrar" />
      <form>
        <h1>Enxoval Facil - LeveCriar</h1>
        <p>Nosso aplicativo está em fase de desenvolvimento</p>
        <p>Cadastre-se para comecar a usar assim que for lançado.</p>

        <input placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <button type="submit">Cadastrar</button>
      </form>
    </Content>
    <Background />
  </Container>
);

export default Signup;
