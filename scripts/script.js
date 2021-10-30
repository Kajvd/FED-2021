var hamburger = document.querySelector(".hamburger");       /* maakt een variabele van de geselecteerde class die in het html bestand staat. */ 
var navMenu = document.querySelector(".nav-menu");          /* maakt een variabele van de geselecteerde class die in het html bestand staat. */ 

hamburger.addEventListener("click", mobileMenu);            /* bij de event 'click' leest hij over een geklikt is op dit item, zo ja speelt de functie mobileMenu af */ 

function mobileMenu() {                                     /* hier word voor de functie mobileMenu geschreven wat er moet gebeuren */
    hamburger.classList.toggle("active");                   /* hier word hamburger "active" gezet en word er active geplakt achter de class zodat er dus een nieuwe class ontstaat waar in css nieuwe waardes aan vast kunnen zitten */
    navMenu.classList.toggle("active");                     /* hier word navMenu "active" gezet en word er active geplakt achter de class zodat er dus een nieuwe class ontstaat waar in css nieuwe waardes aan vast kunnen zitten */
}
