const search = document.getElementById("search")
const result  = document.getElementById("result")

search.addEventListener("keyup", ({key}) => {
    let searchValue = search.value
    if (searchValue != ""){
      if(key === "Enter"){
        callApi(searchValue)
      }

    }else{
      console.log("vous ne pouvez point entrer une valeur null-")
    }
})


callApi = async (param) => {
  await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+ param)
  .then(function (response) {
      if(response.data !==  null){
    
        FormatData(response.data.meals)
      }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    console.log("nous traitons votre demande")
  });
}


FormatData = (data) => {

    result.innerHTML =   data.map((datas) => 

      `
      <h2>${datas.idMeal}</h2>

      `
  

     
    ).join("")
  }
