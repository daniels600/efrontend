import "./styles/style.css";
import "tailwindcss/lib/css/preflight.css";
import GlobalStyles from "styles/GlobalStyles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollToTopButton from "components/misc/ScrollToTopButton.js";
import HomePage from "./pages/home/index";
// import AnimationRevealPage from "helpers/AnimationRevealPage"
// import Hero from "components/hero/FullWidthWithImage"

function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        margin: "0" /* Set margin to 0 to remove extra space */,
        width: "100% !important" /* Set width to 100vw to fit the screen width */,
      }}
    >
      {/* <FixedBanner /> */}
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} />
          <Route path="/components/:type/:name" element={<ComponentRenderer />} />
          <Route path="/thank-you" element={<ThankYouPage />} /> */}
        </Routes>
      </Router>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
