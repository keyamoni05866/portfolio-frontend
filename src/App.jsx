import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Projects/Project";

function App() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <Project />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
