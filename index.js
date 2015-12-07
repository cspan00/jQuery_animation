
$("button").click(function(){

  //object of css values, time, function to call when done.

  $('.title').animate({'opacity': 1.0, 'fontSize': '30px'}, 1000, function(){console.log('done');})
    var timer = 0;

  playlist['results'].forEach(function(e,i){
    var classs = "song"+i;
    //add a unique id for every song in the dom
    $('#container').append('<div id='+classs+' class="dim">' +playlist['results'][i]['trackName']+ '</div>')
     var my_div = $('#' + classs);

    my_div.delay(timer).animate({"opacity": 1.0 }, 1000)
    timer += 100;

  });



});
