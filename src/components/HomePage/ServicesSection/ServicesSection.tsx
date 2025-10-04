import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.heading}>we offer a wide range of services</h2>
        </div>
      </LayoutWrapper>
    </section>
  );
}
