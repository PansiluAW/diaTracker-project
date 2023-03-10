import React from "react";
import styles from "styled-components"
import { BufferingScreenRootRoot1 } from './BufferingScreenRootRoot1';
import { useEffect } from 'react';


const SplashScreen = () => {
    
    useEffect(() => {
        return(
            <BufferingScreenRootRoot1/>
        )
    },[5000])

  return (
    <div className={styles.splashScreen}>
      <img
        className={styles.logoNoBackground1Icon}
        alt=""
        src="../logonobackground-1@2x.png"
      />
      <img
        className={styles.undrawMedicineB1Ol1Icon}
        alt=""
        src="../undraw-medicine-b1ol-1.svg"
      />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.openStopFor}>
        Open Stop For All Your Diabetes Management Needs
      </div>
      <div className={styles.splashScreenChild} />
      <div className={styles.getStarted}>Get Started</div>
      <div className={styles.diatrackerIsBuilt}>
        DiaTracker is built with the sole purpose of providing functionalities
        for the ease of diabetes patients in managing diabetes with one single
        app
      </div>
    </div>
  );
};

export default SplashScreen;
