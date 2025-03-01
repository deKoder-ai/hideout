import Cocktail from '../../assets/img/cocktail-glass.svg';
import About from '../About/About.jsx';
import styles from './Page.module.css';

const Page = ({ props }) => {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.margin}>
          <img src={Cocktail} alt='' className={styles.marginGlass} />
        </div>
        <div className={styles.content}>
          {/* {page === 'home' && <Home />} */}
          {props.page === 'about' && <About />}
          {/* {props.page === 'menu' && <Menu />} */}
          {/* {props.page === 'findUs' && <FindUs />} */}
        </div>
        <div className={styles.margin}>
          <img src={Cocktail} alt='' className={styles.marginGlass} />
        </div>
      </div>
    </>
  );
};

export default Page;
