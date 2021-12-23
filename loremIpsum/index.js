const nbr  = document.getElementById("number")
const btn = document.getElementById("generate")
const texts = document.querySelector(".text")
const text =  [
    "lekjgdsjfgkdfgkldfkjgdfg",
    "dflsjdfksdflksdlflsdfsdfsd",
    "sdflsmdjfsdfsdf",
    "sldkfjhsjk,dfjosdlfsdf",
]




btn.addEventListener("click", (e) => {
    e.preventDefault()
    nvText = []
    compteur = 0
    let numbreParagraph  = nbr.value;
    if (numbreParagraph){
        text.forEach((element)=>{
            compteur++
            if (compteur <= numbreParagraph){
                nvText.push(element)
            }

        })
    }

    let displayText =  nvText.map((element) =>{

        return `
            <p>${element}</p>
        `
    }).join("")
    console.log(displayText)
    texts.innerHTML = displayText



})
