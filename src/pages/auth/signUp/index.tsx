import * as S from "./style"

const SignUp = () => {
    return (
        <S.Wrapper>
            <S.SignUpWrapper>
                <S.SignUpTitle>회원가입</S.SignUpTitle>
                <S.InputWrapper>
                    <S.InputSpanWrapper>
                        <S.BoxSpan>이메일</S.BoxSpan>
                        <S.EmailInput />
                    </S.InputSpanWrapper>
                    <S.InputSpanWrapper>
                        <S.BoxSpan>전화번호</S.BoxSpan>
                        <S.phoneInputWrapper>
                            <S.PhoneNumInput />
                            <S.PhoneCheckInput type="text"/>    
                        </S.phoneInputWrapper>   
                    </S.InputSpanWrapper>
                    <S.InputSpanWrapper>
                        <S.BoxSpan>비밀번호</S.BoxSpan>
                        <S.PassWordInput />
                    </S.InputSpanWrapper>
                    <S.InputSpanWrapper>
                      <S.BoxSpan>비밀번호 확인</S.BoxSpan>
                      <S.PassWordCheck />
                    </S.InputSpanWrapper>
                    <S.InputSpanWrapper>
                        <S.BoxSpan>이름</S.BoxSpan>
                        <S.NameInput />
                    </S.InputSpanWrapper>
                    <S.InputSpanWrapper>
                        <S.SignUpButton>회원가입</S.SignUpButton>
                        <S.phoneInputWrapper>
                        <S.BoxSpan>계정이 있으신가요?</S.BoxSpan>
                        <S.LoginSpan>로그인</S.LoginSpan>
                        </S.phoneInputWrapper>
                        
                    </S.InputSpanWrapper>
                </S.InputWrapper>
            </S.SignUpWrapper>
        </S.Wrapper>
    )
}

export default SignUp