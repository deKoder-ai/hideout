import { useState, useEffect } from 'react';
import styles from './Menu.module.css';

function SetTitle() {
  useEffect(() => {
    document.title = 'HIDEOUT | Menu';
  }, []);
}
const Menu = () => {
  SetTitle();
  const [type, setType] = useState('mains');
  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
  let mainsClass, snacksClass, drinksClass;
  const handleMainsClick = () => {
    setType('mains');
    mainsClass = styles.tabSelected;
    snacksClass = styles.menuSelector;
    drinksClass = styles.menuSelector;
  };
  const handleSnacksClick = () => {
    setType('snacks');
    mainsClass = styles.menuSelector;
    snacksClass = styles.tabSelected;
    drinksClass = styles.menuSelector;
  };
  const handleDrinksClick = () => {
    setType('drinks');
    mainsClass = styles.menuSelector;
    snacksClass = styles.menuSelector;
    drinksClass = styles.tabSelected;
  };

  if (type === 'mains') {
  }
  return (
    <div className={styles.page}>
      <div className={styles.menuSelectors}>
        <button
          className={`${styles.mains} ${
            type === 'mains' ? styles.tabSelected : styles.menuSelector
          }`}
          onClick={handleMainsClick}
        >
          Mains
        </button>
        <button
          className={`${styles.snacks} ${
            type === 'snacks' ? styles.tabSelected : styles.menuSelector
          }`}
          onClick={handleSnacksClick}
        >
          Snacks
        </button>
        <button
          className={`${styles.drinks} ${
            type === 'drinks' ? styles.tabSelected : styles.menuSelector
          }`}
          onClick={handleDrinksClick}
        >
          Drinks
        </button>
      </div>
      {type === 'mains' && (
        <div className={styles.menu}>
          <h2 className={styles.menuH2}>Thai</h2>
          <div className={styles.menuItem}>
            <strong>PAD THAI</strong> A stir-fried noodle dish that includes rice noodles,
            eggs, tofu, and your choice of shrimp, chicken, or pork, seasoned with
            tamarind juice, fish sauce, and palm sugar
            <p className={styles.price}>฿125</p>
          </div>

          <div className={styles.menuItem}>
            <strong>TOM YUM GUNG</strong> A spicy and sour shrimp soup flavored with
            lemongrass, kaffir lime leaves, shallots, lime juice, fish sauce, and fresh
            chilies
            <p className={styles.price}>฿347</p>
          </div>
          <div className={styles.menuItem}>
            <strong>GREEN CURRY</strong> A creamy curry made with coconut milk, green
            curry paste, and a variety of vegetables and proteins like chicken, beef, or
            tofu
            <p className={styles.price}>฿215</p>
          </div>
          <div className={styles.menuItem}>
            <strong>SOM TAM</strong> A salad made from shredded unripe papaya, tomatoes,
            carrots, long beans, peanuts, garlic, chilies, palm sugar, lime juice, and
            fish sauce
            <p className={styles.price}>฿400</p>
          </div>
          <div className={styles.menuItem}>
            <strong>KHAO SOI</strong> Boiled egg noodles, a rich coconut curry base, and
            is garnished with crispy egg noodles, pickled mustard greens, and lime
            <p className={styles.price}>฿75</p>
          </div>
          <div className={styles.menuItem}>
            <strong>LAAB</strong> A meat salad seasoned with fresh herbs, with pork,
            chicken, or duck. Served with sticky rice
            <p className={styles.price}>฿109</p>
          </div>
          <div className={styles.menuItem}>
            <strong>TOM KHA GAI</strong> A creamy coconut milk soup with chicken,
            mushrooms, and galangal, seasoned with lemongrass, kaffir lime leaves, and
            fish sauce
            <p className={styles.price}>฿222</p>
          </div>
          <div className={styles.menuItem}>
            <strong>PAD SEE EW</strong> A stir-fried dish made with wide rice noodles, soy
            sauce, meat, egg, tofu, and Chinese broccoli
            <p className={styles.price}>฿679</p>
          </div>
          <div className={styles.menuItem}>
            <strong>NO NAME CHICKEN</strong> Exactly what it sounds like
            <p className={styles.price}>฿555</p>
          </div>
          <div className={styles.line}></div>
        </div>
      )}
      {type === 'snacks' && <div className={styles.menu}></div>}
      {type === 'drinks' && (
        <div className={styles.menu}>
          <h2 className={styles.menuH2}>Cocktails</h2>
          <div className={styles.menuItem}>
            <strong>CLASSIC</strong> Cimarron Blanco, Combier, Lime
            <p className={styles.price}>฿19</p>
          </div>
          <div className={styles.menuItem}>
            <strong>MEZCAL</strong> Manojo Espadin, Giffard's Triple Sec, Combier, Lime
            <p className={styles.price}>฿125</p>
          </div>
          <div className={styles.menuItem}>
            <strong>PALOMA</strong> Cimarron Reposada, Grapefruit Cordial, Soda, Lime
            <p className={styles.price}>฿25</p>
          </div>
          <div className={styles.menuItem}>
            <strong>DESERT BLOOM</strong> Por Siempre Sotol, Dolin Blanc, Prickly Pear,
            <p className={styles.price}>฿325</p>
            Lime
          </div>
          <div className={styles.menuItem}>
            <strong>CADILLAC</strong> Don Fulano Reposado, Pierr Ferrand Dry Curacao,
            Grand Marnier, Lime
            <p className={styles.price}>฿125</p>
          </div>
          <div className={styles.menuItem}>
            <strong>IMAGINARY FRIEND</strong> Agua Del Sol Espadin, Carpano Bianco, Dolin
            Blanc, Saler's Gentiane
            <p className={styles.price}>฿25</p>
          </div>
          <div className={styles.line}></div>
          <h2 className={styles.menuH2}>Beer</h2>
          <div className={styles.menuItem}>
            <strong>Leo</strong> Large / Small
            <p className={styles.price}>฿125 / ฿85</p>
          </div>
          <div className={styles.menuItem}>
            <strong>Estrella</strong> Large / Small
            <p className={styles.price}>฿125 / ฿85</p>
          </div>
          <div className={styles.menuItem}>
            <strong>Tiger</strong> Large / Small
            <p className={styles.price}>฿125 / ฿85</p>
          </div>
          <div className={styles.line}></div>
        </div>
      )}
      <div className='flexCenter'>
        <button className={styles.top} onClick={scrollToTop}>
          Top
        </button>
      </div>
    </div>
  );
};

export default Menu;
