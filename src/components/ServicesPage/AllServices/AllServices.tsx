// import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Image from "next/image";
import styles from "./AllServices.module.css";
import { services } from "@/lib/data";
import Star from "@/components/icons/Star/Star";
import Button from "@/components/shared/Button/Button";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

export default function AllServices() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.dataContainer}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.cardLeft}>
                <span className={styles.id}>{service.id}</span>
                <h3 className={styles.title}>
                  {service.title}: {service.price}
                </h3>
                <p className={styles.desc}>{service.description}</p>
                <div className={styles.imgContainerii}>
                  <Image
                    src={service.src}
                    fill
                    alt={service.title}
                    className={styles.img}
                  />
                </div>
                <SectionIntro title='Includes:' />
                
                <ul className={styles.featuresMapContainer}>
                  {service.features.map((feature) => (
                    <li key={feature.id} className={styles.feature}>
                      <Star className={styles.icon} /> {feature.title}
                    </li>
                  ))}
                </ul>
                <div className={styles.btnContainer}>
                  <Button href='/' text='Book now' btnType='brown' />
                </div>
              </div>
              <div className={styles.cardRight}>
                <div className={styles.imgContainer}>
                  <Image
                    src={service.src}
                    fill
                    alt={service.title}
                    className={styles.img}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
