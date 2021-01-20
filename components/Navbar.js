import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@material-ui/core";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.containerLeft}>
          <h1 className={styles.title}>Crazy4bonus</h1>
          <div className={styles.logoContainer}>
            <Image
              src="/logo.png"
              alt="Picture of the author"
              width={80}
              height={80}
              unoptimized={true}
            />
          </div>
        </div>
        <div className={styles.buttonRight}>
          <Link href="/Bonus" passHref>
            <Button>Bonus</Button>
          </Link>
          <Link href="/Stream" passHref>
            <Button>Stream</Button>
          </Link>
        </div>
      </nav>
    </>
  );
}
