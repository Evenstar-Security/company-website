function instructors_page() {
    document.getElementById("nav_link_home").className = "nav-link";
    document.getElementById("nav_link_instructors").className = "nav-link active";
}

function home_page() {
    document.getElementById("nav_link_home").className = "nav-link active";
    document.getElementById("nav_link_instructors").className = "nav-link"; 
    //var page_width = self.innerWidth;
    //document.getElementById("palo_icon").style.width = "200px";   
}