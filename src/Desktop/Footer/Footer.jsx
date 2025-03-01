import styles from './Footer.module.css';

const fbUrl = 'https://www.facebook.com/people/Hideout-ARI/61553971927398/';
const handleFbClick = () => {
  window.open(fbUrl, '_blank').focus();
};
let thaiClass, ukClass;
const Footer = ({ props }) => {
  if (props.language === 'english') {
    thaiClass = `${styles.thaiBtn}`;
    ukClass = `${styles.ukBtn}  ${styles.ukSelected}`;
  } else {
    thaiClass = `${styles.thaiBtn} ${styles.thaiSelected}`;
    ukClass = styles.ukBtn;
  }

  const handleLanguageSwitch = () => {
    if (props.language === 'english') {
      props.setLanguage('thai');
      thaiClass = `${styles.thaiBtn} ${styles.thaiSelected}`;
      ukClass = styles.ukBtn;
    } else {
      props.setLanguage('english');
      thaiClass = styles.thaiBtn;
      ukClass = `${styles.ukBtn} ${styles.ukSelected}`;
    }
  };
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.left}>
          <span className={styles.copyright}>©</span> HIDEOUT 2024
        </div>
        <div className={styles.langRadio}>
          <div className={styles.langRadioIn}>
            <button className={ukClass} onClick={handleLanguageSwitch}></button>
            <button className={thaiClass} onClick={handleLanguageSwitch}></button>
          </div>
        </div>
        <button className={styles.fbButton} onClick={handleFbClick}></button>
      </footer>
    </>
  );
};

export default Footer;
