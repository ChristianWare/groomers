import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Hero.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/hero.jpg";
import Button from "@/components/shared/Button/Button";
// import Nav from "@/components/shared/Nav/Nav";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

export default function Hero() {
  return (
    <section className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.imgOverlay} />
        {/* <Nav /> */}
        <Image src={Img1} alt='Hero Image' fill className={styles.img} />
        <LayoutWrapper>
          <div className={styles.content}>
            <SectionIntro title='Dog Groomers' />
            <h1 className={styles.heading}>
              {/* <span className={styles.span}>the</span> great <br />
              groomers <span className={styles.span}>of </span> <br />California */}
              The great <br /> groomers of
              <br /> California
            </h1>
            <p className={styles.copy}>
              Fear-free spa appointments with real-time booking and upfront
              pricing. Reserve with a 30% deposit—no phone tag, no surprises.
            </p>
            <div className={styles.btnContainer}>
              <Button btnType='tanOutline' text='Book Now' href='/' arrow />
              <Button btnType='tan' text='See Services' href='/' arrow />
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
}
