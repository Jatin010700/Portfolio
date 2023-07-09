import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./src/components/home";
import { About } from "./src/components/about";
import { Projects } from "./src/components/project";
import { Contact } from "./src/components/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
