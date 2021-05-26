import React from 'react';
import {
  Nav,
  Options,
  Option,
  IconoOption,
  Anchor,
  BoxLogo,
  LogoStyle,
} from './styles';
import Logo from '@img/Logo.png';
import Producto from '@img/producto.png';
import Ventas from '@img/ventas.png';
import Personal from '@img/personal.png';

export default () => {
  return (
    <>
      <Nav>
        <div>
          <img src='#' alt='Photo User' />
          <p>Marco Atencio</p>
        </div>
        <Options>
          <Option>
            <IconoOption src={Producto} alt='producto' />
            <Anchor to='/productos'>Productos</Anchor>
          </Option>
          <Option>
            <IconoOption src={Personal} alt='personal' />
            <Anchor to='/personal'>Personal</Anchor>
          </Option>
          <Option>
            <IconoOption src={Ventas} alt='ventas' />
            <Anchor to='/ventas'>Ventas</Anchor>
          </Option>
        </Options>
        <BoxLogo>
          <LogoStyle src={Logo} alt='Logo' />
          <p>Desktop Version 1.0 x64</p>
        </BoxLogo>
      </Nav>
    </>
  );
};
