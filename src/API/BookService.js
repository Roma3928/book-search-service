import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = process.env.REACT_APP_API_KEY;

export default class BookService {
  static async getAll(search, fetchArguments, startIndex = 0, limit = 24) {
    const { category, sort } = fetchArguments;
    const subject =
      category.categoryProperty === 'all' ? '' : `+subject:${category.categoryProperty}`;

    const response = await axios.get(
      `${API_URL}?q=${search}${subject}&orderBy=${sort.sortProperty}&startIndex=${startIndex}&maxResults=${limit}&key=${API_KEY}`,
    );
    return response.data;
  }
}
