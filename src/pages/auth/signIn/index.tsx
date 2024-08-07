import * as S from "./style";
import useSignIn from "src/hook/auth/signIn";

const SignIn = () => {
  const { user, userHandle, signInButton } = useSignIn();
  return (
    <S.Wrapper>
      <S.SignInWrapper>
        <S.SignInTitle>로그인</S.SignInTitle>
        <S.InputWrapper>
          <S.InputSpanWrapper>
            <S.BoxSpan>이메일</S.BoxSpan>
            <S.EmailInput onChange={userHandle} name="email" value={user.email} />
          </S.InputSpanWrapper>
          <S.InputSpanWrapper>
            <S.BoxSpan>비밀번호</S.BoxSpan>
            <S.PassWordInput onChange={userHandle} name="password" value={user.password} />
          </S.InputSpanWrapper>
          <S.SiginInButton onClick={signInButton}>로그인</S.SiginInButton>
        </S.InputWrapper>
      </S.SignInWrapper>
    </S.Wrapper>
  );
};

export default SignIn;
