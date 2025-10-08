import styles from "./PostAboutHero.module.css";
import Check from "@/components/icons/Check/Check";

const data = [
  {
    id: 1,
    title: "Expert Team of professionals",
    desc: "We are a passionate team of pet lovers who believe in treating animals like our own.",
    icon: <Check className={styles.icon} />,
  },
  {
    id: 2,
    title: "Comprehensive Pet Services",
    desc: "We are a passionate team of pet lovers who believe in treating animals like our own.",
    icon: <Check className={styles.icon} />,
  },
  {
    id: 3,
    title: "Safe and Clean Environment",
    desc: "We are a passionate team of pet lovers who believe in treating animals like our own.",
    icon: <Check className={styles.icon} />,
  },
  {
    id: 4,
    title: "Personalized Attention to Your Pet",
    desc: "We are a passionate team of pet lovers who believe in treating animals like our own.",
    icon: <Check className={styles.icon} />,
  },
];

export default function PostAboutHero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mapDataContainer}>
          {data.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.iconBox}>{item.icon}</div>
              <h3 className={styles.mapDataTitle}>{item.title}</h3>
              <p className={styles.mapDataDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
