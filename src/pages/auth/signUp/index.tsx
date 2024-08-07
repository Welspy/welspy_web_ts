import * as S from "./style";
import useSignUp from "src/hook/auth/signUp";

const SignUp = () => {
  const { signUp, signUpButton, signUpHandle } = useSignUp();

  return (
    <S.Wrapper>
      <S.SignUpWrapper>
        <S.SignUpTitle>회원가입</S.SignUpTitle>
        <S.InputWrapper>
          <S.InputSpanWrapper>
            <S.BoxSpan>이메일</S.BoxSpan>
            <S.EmailInput onChange={signUpHandle} value={signUp.email} name="email" />
          </S.InputSpanWrapper>
          <S.InputSpanWrapper>
            <S.BoxSpan>전화번호</S.BoxSpan>
            <S.phoneInputWrapper>
              <S.PhoneNumInput onChange={signUpHandle} value={signUp.phoneNumber} name="phoneNumber" />
              <S.PhoneCheckInput type="text" />
            </S.phoneInputWrapper>
          </S.InputSpanWrapper>
          <S.InputSpanWrapper>
            <S.BoxSpan>비밀번호</S.BoxSpan>
            <S.PassWordInput onChange={signUpHandle} value={signUp.password} name="password" />
          </S.InputSpanWrapper>
          <S.InputSpanWrapper>
            <S.BoxSpan>비밀번호 확인</S.BoxSpan>
            <S.PassWordCheck />
          </S.InputSpanWrapper>
          <S.InputSpanWrapper>
            <S.BoxSpan>이름</S.BoxSpan>
            <S.NameInput onChange={signUpHandle} value={signUp.name} name="name" />
          </S.InputSpanWrapper>
          <S.InputSpanWrapper>
            <S.SignUpButton onClick={signUpButton}>회원가입</S.SignUpButton>
            <S.phoneInputWrapper>
              <S.BoxSpan>계정이 있으신가요?</S.BoxSpan>
              <S.LoginSpan>로그인</S.LoginSpan>
            </S.phoneInputWrapper>
          </S.InputSpanWrapper>
        </S.InputWrapper>
      </S.SignUpWrapper>
    </S.Wrapper>
  );
};

export default SignUp;
