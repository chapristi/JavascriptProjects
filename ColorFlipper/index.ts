const simple  =  document.getElementById("menue-simple")
const hex =  document.getElementById("menue-hex")
const change  = document.getElementById("change")
const title = document.getElementById("title")
interface Data{
    choice : string
}
const data:Data = {
    choice  : "simple",
}
const colorSimple: Array<string> = ["green","red","purple","gray","yellow"]
const colorHexa : Array<string> = ["#00ff00","#FF0000","#800080","#808080","#ffff00"]
simple?.addEventListener("click" , (e:Event) :void => {
    e.preventDefault()
    if (data.choice !== "simple" ){
        data.choice = "simple"
    }
    console.log(data.choice)

},false)

hex?.addEventListener("click" , (e: Event) :void => {
    e.preventDefault()
    if (data.choice !== "hex" ){
        data.choice = "hex"
    }
    console.log(data.choice)


},false)

change?.addEventListener("click" , (e: Event) :void => {
    e.preventDefault()
    if (data.choice === "hex" ){
        const random = Math.floor(Math.random() * colorHexa.length);
        document.body.style.backgroundColor = colorHexa[random]
        // @ts-ignore
        title.innerHTML = colorHexa[random]

    }else {
        const random = Math.floor(Math.random() * colorSimple.length);
        document.body.style.backgroundColor = colorSimple[random]
        // @ts-ignore
        title.innerHTML = colorSimple[random]
    }
},false)
