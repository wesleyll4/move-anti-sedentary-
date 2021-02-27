import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengerContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/wesleyll4.png" alt="Wesley Rodrigo" />
      <div>
        <strong>Wesley Rodrigo</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
