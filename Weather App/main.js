window.addEventListener('load', ()=>{
    let long;
    let lat;
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/";
            // api key
            const api = `${proxy}71c820cac93a40019e8232843230504/${lat}, ${long}`;


            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data=> {
                    console.log(data);
                });
        });

    }
});