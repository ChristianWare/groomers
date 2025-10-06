import Image from "next/image";
import styles from "./ReviewPreview.module.css";
import Img1 from "../../../../public/images/cat.jpg";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Button from "@/components/shared/Button/Button";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

export default function ReviewPreview() {
  return (
    <section className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.imgOverlay} />
        <Image src={Img1} alt='Hero Image' fill className={styles.img} />
        <div className={styles.content}>
          <LayoutWrapper>
            <div className={styles.left}>
              <SectionIntro title='Reviews' />
              <h2 className={styles.heading}>
                Real Stories <br /> from Happy Pet Owners
              </h2>
              <p className={styles.copy}>
                Discover what makes Great Groomers of California the trusted
                choice for pet care.
              </p>
              <div className={styles.btnContainer}>
                <Button btnType='tanOutline' text='Book Now' href='/' />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.RightA}>
                <SectionIntro title='Grooming Service' />
                <h3 className={styles.title}>Late Summer Yoga Retreat</h3>
                <span className={styles.customerName}>Christina A.</span>
                <p className={styles.review}>
                  I’ve never seen my dog look so good! The grooming team at GGC
                  took such great care of Tiranoia. She came home looking and
                  feeling amazing. I can’t recommend PawHaven enough for pet
                  care services
                </p>
                <div className={styles.btnContainer}>
                  <Button btnType='white' text='View Details' href='/' />
                </div>
              </div>
              <div className={styles.RightB}>
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
        </div>
      </div>
    </section>
  );
}
