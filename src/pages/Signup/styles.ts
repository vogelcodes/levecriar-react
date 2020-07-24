import styled from 'styled-components';
import bgImg from '../../assets/enxoval-bg.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
  img {
    transform: scale(0.4);
  }
  form {
    margin: 80px 0;
    width: 480px;
    text-align: center;
  }
  p {
    font-family: serif;
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${bgImg}) no-repeat center;
  background-size: cover;
`;
