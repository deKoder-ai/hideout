import { useState } from 'react';
import styles from './NavBar.module.css';

const NavBar = ({ props }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleDropdownClick = () => {
    if (!openMenu) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };
  const handleHomeClick = () => {
    props.setPage('home');
    setOpenMenu(false);
  };
  const handleAboutClick = () => {
    props.setPage('about');
    setOpenMenu(false);
  };
  const handleMenuClick = () => {
    props.setPage('menu');
    setOpenMenu(false);
  };
  const handleFindUsClick = () => {
    props.setPage('findUs');
    setOpenMenu(false);
  };
  const handleEventsClick = () => {
    props.setPage('events');
    setOpenMenu(false);
  };
  const handleNewsClick = () => {
    props.setPage('news');
    setOpenMenu(false);
  };
  const handleContactClick = () => {
    props.setPage('contact');
    setOpenMenu(false);
  };
  const handleLanguageChange = () => {
    if (props.language === 'english') {
      props.setLanguage('thai');
      setOpenMenu(false);
    } else {
      props.setLanguage('english');
      setOpenMenu(false);
    }
  };
  return (
    <>
      <nav className={styles.desktopNav}>
        <button className={styles.home} onClick={handleHomeClick}>
          HIDEOUT
        </button>
        <div className={styles.spacer}></div>
        <button className={styles.navButton} onClick={handleAboutClick}>
          About
        </button>
        <button className={styles.navButton} onClick={handleMenuClick}>
          Menu
        </button>
        <button className={styles.navButton} onClick={handleFindUsClick}>
          Find Us
        </button>
        <button className={styles.burgerButton} onClick={handleDropdownClick}></button>
      </nav>
      {openMenu && <div className={styles.navMask} onClick={handleDropdownClick}></div>}
      {openMenu && (
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton} onClick={handleHomeClick}>
            Home
          </button>
          <button className={styles.dropdownButton} onClick={handleAboutClick}>
            About
          </button>
          <button className={styles.dropdownButton} onClick={handleMenuClick}>
            Menu
          </button>
          <button className={styles.dropdownButton} onClick={handleFindUsClick}>
            Find Us
          </button>
          <button className={styles.dropdownButton} onClick={handleEventsClick}>
            Events
          </button>
          <button className={styles.dropdownButton} onClick={handleNewsClick}>
            News
          </button>
          <button className={styles.dropdownButton} onClick={handleContactClick}>
            Contact
          </button>
          <button className={styles.dropdownButton} onClick={handleLanguageChange}>
            เปลี่ยนภาษา
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
