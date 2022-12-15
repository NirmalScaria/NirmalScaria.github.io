var logosContainer = document.getElementById('logos');
for (var i = 0; i < logosContainer.children.length; i++) {
    var logo = logosContainer.children[i];
    if (logo.classList.contains('verticalLine')) {
        continue;
    }
    logo.addEventListener('mouseover', function () {
        removeHoverEffect()
        this.classList.add('bordercontainerselected');
        selectLogo(this.id);
    });
}
setskillcontentdummyheight();
function removeHoverEffect() {
    for (var i = 0; i < logosContainer.children.length; i++) {
        var logo = logosContainer.children[i];
        logo.classList.remove('bordercontainerselected');
    }
}
function selectLogo(logoId) {
    var skillcontents = document.getElementById('skillcontents');
    for (var i = 0; i < skillcontents.children.length - 1; i++) {
        var content = skillcontents.children[i];
        content.classList.remove('showncontent');
        content.classList.add('hiddencontent');
    }
    var newContentId = 'content' + logoId.substring(4);
    var newContent = document.getElementById(newContentId);
    newContent.classList.add('showncontent');
    newContent.classList.remove('hiddencontent');
    // setskillcontentdummyheight();
}

function setskillcontentdummyheight() {
    var showncontent = document.getElementsByClassName('showncontent')[0];
    var skillcontentdummy = document.getElementById('skillcontentdummy');
    skillcontentdummy.style.height = showncontent.offsetHeight + 'px';
}

function setWidth() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var legitgraphimage = document.getElementById('legitgraphimage');
    legitgraphimage.style.width = (screenWidth / 2) + 'px';
}

function showLegitGraph() {
    var projectlegitgraphleft = document.getElementById('projectlegitgraphleft');
    projectlegitgraphleft.classList.remove('projectlegitgraphlefthidden');
    projectlegitgraphleft.classList.add('projectlegitgraphleft');
    var projectlegitgraphright = document.getElementById('projectlegitgraphright');
    projectlegitgraphright.classList.remove('projectlegitgraphrighthidden');
    projectlegitgraphright.classList.add('projectlegitgraphright');
}

function hideLegitGraph() {
    var projectlegitgraphleft = document.getElementById('projectlegitgraphleft');
    projectlegitgraphleft.classList.remove('projectlegitgraphleft');
    projectlegitgraphleft.classList.add('projectlegitgraphlefthidden');
    var projectlegitgraphright = document.getElementById('projectlegitgraphright');
    projectlegitgraphright.classList.remove('projectlegitgraphright');
    projectlegitgraphright.classList.add('projectlegitgraphrighthidden');
}

function showLabelMarker() {
    var projectlabelmarkerleft = document.getElementById('projectlabelmarkerleft');
    projectlabelmarkerleft.classList.remove('projectlabelmarkerhidden');
    projectlabelmarkerleft.classList.add('projectlabelmarker');
    var projectlabelmarkerright = document.getElementById('projectlabelmarkerright');
    projectlabelmarkerright.classList.remove('projectlabelmarkerrighthidden');
    projectlabelmarkerright.classList.add('projectlabelmarkerright');
    var labelmarkervideo = document.getElementById("labelmarkervideo");
    labelmarkervideo.style.marginLeft = 0;
    labelmarkervideo.style.opacity = 1;
    labelmarkervideo.style.height = "120%";

}
function hideLabelMarker() {
    var projectlabelmarkerleft = document.getElementById('projectlabelmarkerleft');
    projectlabelmarkerleft.classList.remove('projectlabelmarker');
    projectlabelmarkerleft.classList.add('projectlabelmarkerhidden');
    var projectlabelmarkerright = document.getElementById('projectlabelmarkerright');
    projectlabelmarkerright.classList.remove('projectlabelmarkerright');
    projectlabelmarkerright.classList.add('projectlabelmarkerrighthidden');
    var labelmarkervideo = document.getElementById("labelmarkervideo");
    labelmarkervideo.style.opacity = 0;
    labelmarkervideo.style.height = "60%";
}
setWidth();
var presentProject = 0;
function previousproject() {
    if (presentProject == 0) {
        setTimeout(hideLegitGraph, 000);
        setTimeout(showLabelMarker, 000);
        var labelmarkervideo = document.getElementById("labelmarkervideo");
        labelmarkervideo.play();
        presentProject = 1;
    }
    else if (presentProject == 1) {
        hideLabelMarker();
        showLegitGraph();
        presentProject = 0;
    }
}
function nextproject() {
    if (presentProject == 0) {
        setTimeout(hideLegitGraph, 000);
        setTimeout(showLabelMarker, 000);
        var labelmarkervideo = document.getElementById("labelmarkervideo");
        labelmarkervideo.play();
        presentProject = 1;
    }
    else if (presentProject == 1) {
        hideLabelMarker();
        showLegitGraph();
        presentProject = 0;
    }
}
// reands();

function openlegitgraph() {
    var win = window.open("https://chrome.google.com/webstore/detail/le-git-graph-commits-grap/joggkdfebigddmaagckekihhfncdobff", '_blank');
    win.focus();
}

function openlabelmarker() {
    var win = window.open("https://github.com/NirmalScaria/label_marker", '_blank');
    win.focus();
}