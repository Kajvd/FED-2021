var slideIndex = 1;                                                 // hier word een variabele aangemaakt genaamd slideIndex en die word gelijk gezet aan 1 
showSlides(slideIndex);                                             // hier word showSlides geroepen om de eerste afbeelding te laten zien

function plusSlides(n) {                                            // als er op de knop "volgende" of "vorige" geklikt word word deze functie uitgevoerd
  showSlides(slideIndex += n);                                      // hier word een slide laten zien op basis van het nummer van slideIndex en word er 1 bij toegevoegd of afgehaald
}

function currentSlide(n) {                                          // als er op een balletje word geklikt dan word deze functie uitgevoerd
  showSlides(slideIndex = n);                                       // hier word een slide laten zien op basis van het nummer van slideIndex
}

function showSlides(n) {                                                        // deze functie doet display: none; voor alle elementen die "carouselitems" als klasnaam hebben en doet display: block; het element wat "active" als klasnaam heeft.
  var i;
  var slides = document.getElementsByClassName("carouselitems");                // variabele slides = class naam carouselitems in html
  var balletjes = document.getElementsByClassName("bal");                       // variabele balletjes = class naam bal in html
  if (n > slides.length) {slideIndex = 1}                                       // als het nummer groter word dan de maximale slide lengte word hij naar 1 gezet
    if (n < 1) {slideIndex = slides.length}                                     // als de slideIndex kleiner is dan 1 word slideIndex gelijk aan de slides.length 
    for (i = 0; i < slides.length; i++) {                                       
      slides[i].style.display = "none";                                         // hier word een slide op display: none; gezet als hij niet gebruikt word
    }
    for (i = 0; i < balletjes.length; i++) {                                    
      balletjes[i].className = balletjes[i].className.replace(" active", "");   // hier word bij het veranderen van het getal ook de class active toegevoegd of weggehaald
    }
  slides[slideIndex-1].style.display = "block";                                 // hier word er een de display veranderd van display: none; naar display: block;
  balletjes[slideIndex-1].className += " active";                               // hier word er een class name aan toegevoegd die "active" heet
}







function openNav() {                                                // als er op het menu word geklikt gebeurd er "openNav" en speelt deze functie zich af.
  document.getElementById("mySidenav").style.width = "300px";       // de stijl van item "mySidenav" word veranderd naar 300px breed.
}

function closeNav() {                                               // als er op het kruisje in het menu word geklikt gebeurd er "closeNav" en speelt deze functie zich af.
  document.getElementById("mySidenav").style.width = "0";           // de stijl van item "mySidenav" word veranderd naar 0px breed.
}