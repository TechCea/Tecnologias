function ClearDisplay(){
    document.getElementById("display").value ="";
}
function appendToDisplay(value){
    document.getElementById("display").value += value;
}


$(document).ready(function(){
    
    $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", function (e) {

        var $this = $(this),
          label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if($this.val() === "") {
                label.removeClass("active highlight"); 
                } else {
                label.removeClass("highlight");   
                }   
        } else if (e.type === "focus") {
            if($this.val() === "") {
                label.removeClass("highlight"); 
            } 
            else if($this.val() !== "") {
                label.addClass("highlight");
            }
        }

    });

    $(".tab a").on("click", function (e) {

        e.preventDefault();

        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        target = $(this).attr("href");

        $(".contenido-tab > div").not(target).hide();

        $(target).fadeIn(600);

    });
    
});


const ratingContainer = document.querySelector('.rating');
let currentValue =0;
const limit = 5;

const html = Array.from(Array(limit)).map((item, i) => {
   return `<div class="item item-${i}" data-post="${i}"></div>`
});

ratingContainer.innerHTML = html.join("")

document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('mouseiver', e => {
        const pos = item.getAttribute("data-pos");
        for(let i = 0; i <= pos; i++){
            const square = document.querySelector(`.item-${i}`);
            if(!square.classList.contains('item-full')){
                square.classList.add('item-full');
            };
        }
    });
});


function recogerDatos(){
    let username = document.getElementById("username").value;
    let Email = document.getElementById("Email").value;
    let Mensaje = document.getElementById("Mensaje").value;


    let mensajeFinal ="El ciente se llama"+username+
    ", Email;"+Email+"y Nos dice"+Mensaje;

    console.log(mensajeFinal);
}