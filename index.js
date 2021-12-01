const search = document.getElementById("search")


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
  .then(function ({data}) {
      if(data !==  null){
        FormatData(data)
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
  data.map((datas) => {
      console.log(datas)
  })
}
