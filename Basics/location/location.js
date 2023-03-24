
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

      // displaying results in a map
      // To display the result in a map, you need access to a map service, like Google Maps.
      //function showPosition(position){
        //let latlon = position.coords.latitude + "," + position.coords.longitude;

        //let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
       // "+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
       // document.getElementById("mapholder").innerHTML = "<img src = '"+img_url +"'>";
      //}

}