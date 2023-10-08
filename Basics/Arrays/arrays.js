const Books = [{
    title: "Speaking JS",
    author: "Axel Rauschmayer",
    pages: 460
},
{
    title: "Programming JS Applications",
    author: "Eric Eliot",
    pages: 254
},
{
    title: "Understanding ECMAScript",
    author: "Nicholas C.",
    pages: 352

}
];
let newBook = [{
    title: "Learning JS Design Patterns",
    author: "Addy Osmani",
    pages: 251
}];

  Books.push(newBook);
console.log(Books.length);
// console.log("after removing the fist element");
// Books.shift();
// console.log(Books.length);
// console.log(Books)
//   console.log(Books[2].title);

//summing the pages of all the books in the array
let sum = Books[0].pages + Books[1].pages + Books[2].pages;

console.log(`Sum of all the books pages is : ${sum}`);