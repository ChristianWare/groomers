import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Hero.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/hero.jpg";
import Button from "@/components/shared/Button/Button";

export default function Hero() {
  return (
    <section className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.imgOverlay} />
        <Image src={Img1} alt='Hero Image' fill className={styles.img} />
        <LayoutWrapper>
          <div className={styles.content}>
            <h1 className={styles.heading}>
              <span className={styles.span}>the</span> great <br />
              groomers <span className={styles.spanii}>of </span>
              {" "}
               California
            </h1>
            <p className={styles.copy}>
              Comb & Collar was built around a simple idea: beautiful grooms
              happen when dogs feel safe. Our team uses fear-free handling,
              quiet dryers, and calm routines so every visit builds confidence.
              Add transparent pricing and easy online scheduling, and you’ve got
              a grooming day everyone can look forward to.
            </p>
            <div className={styles.btnContainer}>
              <Button btnType='tanOutline' text='Book Now' href='/' arrow />
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
}
