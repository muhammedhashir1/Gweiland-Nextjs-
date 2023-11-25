import Image from "next/image";

import styles from "./Slideshow.module.css";

const Slideshow = () => {
  return (
    <div className={styles.slideshow_container}>
      <div className={styles.slideshow_sec}>
        <div className={styles.slideshow}>
          <div className={`${styles.imageSlideSection} ${styles.imageSlideSectionOne}`}>
            <div className={styles.imageSection}>
              <Image src="/assets/logo1.svg" alt="logo1" width={100} height={100} className={styles.imageStyle} />
            </div>
            <div className={styles.titleSection}>
              <div>Foxxy Drivanda</div>
              <a href="">shop now</a>
            </div>
          </div>
          <div className={`${styles.imageSlideSection} ${styles.imageSlideSectionTwo}`}>
            <div className={styles.imageSection}>
              <Image src="/assets/logo2.svg" alt="logo2" width={100} height={100} className={styles.imageStyle} />
            </div>
            <div className={styles.titleSection}>
              <div>Crypto Raggles</div>
              <a href="">shop now</a>
            </div>
          </div>
          <div className={styles.imageSlideSection}>
            <div className={styles.imageSection}>
              <Image src="/assets/logo3.svg" alt="logo3" width={100} height={100} className={styles.imageStyle} />
            </div>
            <div className={styles.titleSection}>
              <div>Vudu Brigada</div>
              <a href="">shop now</a>
            </div>
          </div>
          <div className={styles.imageSlideSection}>
            <div className={styles.imageSection}>
              <Image src="/assets/logo4.svg" alt="logo4" width={100} height={100} className={styles.imageStyle} />
            </div>
            <div className={styles.titleSection}>
              <div>Future Fest</div>
              <a href="">shop now</a>
            </div>
          </div>
          <div className={`${styles.imageSlideSection} ${styles.imageSlideSectionFive}`}>
            <div className={styles.imageSection}>
              <Image src="/assets/logo5.svg" alt="logo5" width={100} height={100} className={styles.imageStyle} />
            </div>
            <div className={styles.titleSection}>
              <div>Bitfins</div>
              <a href="">shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
