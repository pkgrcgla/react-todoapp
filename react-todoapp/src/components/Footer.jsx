import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed To Do:{completedTodos}</span>
      <span className={styles.item}>Total To Do:{totalTodos}</span>
    </div>
  );
}
