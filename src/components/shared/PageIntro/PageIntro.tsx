import Image, { StaticImageData } from "next/image";
import styles from "./PageIntro.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionIntro from "../SectionIntro/SectionIntro";

interface PageIntroProps {
  sectionIntro: string;
  title: string;
  desc: string;
  src: StaticImageData;
  center?: string;
  width?: string;
}

export default function PageIntro({
  sectionIntro,
  title,
  desc,
  src,
  center = "",
  width = "",
}: PageIntroProps) {
  return (
    <section className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.imgOverlay} />
        <Image src={src} alt='Hero Image' fill className={styles.img} />
        <LayoutWrapper>
          <div className={`${styles.content} ${styles[center]}`}>
            <SectionIntro title={sectionIntro} />
            <h1 className={`${styles.heading} ${styles[width]}`}>{title}</h1>
            <p className={styles.copy}>{desc}</p>
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
}
