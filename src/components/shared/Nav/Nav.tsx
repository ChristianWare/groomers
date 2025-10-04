"use client";

import Link from "next/link";
import styles from "./Nav.module.css";
// import Logo from "../Logo/Logo";
// import Button from "../Button/Button";
// import { MouseEvent, useEffect, useState } from "react";
import { useEffect, useState } from "react";
// import Logo from "../Logo/Logo";
// import Search from "@/components/icons/Search/Search";
// import Phone from "@/components/icons/Phone/Phone";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

const navItems = [
  { text: "Home", href: "/" },
  { text: "services", href: "/services" },
  { text: "About", href: "/about" },
  { text: "Gallery", href: "/gallery" },
  { text: "Contact", href: "/contact" },
];

interface Props {
  color?: string;
  hamburgerColor?: string;
}

export default function Nav({ color = "", hamburgerColor = "" }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  // const { data: session, status } = useSession();

  useEffect(() => {
    const body = document.body;
    body.style.overflow =
      window.innerWidth <= 910 && isOpen ? "hidden" : "auto";

    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      body.style.overflow = "auto";
    };
  }, [isOpen]);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  // const router = useRouter();

  // const handleAccountClick = (e: MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   setIsOpen(false);
  //   if (status === "loading") return;
  //   if (!session) {
  //     router.push("/login");
  //   } else if (session.user?.role === "ADMIN") {
  //     router.push("/admin");
  //   } else {
  //     router.push("/dashboard");
  //   }
  // };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          {/* <Logo /> */}LOGO HERE
        </div>
        <div
          className={
            isOpen === false
              ? styles.navItems
              : `${styles.navItems} ${styles.active}`
          }
          onClick={openMenu}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`${styles.navItem} ${styles[color]}`}
            >
              {item.text}
            </Link>
          ))}
          <Link
            // href={session ? "/dashboard" : "/login"}
            // onClick={handleAccountClick}
            href='/'
            className={`${styles.navItem} ${styles[color]}`}
            prefetch={false}
          >
            My Account
          </Link>

          {/* <div className={styles.btnContainer}>
            <Button href='/booking' text='Book now' btnType='tan' arrow />
          </div> */}
          {/* <Search className={styles.icon} /> */}
        </div>
        <div className={styles.hamburgerContainer}>
          <span
            className={
              isOpen === false
                ? styles.hamburger
                : `${styles.hamburger} ${styles.active}`
            }
            onClick={openMenu}
          >
            <span
              className={`${styles.whiteBar} ${styles[hamburgerColor]}`}
            ></span>
            <span
              className={`${styles.whiteBar} ${styles[hamburgerColor]}`}
            ></span>
            <span
              className={`${styles.whiteBar} ${styles[hamburgerColor]}`}
            ></span>
          </span>
        </div>
      </nav>
    </header>
  );
}
