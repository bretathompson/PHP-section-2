tinymce.init({selector:'textarea'});

$(document).ready(function() {

    $('#selectAllBoxes').click(function(event){

        if(this.checked) {

            $('.checkBoxes').each(function(){

                this.checked = true;

            });
        } else {
            $('.checkBoxes').each(function(){

                this.checked = false;

    });
}
   //this may not go here. section 21 176 or 187
    $('#summernote').summernote({
        height: 200
    });

    var div_box = "<div id='load-screen'><div id='loading'></div></div>";
    $("body").prepend(div_box);

    $('#load-screen').delay(700).fadeOut(600, function(){
        $(this).remove();
    })

  });

});

function loadUsersOnline() {

 $.get("functions.php?onlineusers=result", function(data) {
    $(".usersonline").text(data);
    
 });

 }

 setInterval(function() {

 },500);

 loadUsersOnline();

