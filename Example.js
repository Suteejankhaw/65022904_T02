function submitForm() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var dob = document.getElementById("dob").value;
    var language = document.getElementById("language").value;
var result = document.getElementById("result");
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }

   
    if(!name){
      var error = document.createElement("h1");
      error.innerHTML = "Insert Name";
      error.style.color = "red";
      result.appendChild(error);
    }
    if(!surname){
      var error = document.createElement("h1");
      error.innerHTML = "Insert Surname";
      error.style.color = "red";
      result.appendChild(error);
    }
    if(!dob){
      var error = document.createElement("h1");
      error.innerHTML = "Insert Birth date";
      error.style.color = "red";
      result.appendChild(error);
    }
    if(!language){
      var error = document.createElement("h1");
      error.innerHTML = "Select Language";
      error.style.color = "red";
      result.appendChild(error);
    
    }else{
      var result = document.createElement("h1");
      result.innerHTML = "" + name + "," + surname + "," + dob + "," + language;
      result.style.color = "green";
      document.getElementById("result").appendChild(result);
    }
  }
    var result = document.createElement("h1");
    result.innerHTML = "" + name + "," + surname + "," + dob + "" + language;
    result.style.color = "green";
    document.getElementById("result").appendChild(result);
