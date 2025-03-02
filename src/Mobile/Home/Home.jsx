import { useEffect } from 'react';
import Logo from '../../assets/img/hideoutCut.png';
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
        <p>Add portrait slideshow here</p>
      </div>
    </>
  );
};

export default Home;
