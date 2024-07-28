import { BrowserRouter,Routes,Route } from "react-router-dom"
import SignIn from "src/pages/auth/signIn"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router