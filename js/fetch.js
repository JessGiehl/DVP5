//function that submits search value with api to return results, prints to the DOM
function searchSubmit(){
  console.log("hey!");

  //variables for storing api string
  var url= 'https://www.giantbomb.com/api/search/';
  var userSearch = "&query=\"metroid prime\"&resources=game";
  var key = '?api_key=f41a22bcc19858b1a3b86fcd2f063e27da597091&format=json';

  //construct string and fetch response
  fetch(url+key+userSearch, {
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
})
    .then(function(response) {
      console.log("ping 1");
      //turn response into a JSON object
      return response.json();
    })
    .then(function(myJson) {
      console.log("ping 2");
      console.log(myJson);
        //create a string to store adjacentHTML
        var output = `<ul class="resultlist">`;
        //create list items for 9 results
        // for (var i = 0; i < 9; i++) {
        //   output +=
        //   ` <li>
        //       <img src="${myJson.topalbums.album[i].image[3]['#text']}">
        //       <h3>${myJson.topalbums.album[i].name}</h3>
        //       <p>${myJson.topalbums.album[i].artist.name}</p>
        //       <p><a href="${myJson.topalbums.album[i].url}">${myJson.topalbums.album[i].name}</a></p>
        //     </li>`
        // }
        output += `</ul>`;

        document.querySelector('h2').insertAdjacentHTML('afterend', output);
    })
    .catch(error => console.error(error));
}

var search = document.getElementById('search');
console.log(search);
//when form is submitted, run searchSubmit()
search.addEventListener("click", searchSubmit);
