import { useEffect } from 'react';
import Map from './Map.jsx';
import styles from './FindUsThai.module.css';

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
          รับทิศทาง
        </button>
      </div>
      <div>
        <p className={styles.textCenter}>
          ชั้น 5{' '}
          <a href='https://www.facebook.com/thehubphaholari'>
            <strong>@เดอะฮับ</strong>
          </a>
        </p>
        <p className={styles.textCenter}>466/1-39 ถนนพหลโยธิน</p>
        <p className={styles.textCenter}>อารีย์ เขตพญาไท</p>
        <p className={styles.textCenter}>กทม 10400</p>
        <br />
        <br />
        <p className={styles.textCenter}>โทร. (+66) 085 085 1568</p>
        <p className={styles.textCenter}>
          อีเมล:{' '}
          <a href='mailto:hideout.ari@gmail.com'>
            <strong>hideout.ari@gmail.com</strong>
          </a>
        </p>
        <p className={styles.textCenter}>
          เฟสบุ๊ค:{' '}
          <a href='https://www.facebook.com/people/Hideout-ARI/61553971927398/'>
            <strong>Hideout Ari</strong>
          </a>
        </p>
      </div>
      <div className={styles.spacer}></div>
    </>
  );
};

export default FindUs;
