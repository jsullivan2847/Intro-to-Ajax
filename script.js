//How to request data from an API using JavaScript and JQuery

//There are many ways to do this

//1.jQuery $.ajax() function
//2.The Browser's fetch{} function
//3.Axios....http client library

//variables
//const $allP = $("p");
const $title = $("#title");
const $year = $("#year");
const $rated = $("#rated");
const $poster = $('#poster');
const $input = $('input[type="text"]');
const url = "http://www.omdbapi.com/?apikey=1d3e34e8&t=";

//I do not understand this variable lol
let  movieData, userInput;


//Targets the input / submit buttons ("form")
//on click of submit button, run the HandleGetData function
 $("form").on("submit", HandleGetData)




//FUNCTIONS

function HandleGetData(event) {
  //prevents page from being refreshed
  event.preventDefault();
  //gets user input from input html element
  userInput = $input.val();

  $.ajax(url + userInput).then(function (data) {
    console.log('movie data ready');
    movieData = data;
    render();
    },
    function (error) {
      console.log("bad request: ");
      //console.log(error);
    })
}

//display data called once data is retrieved in
// handle data
function render() {
  $poster.attr('src','');
  $title.text(movieData.Title);
  $year.text(movieData.Year);
  $rated.text(movieData.Rated);
  $poster.attr('src',movieData.Poster);
  //$poster.(movieData.Poster);
}

//HandleGetData();

