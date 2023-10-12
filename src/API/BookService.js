import axios from 'axios';

export default class BookService {
  static async getAll(search) {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCympE15j_-gfqoMaLbeECYg_--qPRbPQI`,
    );
    return response.data;
  }
}
