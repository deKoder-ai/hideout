import { useState, useEffect } from "react";
import styles from "./Menu.module.css";

function SetTitle() {
  useEffect(() => {
    document.title = "HIDEOUT | Menu";
  }, []);
}
const Menu = () => {
  SetTitle();
  const [type, setType] = useState("mains");
  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  const handleMainsClick = () => {
    setType("mains");
  };
  const handleSnacksClick = () => {
    setType("snacks");
  };
  const handleDrinksClick = () => {
    setType("drinks");
  };
  return (
    <div className={styles.page}>
      <div className={styles.menuSelectors}>
        <button
          className={`${styles.menuSelector} ${styles.mains}`}
          onClick={handleMainsClick}
        >
          Mains
        </button>
        <button
          className={`${styles.menuSelector} ${styles.snacks}`}
          onClick={handleSnacksClick}
        >
          Snacks
        </button>
        <button
          className={`${styles.menuSelector} ${styles.drinks}`}
          onClick={handleDrinksClick}
        >
          Drinks
        </button>
      </div>
      {type === "mains" && (
        <div className={styles.menu}>
          <h2 className={styles.menuH2}>Thai</h2>
          <p className={styles.menuPara}>
            <strong>PAD THAI</strong> A stir-fried noodle dish that includes
            rice noodles, eggs, tofu, and your choice of shrimp, chicken, or
            pork, seasoned with tamarind juice, fish sauce, and palm sugar
          </p>
          <p className={styles.menuPara}>
            <strong>TOM YUM GUNG</strong> A spicy and sour shrimp soup flavored
            with lemongrass, kaffir lime leaves, shallots, lime juice, fish
            sauce, and fresh chilies
          </p>
          <p className={styles.menuPara}>
            <strong>GREEN CURRY</strong> A creamy curry made with coconut milk,
            green curry paste, and a variety of vegetables and proteins like
            chicken, beef, or tofu
          </p>
          <p className={styles.menuPara}>
            <strong>SOM TAM</strong> A salad made from shredded unripe papaya,
            tomatoes, carrots, long beans, peanuts, garlic, chilies, palm sugar,
            lime juice, and fish sauce
          </p>
          <p className={styles.menuPara}>
            <strong>KHAO SOI</strong> Boiled egg noodles, a rich coconut curry
            base, and is garnished with crispy egg noodles, pickled mustard
            greens, and lime
          </p>
          <p className={styles.menuPara}>
            <strong>LAAB</strong> A meat salad seasoned with fresh herbs, with
            pork, chicken, or duck. Served with sticky rice
          </p>
          <p className={styles.menuPara}>
            <strong>TOM KHA GAI</strong> A creamy coconut milk soup with
            chicken, mushrooms, and galangal, seasoned with lemongrass, kaffir
            lime leaves, and fish sauce
          </p>
          <p className={styles.menuPara}>
            <strong>PAD SEE EW</strong> A stir-fried dish made with wide rice
            noodles, soy sauce, meat, egg, tofu, and Chinese broccoli
          </p>
          <p className={styles.menuPara}>
            <strong>NO NAME CHICKEN</strong> Exactly what it sounds like
          </p>
        </div>
      )}
      {type === "snacks" && <div className={styles.menu}></div>}
      {type === "drinks" && (
        <div className={styles.menu}>
          <h2 className={styles.menuH2}>Cocktails</h2>
          <p className={styles.menuPara}>
            <strong>CLASSIC</strong> Cimarron Blanco, Combier, Lime
          </p>
          <p className={styles.menuPara}>
            <strong>MEZCAL</strong> Manojo Espadin, Giffard's Triple Sec,
            Combier, Lime
          </p>
          <p className={styles.menuPara}>
            <strong>PALOMA</strong> Cimarron Reposada, Grapefruit Cordial, Soda,
            Lime
          </p>
          <p className={styles.menuPara}>
            <strong>DESERT BLOOM</strong> Por Siempre Sotol, Dolin Blanc,
            Prickly Pear, Lime
          </p>
          <p className={styles.menuPara}>
            <strong>CADILLAC</strong> Don Fulano Reposado, Pierr Ferrand Dry
            Curacao, Grand Marnier, Lime
          </p>
          <p className={styles.menuPara}>
            <strong>IMAGINARY FRIEND</strong> Agua Del Sol Espadin, Carpano
            Bianco, Dolin Blanc, Saler's Gentiane
          </p>
          <h2 className={styles.menuH2}>Beer</h2>
          <p className={styles.menuPara}>
            <strong>Leo</strong> Large / Small
          </p>
          <p className={styles.menuPara}>
            <strong>Estrella</strong> Large / Small
          </p>
          <p className={styles.menuPara}>
            <strong>Tiger</strong> Large / Small
          </p>
        </div>
      )}
      <div className={styles.flex}>
        <button className={styles.top} onClick={scrollToTop}>
          Top
        </button>
      </div>
    </div>
  );
};

export default Menu;
