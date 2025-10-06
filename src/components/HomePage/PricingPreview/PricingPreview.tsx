import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./PricingPreview.module.css";
import Button from "@/components/shared/Button/Button";
import Image from "next/image";
import Img1 from "../../../../public/images/cut.jpg";
import Img2 from "../../../../public/images/doggy.jpg";
import Img3 from "../../../../public/images/flea.jpg";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

const data = [
  {
    id: 1,
    title: "Basic Grooming",
    price: "From $50",
    description: "Basic grooming services for your pet's essential care.",
    src: Img1,
  },
  {
    id: 2,
    title: "Full Grooming",
    price: "From $75",
    description: "Comprehensive grooming for a complete makeover.",
    src: Img2,
  },
  {
    id: 3,
    title: "Spa Add-Ons",
    price: "From $125",
    description: "Pamper your pet with our luxurious spa add-ons.",
    src: Img3,
  },
];

export default function PricingPreview() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.introInfo}>
            <SectionIntro title='Pricing' />
            <h2 className={styles.heading}>
              Affordable Care <br /> for Your Beloved Pets
            </h2>
            <p className={styles.copy}>
              Our affordable pricing ensures your furry friends receive the
              love, attention, and professional care they deserve—without
              breaking the bank.
            </p>
          </div>
          <div className={styles.dataContainer}>
            {data.map((x) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.bottomCornerContainer}>
                  <div className={styles.bottomCorner}>
                    <div className={styles.btnContainerii}>
                      <Button href='/' btnType='green' text={x.title} arrow />
                    </div>
                  </div>
                </div>
                <div className={styles.cardTop}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={x.src}
                      alt='Hero Image'
                      fill
                      className={styles.img}
                    />
                  </div>
                </div>
                <div className={styles.cardBottom}>
                  <div className={styles.cbLeft}>
                    <h3 className={styles.title}>{x.price}</h3>
                    <p className={styles.desc}>{x.description}</p>
                  </div>
                  <div className={styles.cbRight}>
                    <Button text='More details' btnType='white' href='/' />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.btnContainer}>
            <Button btnType='brown' text='See all Services' href='/' arrow />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
