import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutPageInro.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/doggyiii.jpg";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Button from "@/components/shared/Button/Button";
import PostAboutHero from "../PostAboutHero/PostAboutHero";

export default function AboutPageIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionIntro title='About us' />
            <h1 className={styles.heading}>
              Your fluffy <br />
              friend is in our safe and caring hands
            </h1>
            <p className={styles.copy}>
              GGC was built around a simple idea: beautiful grooms happen when
              dogs feel safe. Our team uses fear-free handling, quiet dryers,
              and calm routines so every visit builds confidence. Add
              transparent pricing and easy online scheduling, and you’ve got a
              grooming day everyone can look forward to.
            </p>
            <div className={styles.btnContainer}>
              <Button href='/' text='Meet the Stylists' btnType='tan' arrow />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='About Page Image'
                fill
                className={styles.img}
              />
            </div>
          </div>
        </div>
        <PostAboutHero />
      </LayoutWrapper>
    </section>
  );
}
