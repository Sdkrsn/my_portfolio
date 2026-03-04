import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Siddharth Radhakrishnan</h1>
        <p className={styles.description}>I am a fourth-year B.Tech Computer Science and Engineering (CSE) with IoT student, passionate about Machine Learning (ML) and its applications. 
        Additionally, I have gained experience in ethical hacking, as well as web and app development, and I am eager to explore innovative projects in these domains.

        </p>
        <a href="/Siddharth_CV(R).pdf" download="Siddharth_Resume" className={styles.contactBtn}>
          Download Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/pic.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
