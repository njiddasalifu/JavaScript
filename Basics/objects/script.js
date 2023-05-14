

// creating an object
const student = {
    name: "Salif",
    matricule: "FE100",
    dept: "CE",
    age: 20,
    register: function(){
        return (this.name,
            this.age,
            this.dept,
            this.matricule)
    }
}

console.log(student.register)