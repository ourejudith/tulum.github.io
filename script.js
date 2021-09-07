const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

document.onclick = function(e) {
    if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    }
}

toggle.onclick = function() {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}





$(".min-img img").click(function() {
    // On récupère la source de l'image sur laquelle on vient de cliquer
    var src = $(this).attr("src");
    //console.log(src);
    $(".min-img img").removeClass("active");
    $(this).addClass("active");
    // On donne à la grande image, l'URL de la petite image sur laquelle on vient de cliquer
    $(".main-img img").attr("src", src);
})