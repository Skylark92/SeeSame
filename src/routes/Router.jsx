import { Routes, Route, BrowserRouter } from "react-router-dom"
import WelcomeView from "../components/WelcomeView/WelcomeView"
import NotFound from "../pages/NotFound/NotFound"
import Result from "../pages/Result/Result"
import SignUp from "../pages/SignUp/SignUp"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeView/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/404" element={<NotFound/>}/>
        <Route path="/result" element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  )
}
