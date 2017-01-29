function openNav() {
    document.getElementById("mySidenav").style.width = "14em";
    document.getElementById("mySidenav").style.paddingLeft = "0.5em";
    /*document.getElementById("main").style.marginLeft = "250px";*/
    document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
    document.getElementById("mySidenav").style.paddingleft = "1em";
    var overlay = document.createElement("div");
    overlay.setAttribute("id", overlay);
    document.getElementById("main").style.display= "none";
     document.getElementById("closebtn").style.display= "flex";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
   document.getElementById("mySidenav").style.paddingLeft = "0em";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("main").style.display= "block";
      document.getElementById("closebtn").style.display= "none";
    

}