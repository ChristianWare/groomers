/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutServicesPreview.module.css";
import Button from "@/components/shared/Button/Button";
import Image, { StaticImageData } from "next/image";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Arrow from "@/components/icons/Arrow/Arrow";

import Img1 from "../../../../public/images/consultation.jpg";
import Img2 from "../../../../public/images/cut.jpg";
import Img3 from "../../../../public/images/deshedding.jpg";
import Img4 from "../../../../public/images/doggy.jpg";
import Img5 from "../../../../public/images/doggyii.jpg";
import Img6 from "../../../../public/images/doggyiii.jpg";
import Img7 from "../../../../public/images/ear.jpg";
import Img8 from "../../../../public/images/flea.jpg";

const data = [
  { id: 1, title: "Health Services" },
  { id: 2, title: "Grooming Services" },
  { id: 3, title: "Adoption Services" },
];

const images: StaticImageData[] = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
];

export default function AboutServicesPreview() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const slides = useMemo(() => {
    const head = images.slice(0, 2);
    const tail = images.slice(-2);
    return [...tail, ...images, ...head];
  }, []);

  const realStart = 2;
  const realEnd = images.length + 1;
  const [currentIndex, setCurrentIndex] = useState(realStart);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [stepPx, setStepPx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    function measure() {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;

      const firstSlide = track.querySelector(
        `.${styles.slide}`
      ) as HTMLElement | null;

      let slideWidth = 0;
      if (firstSlide) {
        slideWidth = firstSlide.getBoundingClientRect().width;
      } else if (viewport.offsetWidth) {
        slideWidth = viewport.offsetWidth / 2;
      }

      let gap = 0;
      const cs = getComputedStyle(track);
      const g = cs.gap || cs.columnGap || "0";
      gap = parseFloat(g) || 0;

      setStepPx(slideWidth + gap);
    }

    measure();

    let ro: ResizeObserver | null = null;
    if (typeof window !== "undefined" && "ResizeObserver" in window) {
      ro = new ResizeObserver(() => measure());
      if (viewportRef.current) ro.observe(viewportRef.current);
    }
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      if (ro && viewportRef.current) ro.unobserve(viewportRef.current);
    };
  }, []);

  const goPrev = useCallback(() => {
    if (!stepPx || isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((i) => i - 1);
  }, [stepPx, isAnimating]);

  const goNext = useCallback(() => {
    if (!stepPx || isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((i) => i + 1);
  }, [stepPx, isAnimating]);

  const handleTransitionEnd = useCallback(() => {
    if (currentIndex === realEnd + 1) {
      setTransitionEnabled(false);
      setCurrentIndex(realStart);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
          setIsAnimating(false);
        })
      );
    } else if (currentIndex === 1) {
      setTransitionEnabled(false);
      setCurrentIndex(realEnd);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
          setIsAnimating(false);
        })
      );
    } else {
      setIsAnimating(false);
    }
  }, [currentIndex, realEnd, realStart]);

  const offsetPx = -(currentIndex * stepPx);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionIntro title='About Our Services' />
            <h2 className={styles.heading}>
              We offer a wide range of services
            </h2>
            <p className={styles.copy}>
              We are a passionate team of pet lovers who believe in treating
              every animal like our own. From health services to grooming, and
              adoption, we’re here to support your pet’s journey every step of
              the way.
            </p>
            <div className={styles.mapDataContainer}>
              {data.map((item) => (
                <div key={item.id} className={styles.mapDataItem}>
                  <p className={styles.mapDataTitle}>{item.title}</p>
                </div>
              ))}
            </div>
            <div className={styles.btnContainer}>
              <Button href='/' text='Book a groom' btnType='brownOutline' />
            </div>
          </div>

          <div className={styles.right}>
            <button
              type='button'
              className={styles.leftArrow}
              onClick={goPrev}
              aria-label='Previous'
              disabled={isAnimating}
            >
              <Arrow className={styles.icon} />
            </button>

            <button
              type='button'
              className={styles.rightArrow}
              onClick={goNext}
              aria-label='Next'
              disabled={isAnimating}
            >
              <Arrow className={styles.icon} />
            </button>

            <div className={styles.carousel} ref={viewportRef}>
              <div
                className={styles.track}
                ref={trackRef}
                style={{
                  transform: `translateX(${
                    isFinite(offsetPx) ? offsetPx : 0
                  }px)`,
                  transition: transitionEnabled
                    ? "transform 420ms ease"
                    : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {slides.map((img, i) => (
                  <div key={i} className={styles.slide}>
                    <div className={styles.frame}>
                      <Image
                        src={img}
                        alt=''
                        title=''
                        fill
                        className={styles.img1}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
