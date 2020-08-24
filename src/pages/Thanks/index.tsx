import React from 'react';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.png';

interface IUserCreate {
  name: string;
  email: string;
}

const Thanks: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>
          Enxoval
          <br />
          Fácil
        </h1>
        <h2>Obrigado por se cadastrar. Em breve o app será lançado.</h2>

        <img src={logoImg} alt="LeveCrar" />
      </Content>
      <Background />
    </Container>
  );
};
export default Thanks;
