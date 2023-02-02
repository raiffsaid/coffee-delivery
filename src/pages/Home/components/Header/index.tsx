import { MapPin, ShoppingCart } from 'phosphor-react';
import logo from '../../../../assets/logo.svg';
import { defaultTheme } from '../../../../styles/themes/default';
import { HeaderContainer, LocationAndShoppingCartContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <LocationAndShoppingCartContainer>
        <div>
          <MapPin size={26} weight="fill" color={defaultTheme.purple} />
          Belém, PA
        </div>

        <div>
          <ShoppingCart size={26} weight="fill" color={defaultTheme['yellow-dark']} />
        </div>
      </LocationAndShoppingCartContainer>
    </HeaderContainer>
  );
}