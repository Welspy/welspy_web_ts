import * as S from "./style"

const SignIn = () => {
    return(
        <S.Wrapper>
            <S.SignInWrapper>
                <S.SignInTitle>로그인</S.SignInTitle>
                <S.InputWrapper>
                   <S.InputSpanWrapper>
                        <S.BoxSpan>이메일</S.BoxSpan>
                        <S.EmailInput/>
                   </S.InputSpanWrapper>
                   <S.InputSpanWrapper>
                        <S.BoxSpan>비밀번호</S.BoxSpan>
                        <S.PassWordInput />
                   </S.InputSpanWrapper>
                   
                    <S.SiginInButton>로그인</S.SiginInButton>
                </S.InputWrapper>
            </S.SignInWrapper>
        </S.Wrapper>
    )
}

export default SignIn