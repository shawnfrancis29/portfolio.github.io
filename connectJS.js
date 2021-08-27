const d = new Date();
document.getElementById("getTime").innerHTML += d.getFullYear();

function gotoBottom()
{
    var getBottom = document.getElementById("bottom");
    getBottom.scrollIntoView();
}
function myName()
{
    var getName = document.getElementById("empty");
    getName.scrollIntoView();
}
function gotoAboutME()
{
    var getAbout = document.getElementById("myServices");
    getAbout.scrollIntoView();
}

var header = document.getElementById("allTitles");
var sticky = header.offsetTop;

function myFunction()
{
    if(window.pageYOffset > sticky)
    {
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
}
window.onscroll = function() 
{
    myFunction()
};