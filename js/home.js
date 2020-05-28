let links = document.getElementsByClassName("filter-menu-links");

function changeActiveLink(){
    for (let link of links){
        link.onclick = function(){
            for (let link of links){
                link.classList.remove("active");
            }
            link.classList.add("active");
        }
    }  
}

changeActiveLink();