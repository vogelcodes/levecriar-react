import styled from 'styled-components';
import bgImg from '../../assets/enxoval-bg.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  h1 {
    margin-top: 64px;
    margin-bottom: 64px;
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 300;
    font-size: 64px;
    line-height: 106.6%;
    /* or 68px */

    text-align: center;
    text-transform: capitalize;
    font-feature-settings: 'ss03' on, 'ss02' on, 'ss01' on, 'ss04' on;

    color: #666349;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
  img {
    margin-top: -70px;
    transform: scale(0.4);
  }
  form {
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    width: 480px;
    text-align: center;
    align-items: center;
  }
  form > input {
    margin-bottom: 8px;
  }
  button {
    margin-top: 8px;
    height: 48px;
    -webkit-appearance: button;
  }
  p {
    font-family: 'Roboto Slab';
    text-align: center;
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${bgImg}) no-repeat center;
  background-size: cover;
`;
