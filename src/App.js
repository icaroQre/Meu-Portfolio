import { ThemeProvider } from "styled-components";
import Navbar from "./components/NavBar";
import AboutSection from "./sections/AboutSection";
import HomeSection from "./sections/HomeSection";
import ProjectSection from "./sections/ProjectSection";
import colors from "./styles/colors";

function App() {
  return (
    <ThemeProvider theme = {{ colors}}>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
    </ThemeProvider>
  );
}

export default App;
