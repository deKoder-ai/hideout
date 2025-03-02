import { useEffect } from 'react';
import Slideshow from '../Slideshow/Slideshow.jsx';

function SetTitle() {
  useEffect(() => {
    document.title = 'HIDEOUT | Home';
  }, []);
}
const Home = () => {
  SetTitle();
  return (
    <>
      <Slideshow />
    </>
  );
};

export default Home;
