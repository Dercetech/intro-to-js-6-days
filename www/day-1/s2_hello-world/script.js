console.log("hello tout le monde")

document.body.append("vous êtes super!")

const resultat = confirm("Vraiment?");

if (resultat) {
  document.body.append("oui, vraiment")
}
else {
  document.body.append("en fait...")
}