import Cocktail from '../../assets/img/cocktail-glass.svg';
import styles from './Page.module.css';

const Page = () => {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.margin}>
          <img src={Cocktail} alt='' className={styles.marginGlass} />
        </div>
        <div className={styles.content}></div>
        <div className={styles.margin}>
          <img src={Cocktail} alt='' className={styles.marginGlass} />
        </div>
      </div>
    </>
  );
};

export default Page;
