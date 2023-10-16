import styles from './NotFoundBlock.module.scss';
function NotFoundBlock() {
  return (
    <div className={styles.content}>
      <p>😔</p>
      <h1>Ничего не найдено</h1>
    </div>
  );
}

export default NotFoundBlock;
