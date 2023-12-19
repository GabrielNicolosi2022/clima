import styles from './loading.module.css'

const Loading = () => {
  return (
    <div className={styles.body}>
      <div class={styles.spinner}>
        <div class={styles.circle}></div>
      </div>
    </div>
  );
}

export default Loading