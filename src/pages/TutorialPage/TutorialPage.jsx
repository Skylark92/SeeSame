import { useEffect, useState } from "react";
import Survey from "../../components/Survey/Survey";
import getSurvey from "../../firebase/getSurvey";

function TutorialPage() {
  const [survey, setSurvey] = useState(null);

  useEffect(() => {
    getSurvey("snV05QUadOTnXZBbMF6D").then(res => {
      setSurvey(res);
    })
  }, [])

  return survey && (<Survey survey={survey} />);
}

export default TutorialPage;