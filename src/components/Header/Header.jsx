import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link to="/">
          <h1 className={styles.title}>читай-страна</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
