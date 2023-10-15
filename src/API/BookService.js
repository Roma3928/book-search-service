import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = process.env.REACT_APP_API_KEY;

export default class BookService {
  static async getAll(search, startIndex = 0, limit = 30, category = 'all', orderBy = 'relevance') {
    const subject = category === 'all' ? '' : `+subject:${category}`;

    const response = await axios.get(
      `${API_URL}?q=${search}${subject}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${limit}&key=${API_KEY}`,
    );
    return response.data;
  }
}
