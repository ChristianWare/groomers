import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ServicesSection.module.css";
import Dog from "../../icons/Dog/Dog";
import Rabbit from "@/components/icons/Rabbit/Rabbit";
import Cat from "@/components/icons/Cat/Cat";

const data = [
  {
    id: 1,
    title: "Dog Grooming",
    icon: <Dog className={styles.icon} />,
  },
  {
    id: 2,
    title: "Rabbit Care",
    icon: <Rabbit className={styles.icon} />,
  },
  {
    id: 3,
    title: "Cat and Kitten Care",
    icon: <Cat className={styles.icon} />,
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              We are a passionate team of pet lovers who believe in treating
              every animal like our own. From health services to grooming, and
              adoption, we’re here to support your pet’s journey every step of
              the way.
            </h2>
          </div>
          <div className={styles.middle} />
          <div className={styles.bottom}>
            {data.map((x) => (
              <div key={x.id} className={styles.card}>
                {x.icon}
                <div className={styles.title}>{x.title}</div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
