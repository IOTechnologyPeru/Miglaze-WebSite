import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  width: 100%;
  height: 90vh;
  background-color: #242e3c;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Options = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;
`;

export const Option = styled.li`
  font-size: 25px;
  display: flex;
  align-items: center;
`;

export const IconoOption = styled.img`
  max-height: 40px;
  margin-right: 10px;
`;

export const BoxLogo = styled.div`
  color: white;
`;

export const LogoStyle = styled.img`
  max-height: 100px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 10px;
`;

export const Anchor = styled(Link)`
  color: white;
`;
