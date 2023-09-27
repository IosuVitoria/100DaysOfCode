// import React, { useState, useEffect } from 'react';
// import bookData from '../Data/dataf.json';
// import './booklist.css'; 

// const BooksPerPage = 6;

// const BookList = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [currentBooks, setCurrentBooks] = useState([]);
//     const [expandedDescriptions, setExpandedDescriptions] = useState([]);
//     const [searchTermTitle, setSearchTermTitle] = useState('');
//     const [searchTermAuthor, setSearchTermAuthor] = useState('');
//     const [searchTermYear, setSearchTermYear] = useState('');

//     useEffect(() => {
//         const lastBookIndex = currentPage * BooksPerPage;
//         const firstBookIndex = lastBookIndex - BooksPerPage;

//         const filteredBooks = bookData
//             .filter(book => book.title.toLowerCase().includes(searchTermTitle.toLowerCase()))
//             .filter(book => book.author.toLowerCase().includes(searchTermAuthor.toLowerCase()))
//             .filter(book => book.year.toString().includes(searchTermYear));

//         setCurrentBooks(filteredBooks.slice(firstBookIndex, lastBookIndex));
//     }, [currentPage, searchTermTitle, searchTermAuthor, searchTermYear]);

//     const totalBooks = bookData.length;
//     const totalPages = Math.ceil(totalBooks / BooksPerPage);

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     const toggleDescription = (index) => {
//         const newExpandedDescriptions = [...expandedDescriptions];
//         newExpandedDescriptions[index] = !newExpandedDescriptions[index];
//         setExpandedDescriptions(newExpandedDescriptions);
//     };

//     const renderBookCards = () => {
//         return currentBooks.map((book, index) => (
//             <div key={index} className="bookCard">
//                 <img src={book.Image} alt="imagen del libro" />
//                 <h3>{book.title}</h3>
//                 <p className="author">Author: {book.author}</p>
//                 <p>Year: {book.year}</p>
//                 <p>Country: {book.Country}</p>
//                 <p className="score">Score: {book.Score}</p>
//                 <button className="description-button" onClick={() => toggleDescription(index)}>
//                     {expandedDescriptions[index] ? 'Ver menos' : 'Ver más'}
//                 </button>
//             </div>
//         ));
//     };

//     return (
//         <div>
//             <h2 className="booklist__h2">Listado de Libros</h2>
//             <div className="search-bar">
//                 <label htmlFor="searchTitle">Buscar por título:</label>
//                 <input
//                     type="text"
//                     id="searchTitle"
//                     placeholder="Título del libro"
//                     value={searchTermTitle}
//                     onChange={(e) => setSearchTermTitle(e.target.value)}
//                 />
//                 <label htmlFor="searchAuthor">Buscar por autor:</label>
//                 <input
//                     type="text"
//                     id="searchAuthor"
//                     placeholder="Nombre del autor"
//                     value={searchTermAuthor}
//                     onChange={(e) => setSearchTermAuthor(e.target.value)}
//                 />
//                 <label htmlFor="searchYear">Buscar por año:</label>
//                 <input
//                     type="text"
//                     id="searchYear"
//                     placeholder="Año de publicación"
//                     value={searchTermYear}
//                     onChange={(e) => setSearchTermYear(e.target.value)}
//                 />
//             </div>
//             <div className="bookList">{renderBookCards()}</div>
//             <div className="pagination">
//                 {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
//                     <button
//                         key={page}
//                         onClick={() => handlePageChange(page)}
//                         className={currentPage === page ? 'active' : ''}
//                     >
//                         {page}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BookList;

import React, { useState, useEffect } from 'react';
import bookData from '../Data/dataf.json';
import './booklist.css';

const BooksPerPage = 6;

const BookList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBooks, setCurrentBooks] = useState([]);
  const [searchTermTitle, setSearchTermTitle] = useState('');
  const [searchTermAuthor, setSearchTermAuthor] = useState('');
  const [searchTermYear, setSearchTermYear] = useState('');

  useEffect(() => {
    const lastBookIndex = currentPage * BooksPerPage;
    const firstBookIndex = lastBookIndex - BooksPerPage;

    const filteredBooks = bookData
      .filter(book => book.title.toLowerCase().includes(searchTermTitle.toLowerCase()))
      .filter(book => book.author.toLowerCase().includes(searchTermAuthor.toLowerCase()))
      .filter(book => book.year.toString().includes(searchTermYear));

    setCurrentBooks(filteredBooks.slice(firstBookIndex, lastBookIndex));
  }, [currentPage, searchTermTitle, searchTermAuthor, searchTermYear]);

  const totalBooks = bookData.length;
  const totalPages = Math.ceil(totalBooks / BooksPerPage);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2 className="booklist__h2">Listado de Libros</h2>
      <div className="search-bar">
        <label htmlFor="searchTitle">Buscar por título:</label>
        <input
          type="text"
          id="searchTitle"
          placeholder="Título del libro"
          value={searchTermTitle}
          onChange={e => setSearchTermTitle(e.target.value)}
        />
        <label htmlFor="searchAuthor">Buscar por autor:</label>
        <input
          type="text"
          id="searchAuthor"
          placeholder="Nombre del autor"
          value={searchTermAuthor}
          onChange={e => setSearchTermAuthor(e.target.value)}
        />
        <label htmlFor="searchYear">Buscar por año:</label>
        <input
          type="text"
          id="searchYear"
          placeholder="Año de publicación"
          value={searchTermYear}
          onChange={e => setSearchTermYear(e.target.value)}
        />
      </div>
      <div className="bookList">
        {currentBooks.map((book, index) => (
          <div key={index} className="bookCard">
            <img src={book.Image} alt="imagen del libro" />
            <h3><b>{book.title}</b></h3>
            <p className="author">Autor/ra: <b>{book.author}</b></p>
            <p><b>Año:</b> {book.year}</p>
            <div className="description"><b>Descripción:</b> {book.Description}</div>
            <p><b>Estado:</b> {book.Country}</p>
            <p className="score"><b>Puntuación Mundolibro: </b>{book.Score}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookList;

