import React from 'react';
import Aside from './Aside';
import Nav from './Nav';
import { Main } from './styles.js';

export default ({ children }) => {
  return (
    <>
      <Aside />
      <Main>
        <Nav />
        {children}
      </Main>
    </>
  );
};
