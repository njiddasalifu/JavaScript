
const time = document.getElementById("time").innerHTML=
function time(){
    const date = new Date()
    const hours = new date.getHours()
    let timeOfDay 
    if(hours<12) {
        timeOfDay = "morning";
    } else if(hours>=12 && hours<17){
        timeOfDay = "afterneeon";
    } else{
        timeOfDay = "night";
    }

    return (
        <h2>Good {timeOfDay}!</h2>
    );
}
