import axios from "axios";
import { useState, useCallback } from "react";
import CONFIG from "src/config/config.json";

interface SignIn {
  email: string | undefined;
  password: string | undefined;
}

const useSignIn = () => {
  const [user, setUser] = useState<SignIn>({ email: "", password: "" });

  const userHandle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setUser((prev) => ({ ...prev, [name]: value }));
    },
    [setUser]
  );

  const signInButton = async () => {
    if (user.email && user.password !== "") {
      await axios
        .post(
          `${CONFIG.serverUrl}/auth/sign-in`,
          {
            email: user.email,
            password: user.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            alert("로그인 성공");
          }
        })
        .catch((error) => {
          console.error(error.response);
        });
    } else {
      alert("이메일과 비밀번호를 입력해주세요");
    }
  };

  return {
    signInButton,
    userHandle,
    user,
  };
};

export default useSignIn;
