const users = { "eni@gmail.com": "123a", "elion@gmail.com": "123b", "engjell@gmail.com": "123c" }


function validateData() {

  var password = document.getElementById('password').value
  var email = document.getElementById('email').value
  var charpassword = password.split("")
  var pin = document.getElementById('pin').value

  for (var key in users) {
    if (key == email) {
      alert("Ky email eshte i regjistruar. Ju lutemi shkurani nje email tjeter")
      return false
    }
  }

  if (pin > 9999 || pin < 1000) {
    alert("Ju keni shkruar gabim PINin. Rikujtim PIN eshte numer 4 shifror (1000-9999)")
    return false
  }

  if (password.length <= 5) {
    alert("Fjalekalimi juaj duhet te jete i gjate se paku 6 karaktere")
    return false
  }

  let count = 0
  for (let i = 0; i < charpassword.length; i++) {
    switch (charpassword[i]) {
      case "@":
      case "$":
      case "%":
      case "&":
      case "#":
        count++
        break;
      default:
        continue
    }
  }

  if (count < 2) {
    alert("Perdorni se paku 2 karaktere speciale ")
    return false
  }

}

var values = []
function getValue() {
  
  var dropdownlist = ["time", "Adresa"]
  for (var i =0; i<dropdownlist.length;i++) {
    var temp = document.getElementById(dropdownlist[i]).value;
    values.push(temp)
  }
  
  displayText(values)

}

function displayText(array){
  confirm("Konfirmoni qe ju deshironi qe ne oren :" +array[0]+" ne adresen :"+array[1]+" te pranoni porosine")
}