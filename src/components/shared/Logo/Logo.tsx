import styles from "./Logo.module.css";
import Link from "next/link";
import Paw from "@/components/icons/Paw/Paw";

interface Props {
  size?: string;
  color?: string;
  backgroundColor?: string;
  direction?: string;
}

const Logo = ({
  size = "",
  color = "",
  backgroundColor = "",
  direction = "",
}: Props) => {
  return (
    <Link
      href='/'
      className={`${styles.logo} ${styles[size]} ${styles[color]} ${styles[backgroundColor]} ${styles[direction]}`}
    >
      {/* Comb & Collar{" "} */}
      G . G . C <Paw className={styles.icon} />
    </Link>
  );
};

export default Logo;
