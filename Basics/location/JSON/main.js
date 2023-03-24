
let text = '{"employees":[' +
'{"firstName":"Njidda","lastName":"Salifu" },' +
'{"firstName":"Santus","lastName":"Njidda" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
document.getElementById("demo").innerHTML = 
obj.employees[1].firstName + " " + obj.employees[1].lastName;