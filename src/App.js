import { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./LayoutComponents";
import AppRouter from "./routes/AppRouter";
import { Footer } from "./LayoutComponents";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";

function ErrorFallback({ error }) {
  return (
    <div role="alert" className="errorFallback-wrapper">
      <p>Something went wrong!</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
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
        <AppRouter />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
export default App;
