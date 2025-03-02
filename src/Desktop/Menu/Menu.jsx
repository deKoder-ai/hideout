import { useState, useEffect } from 'react';
import { thai, snacks, cocktails, beer } from '../../Data/menu.js';
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
  return (
    <>
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
      <div className={styles.menu}>
        {type === 'mains' && (
          <div>
            <h2 className={styles.category}>Thai Dishes</h2>
            {thai.map((item) => (
              <div key={item.id} className={styles.menuItem}>
                <p className={styles.name}>
                  {item.name}{' '}
                  <span className={styles.description}>- {item.description}</span>
                </p>
                <p className={styles.price}>{item.price}</p>
              </div>
            ))}
          </div>
        )}

        {type === 'snacks' && (
          <div>
            <h2 className={styles.category}>Bar Snacks</h2>
            {snacks.map((item) => (
              <div key={item.id} className={styles.menuItem}>
                <p className={styles.name}>
                  {item.name}{' '}
                  <span className={styles.description}>- {item.description}</span>
                </p>
                <p className={styles.price}>{item.price}</p>
              </div>
            ))}
          </div>
        )}

        {type === 'drinks' && (
          <div>
            <h2 className={styles.category}>Cocktails</h2>
            {cocktails.map((item) => (
              <div key={item.id} className={styles.menuItem}>
                <p className={styles.name}>
                  {item.name}{' '}
                  <span className={styles.description}>- {item.description}</span>
                </p>
                <p className={styles.price}>{item.price}</p>
              </div>
            ))}
            <h2 className={styles.category}>Beer</h2>
            {beer.map((item) => (
              <div key={item.id} className={styles.menuItem}>
                <p className={styles.name}>
                  {item.name}{' '}
                  <span className={styles.description}>- {item.description}</span>
                </p>
                <p className={styles.price}>{item.price}</p>
              </div>
            ))}
          </div>
        )}

        <div className={styles.spacer}>
          <button className={styles.top} onClick={scrollToTop}>
            TOP
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
