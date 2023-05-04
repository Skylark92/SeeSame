import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomeView from "../components/WelcomeView/WelcomeView";
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage";
import TutorialPage from '../pages/TutorialPage/TutorialPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route path="/tutorial" element={<TutorialPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/survey" element={"survey"} />
        <Route path="/editprofile" element={<EditProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;