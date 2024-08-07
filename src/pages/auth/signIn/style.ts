import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInWrapper = styled.div`
  width: 25%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SignInTitle = styled.span`
  font-size: 2.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  flex-direction: column;
  justify-content: space-between;
`;

export const EmailInput = styled.input`
  width: 98.5%;
  height: 80%;

  border-radius: 0.5rem;
`;

export const PassWordInput = styled.input`
  width: 98.5%;
  height: 80%;

  border-radius: 0.5rem;
`;

export const SiginInButton = styled.button`
  width: 100%;
  height: 18%;
  background-color: #ec2761;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  color: white;
  border: none;
`;

export const BoxSpan = styled.span`
  font-size: 1.2rem;
  margin-bottom: 2%;
`;
export const InputSpanWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 28%;
`;
