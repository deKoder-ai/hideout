import { useMediaQuery } from "react-responsive";
import MobileSite from "./Mobile/MobileSite/MobileSite.jsx";

import "./App.css";
import "./reset.css";

const DesktopSite = () => <h1>Desktop Version</h1>;
// const MobileSite = () => <h1>Mobile Version</h1>;

function App() {
  // let screenWidth = window.innerWidth;
  const isMobile = useMediaQuery({ maxWidth: 999 });

  return isMobile ? <MobileSite /> : <DesktopSite />;
}

export default App;
