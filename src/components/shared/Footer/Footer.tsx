import styles from "./Footer.module.css";
import Button from "../Button/Button";
import Instagram from "@/components/icons/Instagram/Instagram";
import Facebook from "@/components/icons/Facebook/Facebook";
import LinkedIn from "@/components/icons/LinkedIn/LinkedIn";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <footer className={styles.footerContainer}>
          <div className={styles.footerLeft}>
            <h2 className={styles.heading}>
              Pamper Your Pooch at <br /> The Great Groomers of California
            </h2>
            <p className={styles.copy}>
              Providing premium dog grooming services with love and expertise
              since 2015. We&#39;re dedicated to making your furry friend look
              and feel their best.
            </p>
            <div className={styles.btnContainer}>
              <Button
                btnType='green'
                href='/'
                text='Book a consultation'
                arrow
              />
            </div>
            <div className={styles.workingHoursBox}>
              <span className={styles.workingHoursTitle}>Working Hours</span>
              <ul className={styles.workingHoursList}>
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
              <div className={styles.btnContainer2}>
                <Button btnType='tan' href='' text='Get directions' arrow />
              </div>
              <div className={styles.socialsContainer}>
                <Instagram className={styles.icon} />
                <Facebook className={styles.icon} />
                <LinkedIn className={styles.icon} />
              </div>
            </div>
          </div>
        </footer>
      </div>
      <br className={styles.br} />
    </>
  );
}
