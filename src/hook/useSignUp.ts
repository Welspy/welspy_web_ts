import axios from "axios"
import { sign } from "crypto"
import { useCallback, useState } from "react"
import CONFIG from "src/config/config.json"


interface SignUp {
    email: string | undefined,
    name: string | undefined,
    phoneNumber: string | undefined,
    password: string | undefined,
}

const useSignUp = () => {

    const [signUp, setSignUp] = useState<SignUp>({email: "", name: "", phoneNumber: "", password: ""})


    const SignUpHandle = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        
    },[])

    const signUpButton = async() => {
        await axios.post(`${CONFIG.serverUrl}/auth/sign-up`, {
            email: signUp.email,
            name: signUp.name,
            phoneNumber: signUp.phoneNumber,
            password: signUp.password,
        }).then(res => {
            if(res.status === 200) {
                alert("회원가입 성공")
            }
        }).catch(error => {
            console.error(error)
        })
    }


    return {

    }
}

export default useSignUp