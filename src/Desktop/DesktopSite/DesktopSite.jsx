import { useState } from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import LeftBanner from '../LeftBanner/LeftBanner.jsx';
import Page from '../Page/Page.jsx';
import Footer from '../Footer/Footer.jsx';
import styles from './DesktopSite.module.css';

const DesktopSite = () => {
  const [page, setPage] = useState('home');
  const [language, setLanguage] = useState('english');
  return (
    <>
      <NavBar props={{ page, setPage, language, setLanguage }} />
      {/* {props.sidebar && <LeftBanner />} */}
      <LeftBanner />
      <p className={styles.a}>a</p>
      <p className={styles.b}>a</p>
      <p className={styles.c}>a</p>
      <p className={styles.d}>a</p>
      <p className={styles.e}>a</p>
      <Page props={{ page, setPage, language, setLanguage }} />
      <Footer props={{ language, setLanguage }} />
    </>
  );
};

export default DesktopSite;
