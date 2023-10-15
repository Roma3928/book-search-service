import React from 'react';
import styles from './Categories.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../store/slices/filterSlice.js';

function Categories() {
  const category = useSelector((state) => state.filters.category);
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = React.useState(false);
  const categoriesRef = React.useRef();
  const categoriesList = [
    { name: 'все', categoryProperty: 'all' },
    { name: 'искусство', categoryProperty: 'art' },
    { name: 'биография', categoryProperty: 'biography' },
    { name: 'информатика', categoryProperty: 'computers' },
    { name: 'история', categoryProperty: 'history' },
    { name: 'медицина', categoryProperty: 'medical' },
    { name: 'поэзия', categoryProperty: 'poetry' },
  ];

  const showPopup = () => {
    setIsVisible(!isVisible);
  };

  const onSelectElement = (obj) => {
    dispatch(setCategory(obj));
    setIsVisible(false);
  };

  const handleClickOutside = (e) => {
    if (categoriesRef.current && !categoriesRef.current.contains(e.target)) {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={categoriesRef} className={styles.filter}>
      <div className={styles.label}>
        <svg
          className={isVisible ? styles.rotated : ''}
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.9313 9.00005H16.0686C16.6744 9.00005 16.9773 9.00005 17.1175 8.88025C17.2393 8.7763 17.3038 8.62038 17.2913 8.46082C17.2768 8.27693 17.0626 8.06274 16.6342 7.63436L12.5656 3.56573C12.3676 3.36772 12.2686 3.26872 12.1544 3.23163C12.054 3.199 11.9458 3.199 11.8454 3.23163C11.7313 3.26872 11.6323 3.36772 11.4342 3.56573L7.36561 7.63436C6.93724 8.06273 6.72305 8.27693 6.70858 8.46082C6.69602 8.62038 6.76061 8.7763 6.88231 8.88025C7.02257 9.00005 7.32548 9.00005 7.9313 9.00005Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <b>Фильтрация:</b>
        <span onClick={showPopup}>{category.name}</span>
      </div>

      {isVisible && (
        <div className={styles.popup}>
          <ul>
            {categoriesList.map((obj, index) => (
              <li
                key={index}
                onClick={() => onSelectElement(obj)}
                className={category.categoryProperty === obj.categoryProperty ? styles.active : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Categories;
