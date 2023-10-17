import styles from './BooksList.module.scss';
import noPhoto from '../../assets/img/no-photo.svg';
import BookСard from '../BookСard/BookСard';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BooksList() {
  const { books, totalItems } = useSelector((state) => state.books);
  return (
    <div className={styles.booksList}>
      {totalItems > 0 &&
        books.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`}>
            <BookСard
              photo={
                book.volumeInfo.imageLinks?.thumbnail
                  ? book.volumeInfo.imageLinks.thumbnail
                  : noPhoto
              }
              category={book.volumeInfo.categories?.[0]}
              title={book.volumeInfo.title}
              author={book.volumeInfo?.authors?.join(', ')}
            />
          </Link>
        ))}
    </div>
  );
}

export default BooksList;
