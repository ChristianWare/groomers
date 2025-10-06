import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Different.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Button from "@/components/shared/Button/Button";
import Image from "next/image";
import Img1 from "../../../../public/images/different.jpg";
import { title } from "process";

const data = [
  {
    id: 1,
    title: "Experienced Groomers",
    description:
      "Our groomers are highly skilled and experienced in handling all breeds and sizes of dogs.",
  },
  {
    id: 2,
    title: "State-of-the-Art Equipment",
    description:
      "We use the latest grooming tools and techniques to ensure the best results for your pet.",
  },
];

export default function Different() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.leftTop}>
              <SectionIntro title='First time with us?' />
              <h2 className={styles.title}>Start your journey gently.</h2>
              <p className={styles.copy}>
                Everything you need to know — how to prepare, what to bring, and
                what to expect from your first visit.
              </p>
              <div className={styles.btnContainer}>
                <Button btnType='white' text='View Details' href='/' />
              </div>
            </div>
            <div className={styles.leftBottom}>
              {data.map((item) => (
                <div key={item.id} className={styles.card}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.desc}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Img1} alt='Hero Image' fill className={styles.img} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
