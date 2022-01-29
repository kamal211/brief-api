let img = document.getElementById('img');


function isValid(country) {
  let regx = /^[\w\s]{2,20}$/;
  if (regx.test(country))
    return true
  else {
    alert('Name of artist is not valid , Please retry')
    return false
  }
}
function request(artist) {

  fetch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {

      img.src = value.artists[0].strArtistFanart;
      // img.alt = 'image indisponible';
      
      
      document.getElementById('name-artist').innerText ="Nom d'artist :" + ' ' + value.artists[0].strArtist;
      document.getElementById('date-debut').innerText ="Début de carriére :"+ ' ' + value.artists[0].intFormedYear;
      document.getElementById('start-style').innerText = "Style :" + ' ' + value.artists[0].strStyle;
      document.getElementById('start-genre').innerText = "Genre musical :" + ' ' + value.artists[0].strGenre;

      document.getElementById('start-biography').innerHTML = `<h5 style="color: #f82601" >BIOGRAPHY<h5>`+ ' ' + value.artists[0].strBiographyFR;

    })
    .catch(function (err) {
      err = alert('information not founded')
    });
}
document.getElementById('button-addon2').addEventListener('click', function () {
  let artistName = document.getElementById('cities-input').value;

  if (isValid(artistName) == true) {

    return request(artistName)
  }
  else return false
})