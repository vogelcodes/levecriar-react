import React, { useState, FormEvent } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Content, Background } from './styles';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import history from '../../services/history';

interface IUserCreate {
  name: string;
  email: string;
}

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    console.log('submit form');
    try {
      await api.post('users', { name, email });
      toast.success('Cadastro Efetuado!');
      history.push('/thanks');
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }

  return (
    <Container>
      <Content>
        <h1>
          Enxoval
          <br />
          Fácil
        </h1>
        <p>Nosso aplicativo está em fase de desenvolvimento.</p>
        <p>Cadastre-se para comecar a usar assim que for lançado.</p>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome"
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <button type="submit">Cadastre-se</button>
        </form>
        <img src={logoImg} alt="LeveCrar" />
      </Content>
      <Background />
    </Container>
  );
};
export default Signup;
