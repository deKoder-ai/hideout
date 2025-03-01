import { useState } from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import LeftBanner from '../LeftBanner/LeftBanner.jsx';
import Page from '../Page/Page.jsx';
import Home from '../Home/Home.jsx';
import Footer from '../Footer/Footer.jsx';

const DesktopSite = () => {
  const [page, setPage] = useState('home');
  const [language, setLanguage] = useState('english');
  return (
    <>
      <NavBar props={{ page, setPage, language, setLanguage }} />
      <LeftBanner />
      <Page />
      {/* <Home /> */}
      <Footer props={{ language, setLanguage }} />
    </>
  );
};

export default DesktopSite;
