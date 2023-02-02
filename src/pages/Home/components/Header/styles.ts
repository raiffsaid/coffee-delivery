import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  max-width: 1280px;
  margin: auto;
`;

export const LocationAndShoppingCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;

  div:first-child {
    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme.purple};
    line-height: 1.6;
  }

  div:last-child {
    background: ${props => props.theme['yellow-light']};
    line-height: 1.6;
  }
`;
