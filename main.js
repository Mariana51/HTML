function muestra_oculta(historia) {
    let div = document.getElementById(historia);
    if (div.style.display == "none"){ 
        div.style.display = "flex";
      } 
      else {
        div.style.display = "none";
      }
  }