/* Modelo mínimo para almancenamiento de datos de libros */

export interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  year: number;
  genre: string;
}