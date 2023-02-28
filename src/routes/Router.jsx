import { Routes, Route, BrowserRouter } from "react-router-dom"
import WelcomeView from "../components/WelcomeView/WelcomeView"
import NotFound from "../pages/NotFound/NotFound"
import SignUp from "../pages/SignUp/SignUp"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeView/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/404" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
