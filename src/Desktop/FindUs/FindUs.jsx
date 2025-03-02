import { useEffect } from 'react';
import Map from './Map.jsx';
import styles from './FindUs.module.css';

const gMapsUrl = 'https://maps.app.goo.gl/wyWQhVBCnvDWovod8';
const handleDirectionsClick = () => {
  window.open(gMapsUrl, '_blank').focus();
};
function SetTitle() {
  useEffect(() => {
    document.title = 'HIDEOUT | Find Us';
  }, []);
}
const FindUs = () => {
  SetTitle();
  return (
    <>
      <h2 className={styles.heading}>HIDEOUT ARI - BAR & RESTAURANT</h2>
      <div className='flexCenter'>
        <Map />
      </div>
      <div className='flexCenter'>
        <button className={styles.getDirections} onClick={handleDirectionsClick}>
          GET DIRECTIONS
        </button>
      </div>
      <div className={styles.container}>
        <p className={styles.textCenter}>
          5th Floor{' '}
          <a
            href='https://www.facebook.com/thehubphaholari'
            target='_blank'
            rel='noopener noreferrer'
          >
            <strong>@The Hub</strong>
          </a>
        </p>
        <p className={styles.textCenter}>466/1-39 Phahon Yothin Road</p>
        <p className={styles.textCenter}>Ari, Phaya Thai</p>
        <p className={styles.textCenter}>BKK, 10400</p>
        <br />
        <br />
        <p className={styles.textCenter}>Phone: (+66) 085 085 1568</p>
        <p className={styles.textCenter}>
          Email:{' '}
          <a href='mailto:hideout.ari@gmail.com'>
            <strong>hideout.ari@gmail.com</strong>
          </a>
        </p>
        <p className={styles.textCenter}>
          Facebook:{' '}
          <a
            href='https://www.facebook.com/people/Hideout-ARI/61553971927398/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <strong>Hideout Ari</strong>
          </a>
        </p>
      </div>
      <div className={styles.spacer}></div>
    </>
  );
};

export default FindUs;
