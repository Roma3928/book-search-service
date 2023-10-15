import styles from './PaginationButton.module.scss';

function PaginationButton({ showMore }) {
  return (
    <button onClick={showMore} className={styles.paginationButton}>
      Показать еще
    </button>
  );
}

export default PaginationButton;
