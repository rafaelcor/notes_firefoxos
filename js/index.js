$(document).ready(function(){
    $('#add').click(function(){
       //$(location).attr('href','add_note.html');
       $.mobile.changePage ($("#edit_note"));
       $("#text").text('');
       $('#name_to_save').val('');
    });

    $('#back').click(function(){
       $.mobile.changePage ($("#home"));
       $('.cont').empty();
       for (i=0; i<=localStorage.length-1; i++){
				title = localStorage.key(i);
				note = localStorage.getItem(title);
				$('.cont').append("<div class='note_name'>" + title + "</div>");
	   }

       $('.note_name').click(function(){
            $.mobile.changePage ($("#edit_note"));
            //$('#text').text(localStorage.getItem($(this).val()));
            $('#text').text(localStorage.getItem($(this).text()));
            console.log($(this).val());
            $('#name_to_save').val($(this).text());
        });

       $('.note_name').mouseover(function(){
           $(this).addClass('selected')
       });
       $('.note_name').mouseout(function(){
           $(this).removeClass('selected')
       });

    });

       //open add_note view with the note selected
    //localStorage.setItem(title, note);
    localStorage.setItem('hello', 'goodbye');

    for (i=0; i<=localStorage.length-1; i++){
				title = localStorage.key(i);
				note = localStorage.getItem(title);
				$('.cont').append("<div class='note_name'>" + title + "</div>");
	}

    $('.note_name').click(function(){
        $.mobile.changePage ($("#edit_note"));
        //$('#text').text(localStorage.getItem($(this).val()));
        $('#text').text(localStorage.getItem($(this).text()));
        console.log($(this).val());
        $('#name_to_save').val($(this).text());
    });

    $('#save_note').click(function(){
        localStorage.setItem($('#name_to_save').val(), $('#text').val());
    });

    $('.note_name').mouseover(function(){
        $(this).addClass('selected')
    });
    $('.note_name').mouseout(function(){
        $(this).removeClass('selected')
    });

});