import naja from "naja";
import LiveForm from "live-form-validation";
// import netteForms from "nette-forms";
import jQuery from "jquery";
/*import jupload from "jquery-simple-upload";*/
import Popper from "popper.js";

window.$ = window.jQuery = jQuery;
window.Nette = LiveForm;
window.Popper = Popper

document.addEventListener("DOMContentLoaded", naja.initialize.bind(naja));

naja.addEventListener("interaction", (evt) => {
    evt.element.hasAttribute("data-confirm") &&
        !confirm(evt.element.getAttribute("data-confirm")) &&
        evt.preventDefault();
});

$(document).ready(function() {
    setTimeout(function () {
        $(".Flashes").fadeOut('slow');
    }, 5000);

    let $online = $('.NavbarLayout__onlineUsers');

    function show() {
        $($online).on('click', function () {
            $(this).toggleClass('show');
        });
    }

    show();

    $(function() {
        $(".Navbar-Menu").click(function() {
            $('.HeaderLayout__List').toggleClass('isActive');
            $('body').toggleClass('stop-scrolling').bind('touchmove', function(e){e.preventDefault()})
        });
        $('#menu').click(function(){
            $(this).toggleClass('open');
        });
    });

    $(document).ready(function() {
        // Click event for any anchor tag that's href starts with #
        $('a[href^="#"]').click(function(event) {

            // The id of the section we want to go to.
            var id = $(this).attr("href");

            // An offset to push the content down from the top.
            var offset = 60;

            // Our scroll target : the top position of the
            // section that has the id referenced by our href.
            var target = $(id).offset().top - offset;

            // The magic...smooth scrollin' goodness.
            $('html, body').animate({scrollTop:target}, 500);

            //prevent the page from jumping down to our section.
            event.preventDefault();
        });
    });

});

// dragElement(document.getElementById("onlineUsers"));
//
// function dragElement(elmnt) {
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//     if (document.getElementById(elmnt.id + "onlineUsers")) {
//         // if present, the header is where you move the DIV from:
//         document.getElementById(elmnt.id + "onlineUsers").onmousedown = dragMouseDown;
//     } else {
//         // otherwise, move the DIV from anywhere inside the DIV:
//         elmnt.onmousedown = dragMouseDown;
//     }
//
//     function dragMouseDown(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // get the mouse cursor position at startup:
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onmouseup = closeDragElement;
//         // call a function whenever the cursor moves:
//         document.onmousemove = elementDrag;
//     }
//
//     function elementDrag(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // calculate the new cursor position:
//         pos1 = pos3 - e.clientX;
//         pos2 = pos4 - e.clientY;
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         // set the element's new position:
//         elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//         elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//     }
//
//     function closeDragElement() {
//         // stop moving when mouse button is released:
//         document.onmouseup = null;
//         document.onmousemove = null;
//     }
// }

// $(document).ready(function () {
//     $("input[type=file]").change(function () {
//         $(this).simpleUpload("homepage/default?upload", {
//             allowedExts: [
//                 "mp3",
//                 "wav",
//                 "wave",
//                 "flac",
//                 "ogg",
//                 "oga",
//                 "aac",
//                 "mp4",
//                 "m4a",
//                 "aiff",
//                 "aif",
//                 "aifc",
//             ],
//             allowedTypes: [
//                 "audio/mpeg",
//                 "audio/mp3",
//                 "audio/x-mpeg",
//                 "audio/x-mp3",
//                 "audio/mpeg3",
//                 "audio/x-mpeg3",
//                 "audio/x-mpeg-3",
//                 "audio/mpg",
//                 "audio/x-mpg",
//                 "audio/x-mpegaudio",
//                 "audio/mpa",
//                 "audio/mpa-robust",
//                 "audio/wav",
//                 "audio/wave",
//                 "audio/x-wav",
//                 "audio/x-wave",
//                 "audio/x-pn-wav",
//                 "audio/vnd.wave",
//                 "audio/flac",
//                 "audio/x-flac",
//                 "audio/ogg",
//                 "audio/x-ogg",
//                 "application/ogg",
//                 "application/x-ogg",
//                 "audio/aac",
//                 "audio/aacp",
//                 "audio/x-aac",
//                 "application/octet-stream",
//                 "audio/mp4",
//                 "audio/m4a",
//                 "audio/x-m4a",
//                 "audio/mp4a",
//                 "audio/mp4a-latm",
//                 "audio/mpga",
//                 "audio/mpeg4-generic",
//                 "audio/x-m4a-lossless",
//                 "video/quicktime",
//                 "audio/aiff",
//                 "audio/x-aiff",
//                 "audio/x-aifc",
//                 "sound/aiff",
//                 "audio/x-pn-aiff",
//             ],
//             maxFileSize: 5000000000000, //5MB in bytes

//             start: function (file) {
//                 //upload started
//                 $("#filename").html(file.name);
//                 $("#progress").html("");
//                 $("#progressBar").width(0);
//             },

//             progress: function (progress) {
//                 //received progress
//                 $("#progress").html("Progress: " + Math.round(progress) + "%");
//                 $("#progressBar").width(progress + "%");
//             },

//             success: function (data) {
//                 //upload successful
//                 $("#progress").html(
//                     "Success!<br>Data: " + JSON.stringify(data)
//                 );
//             },

//             error: function (error) {
//                 //upload failed
//                 $("#progress").html(
//                     "Failure!<br>" + error.name + ": " + error.message
//                 );
//             },
//         });
//     });
// });

