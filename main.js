const findMyState = () => {
    const status = document.querySelector('.status');

    const success = (position) =>{
        console.log(position)
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        //console.log(latitude + ' ' + longitude)

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

        fetch(geoApiUrl)
        .then(res => res.json()
        .then(data => {
            console.log(data)
           //status.textContent = data.city
           status.textContent = data.locality 
        }))
    }

    const error = () => {
        status.textContent = 'Localização não encontrada.';
    }

    navigator.geolocation.getCurrentPosition(success,  error);
}

document.querySelector('.find-state').addEventListener('click', findMyState);

