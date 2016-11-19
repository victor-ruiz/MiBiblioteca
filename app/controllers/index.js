/**
 * Se crea un modelo y se guarda la informacion*/

/**
 * definimos el modelo mybooks*/
var mybooks = Alloy.Collections.books;
/**
 * Añadimos un libro*/
/*var book = Alloy.createModel('books',{
	title:'Cien años de soledad',
	author: 'Gabriel Garcia Marquez',
	date: '05/06/1967'
});
//se agrega el libro 
mybooks.add(book);
//se guarda el libro
book.save();
*/

for (var i=0; i < Alloy.Globals.books.length; i++) {
  var book = Alloy.createModel('books',{
  	title: Alloy.Globals.books[i].title,
  	author: Alloy.Globals.books[i].author,
  	date: Alloy.Globals.books[i].date,
  	image: Alloy.Globals.books[i].image
  });
  
  mybooks.add(book);
  
  book.save();
};

/**
 * @param {Object} e
 * objeto de origen*/

function detailsHandler(e){
	var selectedBook = Alloy.Globals.books[e.index];
	var args={
		title: selectedBook.title,
		author: selectedBook.author,
		date: selectedBook.date,
		image: selectedBook.image
	};
	//se crea un controlador para detalles de libro
	var bookview = Alloy.createController('bookdetails',args).getView();
	bookview.open();
};


$.index.open();
