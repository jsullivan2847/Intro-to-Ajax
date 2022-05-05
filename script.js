//How to request data from an API using JavaScript and JQuery

//There are many ways to do this

//1.jQuery $.ajax() function 
//2.The Browser's fetch{} function 
//3.Axios....http client library
const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');

const url = 'http://www.omdbapi.com/?apikey=1d3e34e8&t=Die+Hard'
 
function HandleGetData(){
    $.ajax(url).then(function(data){
        $title.text(data.Title);
        $year.text(data.Year);
        $rated.text(data.Rated);
    }, function(error){
        console.log('bad request: ', error)
        console.log(error);
    });
}

HandleGetData()





//console.log($.ajax(url))







