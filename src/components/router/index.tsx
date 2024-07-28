import { BrowserRouter,Routes,Route } from "react-router-dom"
import SignIn from "src/pages/auth/signIn"
import SignUp from "src/pages/auth/signUp"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router