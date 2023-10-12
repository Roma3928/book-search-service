import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={styles.title}>читай-страна</h1>
      </div>
    </header>
  );
}

export default Header;
