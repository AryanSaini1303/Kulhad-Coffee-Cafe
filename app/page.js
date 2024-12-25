"use client";
import { Lato, Playwrite_BE_VLG } from "next/font/google";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
// import { Lobster } from "next/font/google";
// import { Playwrite_AR } from "next/font/google";
import { Playwrite_BE_VLG } from "next/font/google";

const lato = Lato({ weight: "400", subsets: ["latin"] });
// const lobster = Lobster({ weight: "400", subsets: ["latin"] });
// const playwriteAR = Playwrite_AR({ weight: "400", subsets: ["latin"] });
const playwrite = Playwrite_BE_VLG({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [showHamMenu, setShowHamMenu] = useState(false);
  function handleHam() {
    setShowHamMenu(!showHamMenu);
  }
  return (
    <div className="wrapper">
      <Image
        src={"/beansBG.png"}
        width={100}
        height={100}
        alt=""
        className="bean1"
      />
      <Image
        src={"/beansBG.png"}
        width={100}
        height={100}
        alt=""
        className="bean2"
      />
      <header className={styles.navbar}>
        <div className={styles.hamburger} onClick={handleHam}>
          <div
            style={
              showHamMenu
                ? { transform: "rotate(45deg)", transformOrigin: "20% 40%" }
                : null
            }
          ></div>
          <div
            style={
              showHamMenu
                ? { transform: "rotate(-45deg)", transformOrigin: "20% 40%" }
                : null
            }
          ></div>
        </div>
        <Image
          src={"/logo.png"}
          width={40}
          height={40}
          alt=""
          className={styles.mainLogo}
        />
        <Link href={"/"}>
          <h3 className={lato.className}>Kulhad Coffee Cafe</h3>
        </Link>
        {showHamMenu && (
          <nav>
            <ul className={lato.className}>
              <li>About Cafe</li>
              <li>About me</li>
              <li>Feedback</li>
              <li>Contact</li>
            </ul>
            <Image src={"/logo4.png"} width={55} height={80} alt="" />
          </nav>
        )}
      </header>
      <h2 className={playwrite.className} style={{ textAlign: "center" }}>
        Coffee is not a drink, it&apos;s a moment.
      </h2>
      <Image
        src={"/coffee_mug1.png"}
        width={90}
        height={130}
        alt=""
        className={styles.coffee_mug1}
      />
      <Image
        src={"/coffee_mug2.png"}
        width={90}
        height={130}
        alt=""
        className={styles.coffee_mug2}
      />
      <Image
        src={"/logo1.png"}
        width={50}
        height={50}
        alt=""
        className={styles.logo1}
      />
      <Image
        src={"/background.png"}
        width={100}
        height={100}
        alt=""
        className={styles.bg1}
      />
      <Image
        src={"/coffee.png"}
        width={100}
        height={100}
        alt=""
        className={styles.coffee}
      />
      <Image
        src={"/coffee.png"}
        width={100}
        height={100}
        alt=""
        className={styles.coffee}
      />
      <Image
        src={"/coffee.png"}
        width={100}
        height={100}
        alt=""
        className={styles.coffee}
      />
      <Image
        src={"/coffee.png"}
        width={100}
        height={100}
        alt=""
        className={styles.coffee}
      />
      <Image
        src={"/kulhad.png"}
        width={130}
        height={170}
        alt=""
        className={styles.kulhad}
      />
    </div>
  );
}
