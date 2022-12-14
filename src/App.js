import { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./LayoutComponents";
import AppRouter from "./routes/AppRouter";
import { Footer } from "./LayoutComponents";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";
import { ArrowUpward } from "@mui/icons-material";

function ErrorFallback({ error }) {
  return (
    <div role="alert" className="errorFallback-wrapper">
      <p>Something went wrong!</p>
      <p style={{ color: "red", maxWidth: '80%', padding: '4%', fontSize: '24px'}}>{error.message}</p>
    </div>
  );
}
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
  const handleError = useErrorHandler();

  //use effect to handle error
  useEffect(() => {
    handleError();
  }, [handleError]);

  //Handle dark and light modes
  const handleToggle = () => {
    setIsDarkMode((prevState) => !prevState);
  };
  let value = isDarkMode ? theme.dark : theme.light;
  let { foreground, background } = value;
  return (
    <div className="App" style={{ color: foreground, background: background }}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navbar toggle={handleToggle} />
        <div id='region'>{}</div>
        <a href='#region' className="jumper"><ArrowUpward /></a>
        <AppRouter />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
export default App;