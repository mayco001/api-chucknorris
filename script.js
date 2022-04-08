function randomChuck() {
    
    const method = "GET"
    const xhr = new XMLHttpRequest();
    const url = "https://api.chucknorris.io/jokes/random";

    xhr.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
      }
    };

    xhr.addEventListener("click", randomChuck)
    xhr.open(method, url, true);
    xhr.send();
  }

  function parseJson(json) {
    let valeu =  json["value"];
    let id = "ID: " + json["id"];
    let image = json["icon_url"];
    document.getElementById("app").innerHTML = valeu;
    document.getElementById("id").innerHTML = id;
    document.getElementById("image").innerHTML = image;
  }

  
 