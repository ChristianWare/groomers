import styles from "./Button.module.css";
import { ReactNode } from "react";
import Link from "next/link";
// import ChevronRight from "@/components/icons/ChevronRight/ChevronRight";

interface Props {
  href: string;
  text?: string;
  btnType: string;
  target?: string;
  disabled?: boolean;
  children?: ReactNode;
  arrow?: boolean;
  plus?: boolean;
  phone?: boolean;
}

export default function Button({
  href = "",
  text,
  btnType,
  target = "",
  disabled,
  children,
}: Props) {
  const content = text || children;

  return (
    <button className={styles.container} disabled={disabled}>
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
      >
        {content}
        {/* <ChevronRight className={styles.icon} /> */}
      </Link>
    </button>
  );
}
