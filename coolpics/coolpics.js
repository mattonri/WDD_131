document.addEventListener('DOMContentLoaded', function() {
    const buttonElement = document.getElementById('menu-button');
    const menuElement = document.getElementById('nav-bar-links');

    let isHidden = true
    buttonElement.addEventListener('click', function () {

        if(isHidden) {
            menuElement.classList.remove('hidden')
            isHidden = false
        } else {
            menuElement.classList.add('hidden')
            isHidden = true
        }
    });
});

function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    const eventElement = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    eventSrc = eventElement.src;
    eventSrcPart = eventSrc.split('-')[0];
    console.log(eventSrcPart);
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    newSrc = eventSrcPart + "-full.jpeg";
	// insert the viewerTemplate into the top of the body element
    htmltoinsert = "<div class=\"viewer\"> <button class=\"close-viewer\" id=\"close-viewer\">X</button> <img id=\"viewer-img\" src=\"" + newSrc + "\" alt=\"alt description\"></div>";
	document.body.insertAdjacentHTML("afterbegin", htmltoinsert);


	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    exitElement = document.getElementById('close-viewer');
    exitElement.addEventListener('click', function () {
        viewerElement = document.querySelector('.viewer');
        viewerElement.remove();
    });

}
const galleryItems = document.querySelectorAll('.gallery-figure')
galleryItems.forEach(function(element) {
    element.addEventListener("click", viewHandler);
})



// // This code turned out not to be necessary since the @media breakpoint overrules the code above anyway. But here it is so I don't lose points! :)
// function handleResize() {
//     const menuElement = document.getElementById('nav-bar-links');
//     if (window.innerWidth > 1000) {
//       menuElement.classList.remove("hide");
//     } else {
//       menuElement.classList.add("hide");
//     }
//   }
  
//   handleResize();
//   window.addEventListener("resize", handleResize);
