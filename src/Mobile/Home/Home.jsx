import { useEffect } from "react";
import Logo from "../../assets/img/ho-logo-sm.jpg";
import Map from "../FindUs/Map";

function SetTitle() {
  useEffect(() => {
    document.title = "HIDEOUT | Home";
  }, []);
}
const Home = () => {
  SetTitle();
  return (
    <>
      <img src={Logo} alt="" />
    </>
  );
};

export default Home;
