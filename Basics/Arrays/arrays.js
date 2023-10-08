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
  console.log(Books[2].title);