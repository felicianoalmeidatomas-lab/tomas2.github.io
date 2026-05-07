function connexion() {
  let status = "non-connecté";

  let username = prompt("Quel est ton identifiant ?");
  let password = prompt("Quel est ton mot de passe ?");

  // Tomas
  if (username === "Tomas" && password === "Sever") {
    status = "connecté";
    alert("Authentification réussie");
    alert("Tu es de niveau 5 et Inter");
  }

  // Nathan
  else if (username === "Nathan" && password === "Nathan2011") {
    status = "connecté";
    alert("Authentification réussie");
    alert("Tu es de niveau 3");
  }

 //Raphael
 if (username=="Raphael" && password==="Raphael1234"){
    status="connecté";
   alert("Authentification réussie");
   alert("Tu es de niveau 4");
 }

else if (username==="Maxime" && password==="Pixel2019@"){
  status="connecté";
  alert("Authentification réussie");
  alert("Tu es de niveau 5");

    if (status === "connecté") {
    let choix = prompt("Que souhaites-tu faire ?\n1: Voir des rapports de police\n2: Voir les infos d'un utilisateur");

    if (choix === "1") {

      let rapp = prompt("Quel rapport ?\n1: La Fin des Families (Niveau 1)\n2: Galactus et Avengers (Niveau 4)");

      if (rapp === "1") {
        alert("Le président de Fantasia s'est infiltré dans son ancien gang nommé Families, braqué une banque et placé l'argent dans leur QG. La police a intercepté l'argent et le tribunal a laissé 2 choix à la chef du gang : abandonner le gang ou aller en prison à vie. Elle a choisi d'abandonner le gang.");
      }

      else if (rapp === "2") {
        alert("Le chef des Avengers a fait apparaître un Galactus pour évaluer la menace. Galactus a détruit des bâtiments du pays. Ils ont réussi à le tuer mais après de grandes destructions.");
      }
    }

    else if (choix === "2") {

      let user = prompt("Quel utilisateur ?\n001, 002, 003, 004, 005");

      if (user === "001") {
        alert("Il s'appelle Tomas, est président, ingénieur, n'est pas recherché, n'a pas de casier et a une maison avec assurance.");
      }

      else if (user === "002") {
        alert("Il s'appelle Maxime, est vice-président, ingénieur, n'est pas recherché et a une maison sans assurance.");
      }

      else if (user === "003") {
        alert("Utilisateur 003 : données non disponibles.");
      }

      else if (user === "004") {
        alert("Utilisateur 004 : données non disponibles.");
      }

      else if (user === "005") {
        alert("Utilisateur 005 : données non disponibles.");
      }
    }
  }
}
