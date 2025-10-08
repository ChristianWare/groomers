import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutUsDetails.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/groomer.jpg";

export default function AboutUsDetails() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Our Passion is Caring for <br /> Your Pets Like Family
            </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image
                  src={Img1}
                  alt='About Page Image'
                  fill
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.subHeading}>
                At GGC, we believe every pet deserves love, care, and attention.
                Our dedicated team is passionate about providing personalized
                care that makes your furry friends feel right at home. From
                grooming and health checkups to specialized services, we treat
                every pet as if they were our own, ensuring they are happy,
                healthy, and well cared for.
              </div>
              <p className={styles.copy}>
                <b>Personalized Care:</b> <br />
                We tailor our services to meet the unique needs of every pet,
                ensuring they receive the best care possible.
                <br />
                <br />
                <b>Experienced Team:</b>
                <br />
                Our team of skilled professionals is passionate about pets,
                providing expert care and attention to keep them healthy and
                happy.
              </p>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
