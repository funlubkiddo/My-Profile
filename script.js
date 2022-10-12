var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
for(var i = 0 ; i < navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click' , function(){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);

        console.log(targetsection);
    });
}
