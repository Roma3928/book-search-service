import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookById } from '../../store/slices/booksSlice.js';
import styles from './BookPage.module.scss';
import noPhoto from '../../assets/img/no-photo.svg';
import Loader from '../../components/UI/Loader/Loader.jsx';

function BookPage() {
  const dispatch = useDispatch();
  const { book, isLoading, error } = useSelector((state) => state.books);
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchBookById(id));
  }, []);

  console.log(book);

  return (
    <>
      {error && <p className="error-box">Произошла ошибка!</p>}

      {isLoading ? (
        <div className="loader-box">
          <Loader />
        </div>
      ) : (
        <div className={styles.root}>
          <div className={styles.imgBox}>
            <img src={book.imageLinks?.thumbnail ? book.imageLinks.thumbnail : noPhoto} alt="" />
          </div>

          <div className={styles.info}>
            <p className={styles.categories}>{book?.categories?.join(', ')}</p>
            <h2 className={styles.title}>{book?.title}</h2>
            <p className={styles.authors}>{book?.authors?.join(', ')}</p>
            <p className={styles.description}>{book?.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default BookPage;
