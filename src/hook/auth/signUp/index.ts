import axios from "axios";
import { useCallback, useState } from "react";
import CONFIG from "src/config/config.json";

interface SignUp {
  email: string | undefined;
  name: string | undefined;
  phoneNumber: string | undefined;
  password: string | undefined;
}

const useSignUp = () => {
  const [signUp, setSignUp] = useState<SignUp>({ email: "", name: "", phoneNumber: "", password: "" });

  const signUpHandle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;

      setSignUp((prev) => ({ ...prev, [name]: value }));
    },
    [setSignUp]
  );

  const signUpButton = async () => {
    if (signUp.email && signUp.name && signUp.password && signUp.phoneNumber !== "") {
      await axios
        .post(
          `${CONFIG.serverUrl}/auth/sign-up`,
          {
            email: signUp.email,
            name: signUp.name,
            phoneNumber: signUp.phoneNumber,
            password: signUp.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.status === 201) {
            alert("회원가입 성공");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("회원가입 실패");
    }
  };

  return {
    signUpButton,
    signUpHandle,
    signUp,
  };
};

export default useSignUp;
