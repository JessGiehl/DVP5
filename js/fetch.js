//function that submits search value with api to return results, prints to the DOM
function searchSubmit(){

  //variables for storing api string
  var url= 'http://localhost:5000/api';
  //https://www.giantbomb.com/api/search/?api_key=f41a22bcc19858b1a3b86fcd2f063e27da597091&format=json&query=\"metroid prime\"&resources=game

  //construct string and fetch response
  fetch(url)
    .then(function(response) {
      //turn response into a JSON object
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
        //create a string to store adjacentHTML
        var output = `<ul class="resultlist">`;

        for (var i = 0; i < myJson.results.length; i++) {
          output +=
          ` <li>
              <img src="${myJson.results[i].image.icon_url}">
              <h3>${myJson.results[i].name}</h3>
            </li>`;
        }
        output += `</ul>`;

        document.querySelector('h2').insertAdjacentHTML('afterend', output);
    })
    .catch(error => console.error(error));
}

var search = document.getElementById('search');
console.log(search);
//when form is submitted, run searchSubmit()
search.addEventListener("click", searchSubmit);
