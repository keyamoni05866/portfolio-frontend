import Banner from "./pages/Banner/Banner";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import EducationInfo from "./pages/Education/Education";
import Education from "./pages/Education/Education";
import Project from "./pages/Projects/Project";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <Banner />
      <EducationInfo />
      <Skills />
      <Project />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
