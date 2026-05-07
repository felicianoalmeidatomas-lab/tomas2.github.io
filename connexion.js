function connexion(){
  let status="non-connecté"
  let username=prompt("Quel est ton identifiant?")
  let password=prompt("Quel est ton mot de passe?")

//Tomas

if (username==="Tomas" && password==="Tomaslegrand12@"){
    status="connecté"
    alert("Authentification réussie")
    alert("Tu es de niveau 5 et Inter")


//Nathan
else if (username==="Nathan" && password==="Nathan2011"){
status="connecté"
alert("Authentification réussie")
alert("Tu es de niveau 3")  
}
  
  
  if (status==="connecté"){
      let choix=prompt("Que souhaites tu faire:Voir des rapports de police(1)(en fonction de ton niveau,Voir les infos d'un utilisateur(2)")
    
    if (choix==="1"){
      
      let rapp=prompt("Quel rapport:La Fin des Families(Niveau 1)(1),Galactus et Avengers?(Niveau 4)(2)")
      
      if (rapp==="1"){
          
          alert("Le président de Fantasia s'est infiltré dans son ancien gang nommé Families,braqué une banque et placé l'argent dans leurs QG,la police a intercepté l'argent et le tribunal judiciaire a laissé 2 choix à la chef du gang:abandonner le gang ou etre en prison à vie,elle a choisi d'abandonner le gang")
      
      }

      else if (rapp==="2"){
      
      alert("Le chef des Avengers a fait apparaitre un Galactus pour évaluer la menace et Galactus a détruit des batiments du pays,ils ont réussi à le tuer mais après la destruction")
      
      }
    }

  
    
  else if (choix==="2"){
    
    let user=prompt("Quel utilisateur:001,002(2),003,004,005")
    
    if (user==="001"){
      
      alert("Il s'appelle Tomas,est président,ingénieur,n'est pas recherché,n'a pas de casier et a une maison avec assurance")
    
    }
    
    else{
      
      if (user==="002"){
        
        alert("Il s'appelle Maxime,est Vice-président,ingénieur,n'est pas recherché et a une maison sans assurance")
      
      }
      
     
    }
  }
  }
}
}
