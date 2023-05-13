import "./SurveyPage.css"
import Slide from "../../components/Slide/Slide";
import Survey from "../../components/Survey/Survey";
import { createRef, forwardRef, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getSurveyList from "../../firebase/getSurveyList";

function SurveyPage() {
  const [survey, setSurvey] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const refs = useRef([]);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.children.surveyId.value;
        if (params.id !== id) navigate(`/survey/${id}`);
        //
      } else {
        //
      }
    });
  }, { threshold: 0.5 });

  useEffect(() => {
    refs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    })

    return () => {
      observer.disconnect();
    }
  })

  useEffect(() => {
    getSurveyList().then((surveys) => {
      surveys.forEach((_, i) => refs.current[i] = createRef());
      setSurvey(surveys);
      if (!params.id) navigate(surveys[0].sid);
    }).catch(err => {
      console.log(err);
      alert("error");
    });
  }, [])

  return (
    <Slide>
      {survey.map((s, i) => <Content survey={s} ref={refs.current[i]} key={s.sid} />)}
    </Slide>
  )
}

export default SurveyPage;

//
const Content = forwardRef(({ survey }, ref) => {
  const surveyRef = ref;

  return (
    <div ref={surveyRef}>
      <Survey survey={survey} />
      <input type="hidden" name="surveyId" value={survey.sid} />
    </div>
  )
})
