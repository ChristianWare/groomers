import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./FeaturedServices.module.css";
import Img1 from "../../../../public/images/cut.jpg";
import Img2 from "../../../../public/images/doggy.jpg";
import Img3 from "../../../../public/images/flea.jpg";
import Image from "next/image";
import Button from "@/components/shared/Button/Button";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

const data = [
  {
    id: 1,
    title: "Bath  Blowout",
    description: "A gentle bath and blowout to keep your pet clean and fluffy.",
    price: "From $50",
    src: Img1,
  },
  {
    id: 2,
    title: "Full Grooming",
    description:
      "A full grooming session including bath, haircut, nail trim, and ear cleaning.",
    price: "From $75",
    src: Img2,
  },
  {
    id: 3,
    title: "Spa Add-Ons",
    description:
      "Add a little extra to your pet's grooming with our spa add-ons.",
    price: "From $125",
    src: Img3,
  },
];

export default function FeaturedServices() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <SectionIntro title='Popular Services' />
              <h2 className={styles.heading}>
                Featured services <br /> for your fur baby
              </h2>
            </div>
            <div className={styles.topRight}>
              <p className={styles.copy}>
                From baths and haircuts to nail trims and ear cleaning, our
                experienced groomers will pamper your pet with care and
                attention.
              </p>
              <div className={styles.btnContainer}>
                <Button btnType='white' text='See all services' href='/' />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            {data.map((x) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.bottomCornerContainer}>
                  <div className={styles.bottomCorner}>
                    {/* <div className={styles.metaTop}> */}
                      <h3 className={styles.title}>{x.title}</h3>
                    {/* </div> */}
                  </div>
                </div>
                <div className={styles.imgContainer}>
                  <div className={styles.imgOverlay} />
                  {/* <div className={styles.metaTop}>
                    <h3 className={styles.title}>{x.title}</h3>
                  </div> */}
                  <div className={styles.metaBottom}>
                    <p className={styles.desc}>{x.description}</p>
                  </div>
                  <Image
                    src={x.src}
                    fill
                    alt={x.title}
                    className={styles.img}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
