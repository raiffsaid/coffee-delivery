import styled from 'styled-components';
import background from '../../../../assets/background.png';

export const IntroBackground = styled.div`
  background: url(${background});
  max-width: 1440px;
  margin: auto;
  height: 34rem;
`;

export const IntroContainer= styled.div`
  margin: auto;
  max-width: 1280px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  width: 36.75rem;

  p:first-child {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    margin-top: 5.875rem;
    margin-bottom: 0;
  }

  p:last-child {
    font-family: 'Roboto', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    margin: 0;
  }
`;