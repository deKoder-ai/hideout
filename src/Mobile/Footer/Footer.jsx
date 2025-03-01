import styles from './Footer.module.css';

const fbUrl = 'https://www.facebook.com/people/Hideout-ARI/61553971927398/';
const handleFbClick = () => {
  window.open(fbUrl, '_blank').focus();
};
let flag;

const Footer = ({ props }) => {
  if (props.language === 'thai') {
    flag = styles.uk;
  } else {
    flag = styles.thai;
  }
  const handleLanguageClick = () => {
    if (props.language === 'thai') {
      props.setLanguage('english');
      flag = styles.thai;
    } else {
      props.setLanguage('thai');
      flag = styles.uk;
    }
  };
  return (
    <>
      <footer className={styles.footer}>
        <div className='flexCenter'>
          <p className={styles.logo}>HIDEOUT</p>
        </div>
        <button
          className={`${styles.langButton} ${flag}`}
          onClick={handleLanguageClick}
        ></button>
        <button className={styles.fbButton} onClick={handleFbClick}></button>
      </footer>
    </>
  );
};

export default Footer;
