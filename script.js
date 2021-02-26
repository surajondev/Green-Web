var button = document.getElementById("btn")
var input = document.getElementById("text1")
var ul = document.getElementsByTagName("ul")[0]
var allData
var inputData

function changes(){
  inputData = input.value
}

button.addEventListener("click", function(){
  const url = `https://api.thegreenwebfoundation.org/greencheck/${inputData}`
  fetch(url)
    .then(response => response.json())
    .then(data => (
      document.getElementById("green").innerHTML=data.green
    ))
})