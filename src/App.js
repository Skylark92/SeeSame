import "./App.css";
import Header from "./components/Header/Header";
import Router from "./routes/Router";
import ContentSection from "./components/ContentSection/ContentSection";

function App() {
  return (
    <div className="viewport-wrapper">
      <Header/>
      <ContentSection>
        <Router/>
      </ContentSection>
    </div>
  );
}
export default App;