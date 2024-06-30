import Image from "next/image";
import styles from "./page.module.css";
import Retake from "../../components/atoms/retake_Button"
import HomeIcon from "../../components/atoms/icon_home"
import HomeIconNav from "../../components/molecules/icon_home_Navigation"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <HomeIcon/>
          <HomeIconNav/>
        <p>
          Colton Blackwell
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Colton BlackWell
          </a>
        </div>
      </div>


      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </div>
    </main>
  );
}