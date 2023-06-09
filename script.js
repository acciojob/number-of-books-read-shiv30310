const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

let count = 0;
const numberOfBooksRead = () => {
  // write your code here
	for(let book of library){
		if(book.readingStatus === true){
			count += 1	
		}
	}
	return count
};


// Do not change the code below

alert(numberOfBooksRead());
