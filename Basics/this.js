const person = {
    fName: "Salif",
    lName: "Njidda",
    fullName: function() {
        return this.fName + " " + this.lName;
    }
};
console.log(fullName);