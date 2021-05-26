import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  height: 90vh;
`;

export const BoxLogo = styled.div`
  background-color: #242e3c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoStyle = styled.img`
  max-height: 400px;
`;

export const Version = styled.p`
  color: white;
  font-size: 20px;
`;

export const BoxLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
`;

export const BoxInput = styled.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const LabelStyle = styled.label`
  font-size: 20px;
  padding-bottom: 10px;
`;

export const InputStyle = styled.input`
  border-bottom: 2px solid $gray;
  border: none;
  font-size: 1.3rem;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  border-bottom: 2px solid;
`;

export const ButtonLogin = styled.button`
  margin-top: 10px;
  width: 300px;
  height: 50px;
  background: #f2c94c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
