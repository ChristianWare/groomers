import styles from "./Marquee.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/consultation.jpg";
import Img2 from "../../../../public/images/cut.jpg";
import Img3 from "../../../../public/images/deshedding.jpg";
import Img4 from "../../../../public/images/doggy.jpg";
import Img5 from "../../../../public/images/doggyii.jpg";
import Img6 from "../../../../public/images/doggyiii.jpg";
import Img7 from "../../../../public/images/ear.jpg";

export default function Marquee() {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  return (
    <div className={styles.slider}>
      <div className={styles.track}>
        {[...images, ...images].map((img, index) => (
          <div key={index} className={styles.imgContainer}>
            <Image
              src={img}
              alt=''
              fill
              className={styles.img}
              sizes='(max-width: 768px) 100vw, 300px'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
