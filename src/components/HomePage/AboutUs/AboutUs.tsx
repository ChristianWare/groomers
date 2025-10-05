import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutUs.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Image from "next/image";
import Img1 from "../../../../public/images/about.jpg";
import Adam from "../../../../public/images/Adam.jpg";
import Button from "@/components/shared/Button/Button";

export default function AboutUs() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionIntro title='About Us' />
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
            <div className={styles.leftBottom}>
              <div className={styles.lbLeft}>
                <div className={styles.imgContainerii}>
                  {/* <Accent className={styles.accent} /> */}
                  <Image
                    src={Adam}
                    fill
                    title='Chris Rawlings, Owner'
                    alt='Chris Rawlings, Owner'
                    className={styles.imgii}
                  />
                </div>
              </div>
              <div className={styles.lbRight}>
                <p className={styles.lbRightCopy}>
                  Our team brings a wealth of knowledge and expertise to every
                  grooming session, ensuring that your pet is in the best hands
                  possible. Each member of our staff is committed to creating a
                  safe, comfortable, and enjoyable environment for every pet.
                </p>
                <span className={styles.bold}>Chris Rawlings</span>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Img1} fill title='' alt='' className={styles.img} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
