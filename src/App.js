import { useState } from "react";
import "./App.css";
import { Navbar } from "./LayoutComponents";
import AppRouter from "./routes/AppRouter";
import { Footer } from "./LayoutComponents";

//Create theme
const theme = {
  light: {
    foreground: "#111111",
    background: "#ffffff",
  },
  dark: {
    foreground: "#555555",
    background: "#111111",
  },
};
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //Handle dark and light modes
  const handleToggle = () => {
    setIsDarkMode((prevState) => !prevState);
  };
  let value = isDarkMode ? theme.dark : theme.light;
  let { foreground, background } = value;
  return (
    <div className="App" style={{ color: foreground, background: background }}>
      <Navbar toggle={handleToggle} />
      <AppRouter />
      <Footer />
    </div>
  );
}
export default App;