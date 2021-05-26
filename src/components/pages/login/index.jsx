import React from 'react';
import Logo from '@img/Logo.png';
import {
  Section,
  BoxLogo,
  Version,
  BoxLogin,
  Title,
  BoxInput,
  InputStyle,
  LabelStyle,
  ButtonLogin,
} from './styles.js';

export default () => {
  return (
    <>
      <Section>
        <BoxLogo>
          <img alt='logo' src={Logo} />
          <Version>Desktop Version 1.0 x64</Version>
        </BoxLogo>
        <BoxLogin>
          <Title>SING IN</Title>
          <div>
            <BoxInput>
              <LabelStyle>Username</LabelStyle>
              <InputStyle
                type='email'
                id='email'
                placeholder='name@example.com'
              />
            </BoxInput>
            <BoxInput>
              <LabelStyle>Password</LabelStyle>
              <InputStyle type='password' id='password' placeholder='*****' />
            </BoxInput>
          </div>

          <ButtonLogin>SING IN</ButtonLogin>
        </BoxLogin>
      </Section>
    </>
  );
};
