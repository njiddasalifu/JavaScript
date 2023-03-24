
const x = document.getElementById("demo");
function getLocation(){ 
    // checking if Geoloacation si supported by the browser
    // If supported, run the getCurrentPosition() method. If not, display a message to the user

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else {
        x.innerHTML = "Geolocations is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML ="Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

// handling errors
function showError(error){
    switch(error.code) {
        case error.PERMISSION_DENIED:
          x.innerHTML = "User denied the request for Geolocation."
          break;
        case error.POSITION_UNAVAILABLE:
          x.innerHTML = "Location information is unavailable."
          break;
        case error.TIMEOUT:
          x.innerHTML = "The request to get user location timed out."
          break;
        case error.UNKNOWN_ERROR:
          x.innerHTML = "An unknown error occurred."
          break;
      }

}