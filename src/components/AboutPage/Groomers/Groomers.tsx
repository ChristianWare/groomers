import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Groomers.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/jane.jpg";
import Img2 from "../../../../public/images/charlie.jpg";
import Img3 from "../../../../public/images/alice.jpg";
import Img4 from "../../../../public/images/person.jpg";
import Img5 from "../../../../public/images/Adam.jpg";
import Button from "@/components/shared/Button/Button";
import Instagram from "@/components/icons/Instagram/Instagram";
import Facebook from "@/components/icons/Facebook/Facebook";
import LinkedIn from "@/components/icons/LinkedIn/LinkedIn";

const data = [
  {
    id: 1,
    title: "Jane",
    price: "From $50",
    src: Img1,
  },
  {
    id: 2,
    title: "Charlie",
    price: "From $75",
    src: Img2,
  },
  {
    id: 3,
    title: "Kendall",
    price: "From $125",
    src: Img3,
  },
  {
    id: 4,
    title: "Mike",
    price: "From $125",
    src: Img4,
  },
  {
    id: 5,
    title: "James",
    price: "From $125",
    src: Img5,
  },
];

export default function Groomers() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.introInfo}>
            {/* <SectionIntro title='Popular Services' /> */}
            <h2 className={styles.heading}>Meet our groomers</h2>
          </div>
          <div className={styles.dataContainer}>
            {data.map((x) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.bottomCornerContainer}>
                  <div className={styles.bottomCorner}>
                    <div className={styles.btnContainerii}>
                      <Button
                        href='/'
                        btnType='green'
                        text='More details'
                        arrow
                      />
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
                    <h3 className={styles.title}>{x.title}</h3>

                    <div className={styles.socialsContainer}>
                      <Instagram className={styles.icon} />
                      <Facebook className={styles.icon} />
                      <LinkedIn className={styles.icon} />
                    </div>
                  </div>
                  <div className={styles.cbRight}>
                    <Button text='Book Now' btnType='white' href='/' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
