const todos= [{
    id: 1,
    text: ' Take AWS educate course',
    isCompleted: false
},
{
    id: 2,
    text: ' Server setup',
    isCompleted: false
},
{
    id: 3,
    text: ' Start reactjs',
    isCompleted: false
},
];
const todoText = todos.map(function(todo) {
    return todo.text;
});
document.getElementById("todos").innerHTML=todoText;

//console.log(todos);
