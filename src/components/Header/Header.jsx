import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Want to <span>work</span> with <span>Thrifty ?</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src="https://theme.zdassets.com/theme_assets/499832/623f60b96ddfd183dc05188233f519571cdfea7c.png" alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
