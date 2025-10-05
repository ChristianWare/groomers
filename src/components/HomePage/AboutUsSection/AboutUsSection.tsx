import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutUsSection.module.css";
import Image from "next/image";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Button from "@/components/shared/Button/Button";
import Img1 from '../../../../public/images/doggy.jpg'

export default function AboutUsSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='About Us'
                fill
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.right}>
            <SectionIntro title='About US' />
            <h2 className={styles.heading}>
              We&lsquo;re a dedicated group of caring individuals
            </h2>
            <p className={styles.copy}>
              Our team is made up of passionate pet lovers who are dedicated to
              providing the best care for your furry friends. With years of
              experience and a genuine love for animals, we ensure that every
              pet receives the attention and affection they deserve.
            </p>
            <div className={styles.btnContainer}>
              <Button btnType='white' text='More about us' href='/' arrow />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
