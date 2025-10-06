"use client";

import { useRef, useState } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Love.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Button from "@/components/shared/Button/Button";
import Image from "next/image";
import Img1 from "../../../../public/images/love.jpg";
import Check from "@/components/icons/Check/Check";

const data = [
  {
    id: 1,
    title: "Professional Grooming",
    description:
      "Our experienced groomers provide top-notch grooming services to keep your dog looking and feeling their best.",
  },
  {
    id: 2,
    title: "Health and Wellness",
    description:
      "Regular grooming helps maintain your dog's overall health by preventing matting, skin issues, and promoting good hygiene.",
  },
  {
    id: 3,
    title: "Personalized Care",
    description:
      "We understand that every dog is unique. Our grooming services are tailored to meet the specific needs of your furry friend.",
  },
  {
    id: 4,
    title: "Convenience",
    description:
      "We offer flexible scheduling and a range of grooming packages to fit your busy lifestyle.",
  },
  {
    id: 5,
    title: "Love and Attention",
    description:
      "Our groomers are passionate about dogs and provide a loving and caring environment during every grooming session.",
  },
];

export default function Love() {
  const [openId, setOpenId] = useState<number | null>(null);
  const contentRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const onKey = (e: React.KeyboardEvent<HTMLDivElement>, id: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(id);
    }
  };

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionIntro title='Care for dogs' />
            <h2 className={styles.heading}>Dogs need love too!</h2>
            <p className={styles.copy}>
              We understand that dogs are more than just pets; they are family
              members who deserve the best care and attention. Our grooming
              services are designed to keep your furry friend looking and
              feeling their best, while also promoting their overall health and
              well-being.
            </p>
            <div className={styles.btnContainer}>
              <Button btnType='white' text='Book dog care now' href='/' />
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              {data.map((item) => {
                const isOpen = openId === item.id;
                const maxH = contentRefs.current[item.id]?.scrollHeight ?? 0;

                return (
                  <div
                    key={item.id}
                    className={`${styles.card} ${
                      isOpen ? styles.cardOpen : ""
                    }`}
                  >
                    <div
                      className={styles.iconTitleBox}
                      role='button'
                      tabIndex={0}
                      aria-expanded={isOpen}
                      aria-controls={`panel-${item.id}`}
                      onClick={() => toggle(item.id)}
                      onKeyDown={(e) => onKey(e, item.id)}
                    >
                      <Check
                        className={`${styles.icon} ${
                          isOpen ? styles.iconActive : ""
                        }`}
                      />
                      <h3 className={styles.title}>{item.title}</h3>
                      <span className={styles.chevron} aria-hidden='true' />
                    </div>

                    {/* Animated region */}
                    <div
                      id={`panel-${item.id}`}
                      className={styles.descWrap}
                      ref={(el) => {
                        contentRefs.current[item.id] = el;
                      }}
                      style={{ maxHeight: isOpen ? maxH : 0 }}
                    >
                      <p className={styles.desc}>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.bottomRight}>
              <div className={styles.imgContainer}>
                <Image src={Img1} alt='' title='' fill className={styles.img} />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
