import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomeView from "../components/WelcomeView/WelcomeView";
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage";
import TutorialPage from '../pages/TutorialPage/TutorialPage';
import SurveyPage from "../pages/SurveyPage/SurveyPage";
import ErrorPage from '../pages/ErrorPage/ErrorPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route path="/tutorial" element={<TutorialPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/survey/:id" element={<SurveyPage />} />
        <Route path="/editprofile" element={<EditProfilePage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;