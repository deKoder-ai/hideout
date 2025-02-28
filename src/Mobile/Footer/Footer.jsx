import uk from "../../assets/img/uk-flag.svg";
import thai from "../../assets/img/thai-flag.svg";
import styles from "./Footer.module.css";

const fbUrl = "https://www.facebook.com/people/Hideout-ARI/61553971927398/";
const handleFbClick = () => {
  window.open(fbUrl, "_blank").focus();
};
const Footer = ({ props }) => {
  const handleLanguageClick = () => {
    if (props.language === "thai") {
      props.setLanguage("english");
    } else {
      props.setLanguage("thai");
    }
  };
  return (
    <>
      <footer className={styles.footer}>
        {props.language === "thai" && (
          <img
            src={uk}
            alt="language selector"
            className={styles.flag}
            onClick={handleLanguageClick}
          />
        )}
        {props.language === "english" && (
          <img
            src={thai}
            alt="language selector"
            className={styles.flag}
            onClick={handleLanguageClick}
          />
        )}

        <button className={styles.fbButton} onClick={handleFbClick}></button>
      </footer>
    </>
  );
};

export default Footer;
