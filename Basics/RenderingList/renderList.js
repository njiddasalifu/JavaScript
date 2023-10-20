const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Ponge Angel: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

function List() { 
    const ListItems = people.map(person =>
    <li>{person}</li>)
    return <ul>{ListItems}</ul>
    console.log(ListItems);
}