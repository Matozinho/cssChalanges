import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

function Contador() {
  const [contador, setContador] = useState(0);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <button onClick={adicionarContador}>Adicionar</button>
      <div> {contador} </div>
    </div>
  );
}

function OpenedSideBar() {
  return (
    <div>
      <div
        className={styles.hamburguer}
        onClick={() => {
          sideBar === "OPEN"
            ? setSideBar(sideBarState.CLOSE)
            : setSideBar(sideBarState.OPEN);
        }}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <ul className={styles.navLinks.open}>
        <li>
          <Link href="/sobre">
            <a>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Projetos</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Contatos</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

const sideBarState = {
  OPEN: "OPEN",
  CLOSE: "CLOSE",
};

export default function Home() {
  const [sideBar, setSideBar] = useState(sideBarState.CLOSE);

  return (
    <div>
      <header className={styles.header}>
        <div
          className={styles.hamburguer}
          onClick={() => {
            sideBar === "OPEN"
              ? setSideBar(sideBarState.CLOSE)
              : setSideBar(sideBarState.OPEN);
          }}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/sobre">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Projetos</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Contatos</a>
            </Link>
          </li>
        </ul>
      </header>

      <main className={styles.main}>
        <h1>Home</h1>

        <Contador />

        <Link href="/sobre">
          <a>Sobre</a>
        </Link>
      </main>
    </div>
  );
}
