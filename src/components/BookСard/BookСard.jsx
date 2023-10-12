import styles from './BookСard.module.scss';

function BookСard({ photo, category, title, author }) {
  return (
    <div className={styles.bookCard}>
      <img src={photo} alt="" />
      <p className={styles.bookCard__category}>{category}</p>
      <h2 className={styles.bookCard__title}>{title}</h2>
      <p className={styles.bookCard__author}>{author}</p>
    </div>
  );
}

export default BookСard;
