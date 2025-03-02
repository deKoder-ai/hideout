import { useEffect } from 'react';
import Logo from '../../assets/img/hideoutCut.png';
import Slideshow from '../Slideshow/Slideshow';
import styles from './Home.module.css';

function SetTitle() {
  useEffect(() => {
    document.title = 'HIDEOUT | Home';
  }, []);
}
const Home = () => {
  SetTitle();
  return (
    <>
      <div className={styles.container}>
        <img src={Logo} alt='' className={styles.logo} />
        <Slideshow />
      </div>
    </>
  );
};

export default Home;
