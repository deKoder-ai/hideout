import { useState } from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import AboutThai from '../About/AboutThai.jsx';
import Menu from '../Menu/Menu.jsx';
import FindUs from '../FindUs/FindUs.jsx';
import FindUsThai from '../FindUs/FindUsThai.jsx';
import Footer from '../Footer/Footer.jsx';
import styles from './MobileSite.module.css';

const MobileSite = () => {
  const [page, setPage] = useState('home');
  const [language, setLanguage] = useState('english');
  return (
    <>
      <NavBar props={{ page, setPage, language, setLanguage }} />
      <div className={styles.spacer}>
        <p className={styles.a}>a</p>
        <p className={styles.b}>a</p>
        <p className={styles.c}>a</p>
        <p className={styles.d}>a</p>
        <p className={styles.e}>a</p>
      </div>
      <div className={styles.container}>
        {page === 'home' && <Home />}
        {page === 'about' && language === 'english' && <About />}
        {page === 'about' && language === 'thai' && <AboutThai />}
        {page === 'menu' && language === 'english' && <Menu />}
        {page === 'findUs' && language === 'english' && <FindUs />}
        {page === 'findUs' && language === 'thai' && <FindUsThai />}
      </div>
      <div className={styles.spacerFooter}></div>
      <Footer props={{ language, setLanguage }} />
    </>
  );
};

export default MobileSite;
