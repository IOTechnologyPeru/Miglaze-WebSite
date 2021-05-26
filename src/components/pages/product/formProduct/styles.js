import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Form = styled.form`
  position: relative;
  width: 1000px;
  height: 700px;
  left: 50%;
  top: 50%;
  transform: translate(-500px, -350px);
  background-color: white;
  padding: 40px 60px;
  border-radius: 20px;
`;

export const Close = styled.span`
  position: fixed;
  right: 40px;
  top: 20px;
  font-size: 40px;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 40px;
`;

export const SubTitle = styled.p`
  margin: 15px 0;
  font-size: 25px;
`;

export const BoxField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
export const LabelField = styled.label`
  margin-bottom: 5px;
`;

export const TextField = styled.input`
  height: 30px;
`;

export const ButtonSubmit = styled.button`
  padding: 5px 9px;
`;

export const Select = styled.select`
  height: 30px;
`;
