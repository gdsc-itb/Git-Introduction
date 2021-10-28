let films = [
    ["film-desc\images\1.jpg", ""],
    ["film-desc\images\2.jpg"],
    ["film-desc\images\3.jpg"],
    ["film-desc\images\4.jpg"],
    ["film-desc\images\5.jpg"],
    ["film-desc\images\6.jpg"],
    ["film-desc\images\7.jpg"],
    ["film-desc\images\8.jpg"],
    ["film-desc\images\9.jpg"],
    ["film-desc\images\10.jpg"],
]

// document.getElementById('img').innerHTML = films[0]

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");
var btn9 = document.getElementById("myBtn9");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal.style.display = "block";
  document.getElementById("textModal").innerHTML = `
  <b>Dune (2021)</b> <br>
  PG-13 | 155 min | Action, Adventure, Drama <br>
  <br>
  8.3  Rate this 74 Metascore <br>
  Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.
  <br><br>
  Director: Denis Villeneuve | Stars: Timothée Chalamet, Rebecca Ferguson, Zendaya, Oscar Isaac
  <br><br>
  Votes: 202,670
  `
}
btn2.onclick = function() {
  modal.style.display = "block";
  document.getElementById("textModal").innerHTML = `
  <b>Halloween Kills (2021) </b> <br>
  R | 105 min | Horror, Thriller <br>
  <br>
  5.8  Rate this 42 Metascore <br>
  The saga of Michael Myers and Laurie Strode continues in the next thrilling chapter of the Halloween series. <br> <br>

  Director: David Gordon Green | Stars: Jamie Lee Curtis, Judy Greer, Andi Matichak, James Jude Courtney <br><br>

  Votes: 39,828
  `
}
btn3.onclick = function() {
  modal.style.display = "block";
  document.getElementById("textModal").innerHTML = `
  <b>
  No Time to Die (2021)</b> <br>
  PG-13 | 163 min | Action, Adventure, Thriller <br> <br>

  7.6  Rate this 68 Metascore <br>
  James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology. <br><br>

  Director: Cary Joji Fukunaga | Stars: Daniel Craig, Ana de Armas, Rami Malek, Léa Seydoux <br><br>

  Votes: 129,569
  `
}
btn4.onclick = function() {
  modal.style.display = "block";
  document.getElementById("textModal").innerHTML = `
  <b>The Last Duel (2021)</b> <br>
  R | 152 min | Action, Drama, History <br><br>
  
  7.7  Rate this 67 Metascore <br>
  King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire by challenging him to a duel. <br><br>
  
  Director: Ridley Scott | Stars: Matt Damon, Adam Driver, Jodie Comer, Harriet Walter
  <br><br>
  Votes: 14,820
  `
}
btn5.onclick = function() {
  modal.style.display = "block";
  document.getElementById("textModal").innerHTML = `
  <b>Venom: Let There Be Carnage (2021)</b> <br>
  PG-13 | 97 min | Action, Adventure, Sci-Fi <br><br>

  6.3  Rate this 48 Metascore <br>
  Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution. <br><br>

  Director: Andy Serkis | Stars: Tom Hardy, Woody Harrelson, Michelle Williams, Naomie Harris <br><br>

  Votes: 44,549
  `
}
btn6.onclick = function() {
  modal.style.display = "block";
  document.getElementById("textModal").innerHTML = `
  <b> Free Guy (2021) </b> <br>
  PG-13 | 115 min | Action, Adventure, Comedy <br><br>

  7.2  Rate this 62 Metascore <br>
  A bank teller discovers that he's actually an NPC inside a brutal, open world video game. <br><br>

  Director: Shawn Levy | Stars: Ryan Reynolds, Jodie Comer, Taika Waititi, Lil Rel Howery <br><br>

  Votes: 171,647
  `
}
btn7.onclick = function() {
  modal.style.display = "block";
  document.getElementById("textModal").innerHTML = `
  <b>Eternals (2021)</b> <br>
  PG-13 | 157 min | Action, Adventure, Drama <br><br>

  5.9  Rate this 57 Metascore <br>
  The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations. <br><br>

  Director: Chloé Zhao | Stars: Gemma Chan, Richard Madden, Angelina Jolie, Salma Hayek <br><br>

  Votes: 1,798
  `
}
btn8.onclick = function() {
  modal.style.display = "block";
  document.getElementById("textModal").innerHTML = `
  <b>Night Teeth (2021)</b> <br>
  TV-14 | 107 min | Action, Crime, Drama <br><br>

  5.7  Rate this 44 Metascore <br>
  A college student moonlighting as a chauffeur picks up two mysterious women for a night of party-hopping across LA. But when he uncovers their bloodthirsty intentions - and their dangerous, shadowy underworld - he must fight to stay alive. <br><br>

  Director: Adam Randall | Stars: Jorge Lendeborg Jr., Debby Ryan, Lucy Fry, Raúl Castillo <br><br>

  Votes: 7,026
  `
}
btn9.onclick = function() {
  modal.style.display = "block";
  document.getElementById("textModal").innerHTML = `
  <b>The French Dispatch (2021)</b> <br>
  R | 108 min | Comedy, Drama, Romance <br><br>
  
  7.5  Rate this 75 Metascore <br>
  A love letter to journalists set in an outpost of an American newspaper in a fictional twentieth century French city that brings to life a collection of stories published in "The French Dispatch Magazine". <br><br>
  
  Director: Wes Anderson | Stars: Benicio Del Toro, Adrien Brody, Tilda Swinton, Léa Seydoux <br><br>
  
  Votes: 6,030
  `
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


