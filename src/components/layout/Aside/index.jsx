import React from 'react';
import { Aside, NombreEmpresa, RolUsuario, Img } from './styles';
import LogoText from '@img/LogoText.svg';

export default () => {
  return (
    <>
      <Aside>
        <Img src={LogoText}></Img>
        <RolUsuario>Administrador</RolUsuario>
      </Aside>
    </>
  );
};
