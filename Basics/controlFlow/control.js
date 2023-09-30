function findFruit() {
    var fruitInput = document.getElementById("fruitInput").value;
    var resultElement = document.getElementById("result");

    switch (fruitInput.toLowerCase()) {
        case "oranges":
            resultElement.textContent = "Oranges are $0.59 a pound.";
            break;
        case "apples":
            resultElement.textContent = "Apples are $0.32 a pound.";
            break;
        case "bananas":
            resultElement.textContent = "Bananas are $0.48 a pound.";
            break;
        case "cherries":
            resultElement.textContent = "Cherries are $3.00 a pound.";
            break;
        case "mangoes":
            resultElement.textContent = "Mangoes are $0.56 a pound.";
            break;
        case "papayas":
            resultElement.textContent = "Mangoes and papayas are $2.79 a pound.";
            break;
        default:
            resultElement.textContent = `Sorry, we are out of ${fruitInput}.`;
    }

    console.log("Is there anything else you'd like?");
}