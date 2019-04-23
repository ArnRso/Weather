window.addEventListener('load', () => {
    let long, lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.darksky.net/forecast/e30bcb2421c12acb84f584d705edf9bc/${lat},${long}`;

            fetch(api)
                .then(response => {
                    returns response.json()
                })
                .then(data => {
                    console.log(data);
                })
        });


    }
})