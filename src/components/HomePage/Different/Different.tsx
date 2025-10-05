import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Different.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Button from "@/components/shared/Button/Button";
import Image from "next/image";
import Img1 from "../../../../public/images/different.jpg";

export default function Different() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.leftTop}>
              <SectionIntro title="How we're different" />
              <h2 className={styles.title}>Late Summer Yoga Retreat</h2>
              <span className={styles.customerName}>Christina A.</span>
              <p className={styles.review}>
                Everything you need to know — how to prepare, what to bring, and
                what to expect from your first visit.
              </p>
              <div className={styles.btnContainer}>
                <Button btnType='white' text='View Details' href='/' />
              </div>
            </div>
            <div className={styles.leftBottom}>
              2 Boxes here with icons, titles and descriptions
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='Hero Image'
                fill
                className={styles.imgii}
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
