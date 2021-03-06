import NewTodo from "../components/NewTodo";
import TodoHeader from "../components/TodoHeader";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.todoContent}>
        <TodoHeader />
        <NewTodo />
      </section>
    </div>
  );
}
