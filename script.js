//How to request data from an API using JavaScript and JQuery

//There are many ways to do this

//1.jQuery $.ajax() function
//2.The Browser's fetch{} function
//3.Axios....http client library
const $title = $("#title");
const $year = $("#year");
const $rated = $("#rated");
const $input = $('input[type="text"]');

$("form").on("submit", HandleGetData);

const url = "http://www.omdbapi.com/?apikey=1d3e34e8&";

function HandleGetData(event) {
  //prevents page from being refreshed
  event.preventDefault();
  //gets user input from input html element
  userInput = $input.val();

  $.ajax(url).then(
    function (data) {
      data = movieData;
      render(data);
    },
    function (error) {
      console.log("bad request: ", error);
      console.log(error);
    }
  );
}

function render() {
  $title.text(movieData.Title);
  $year.text(movieData.Year);
  $rated.text(movieData.Rated);
}

//console.log($.ajax(url))
