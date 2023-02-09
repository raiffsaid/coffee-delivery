import { IntroBackground, IntroContainer, TextContainer } from './styles';

export function Intro() {
  return (
    <IntroBackground>
      <IntroContainer>
        <TextContainer>
          <p>Encontre o café perfeito para qualquer hora do dia</p>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </TextContainer>
      </IntroContainer>
    </IntroBackground>
  );
}