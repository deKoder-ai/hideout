import Cocktail from '../../assets/img/cocktail-glass.svg';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import AboutThai from '../About/AboutThai.jsx';
import styles from './Page.module.css';

const Page = ({ props }) => {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.margin}>
          <img src={Cocktail} alt='' className={styles.marginGlass} />
        </div>
        <div className={styles.content}>
          {props.page === 'home' && <Home />}
          {props.page === 'about' && props.language === 'english' && <About />}
          {props.page === 'about' && props.language === 'thai' && <AboutThai />}
          {/* {props.page === 'menu' && <Menu />} */}
          {/* {props.page === 'findUs' && <FindUs />} */}
          <div className={styles.spacer}></div>
        </div>
        <div className={styles.margin}>
          <img src={Cocktail} alt='' className={styles.marginGlass} />
        </div>
      </div>
    </>
  );
};

export default Page;
