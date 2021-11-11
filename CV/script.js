$(document).ready(function($) {
    $(document).on('submit', '#submit-form', function(event) {
      event.preventDefault();
    });
  });

  $(document).ready(function () {
    var fileTypes = ['jpg', 'jpeg', 'png'];  //acceptable file types
    $("input:file").change(function (evt) {
        var parentEl = $(this).parent();
        
        var tgt = evt.target || window.event.srcElement,
                        files = tgt.files;

        // FileReader support
        if (FileReader && files && files.length) {
            var fr = new FileReader();
            var extension = files[0].name.split('.').pop().toLowerCase(); 
            fr.onload = function (e) {
                success = fileTypes.indexOf(extension) > -1;
                if(success){
                    $(parentEl).append('<img src="' + fr.result + '" class="preview" style="width: 200px; height: 200px; position: absolute; top:-1px; right:-1px"/>');}
            }
            fr.onloadend = function(e){
                console.debug("Load End");
            }
            fr.readAsDataURL(files[0]);
        }   
    });
});

var j=0;

function myPrint(){
    if (j == 0) {
        j = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 60);
        var load=false;
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                j = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                load=elem.style.width;
            }
     
            if(load==='100%'){
                $(".attr").css("display","none");
                $(".input").css("border","none");
                $("#fullName").css("font-size","1em")
                $("#fname").css("font-weight","bold")
                $("#duty").css("border","none")
                var currentJob=document.getElementById('currentWork');
                if (currentJob.checked===true){
                    $('#currentWork').show();
                }else{
                    $('#currentWork').hide();
                }
                window.print();
            }
        }
    }
}

var i = 0;
function myView() {
    if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 60);
    var load=false;
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = width + "%";
            load=elem.style.width;
        }
 
        if(load==='100%'){
            $(".attr").css("display","none");
            $(".input").css("border","none");
            $("#fullName").css("font-size","1em")
            $("#fname").css("font-weight","bold")
            $("#duty").css("border","none")
            var currentJob=document.getElementById('currentWork');
            if (currentJob.checked===true){
                $('#currentWork').show();
                $('#current').show();
            }else{
                $('#currentWork').hide();
                $('#current').hide();
            }
        }
    }
}

//   $(".attr").css("display","none");
//     $(".input").css("border","none");
//     $("#fullName").css("font-size","1em")
//     $("#fname").css("font-weight","bold")
//     $("#duty").css("border","none")
//     var currentJob=document.getElementById('currentWork');
//     if (currentJob.checked===true){
//         $('#currentWork').show();
//         $('#current').show();
//     }else{
//         $('#currentWork').hide();
//         $('#current').hide();
//     }
}

// function myView(){

//     $(".attr").css("display","none");
//     $(".input").css("border","none");
//     $("#fullName").css("font-size","1em")
//     $("#fname").css("font-weight","bold")
//     $("#duty").css("border","none")
//     var currentJob=document.getElementById('currentWork');
//     if (currentJob.checked===true){
//         $('#currentWork').show();
//         $('#current').show();
//     }else{
//         $('#currentWork').hide();
//         $('#current').hide();
//     }
// }

function myAdd(){
    let copy=$("#education").clone()
    $("#educationContainer").append(copy)
}

function myDelete(){
    let last=$("#education:last-Child").last()
    last.remove()
}

function PresentJob(){
    $('#dateEnd1').show();
    $('.end1').show();
    var currentJob=document.getElementById('currentWork');
    console.log(currentJob.checked)
    if (currentJob.checked===true){
      $('#dateEnd1').hide();
      $('.end1').hide();
    }
  }

function myAdd1(){
    let copy=$("#work").clone()
    $("#workContainer").append(copy)
}

function myDelete1(){
    let last=$("#work:last-Child").last()
    last.remove()
}

function myAdd2(){
    let copy=$("#referance").clone()
    $("#referanceContainer").append(copy)
}

function myDelete2(){
    let last=$("#referance:last-Child").last()
    last.remove()
}

//   PresentJob();
//   $(window).on("index", PresentJob());

$("#form").submit(function(e) {
    e.preventDefault();
});