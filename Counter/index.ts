const links = document.querySelectorAll("a");
const title = document.querySelector("h3");
interface Counter{
    count : number,
}
let counter:Counter  = {
    count : 0 ,
}
const increase = (counter : Counter):void =>{
     counter.count += 1
    if (title){
        title.innerHTML = String(counter.count) ;
        title.setAttribute("style","color:green") ;
    }
    null;



}
const reset = (counter : Counter):void =>{
    counter.count = 0
    if (title){
        title.innerHTML = String(counter.count) ;
        title.setAttribute("style","color:black") ;
    }
    null;


}
const decrease = (counter : Counter):void =>{
    counter.count -= 1
    if (title){
        title.innerHTML = String(counter.count) ;
        title.setAttribute("style","color:red") ;
    }
    null;

}


links.forEach((entity : HTMLAnchorElement):void =>{
    entity.addEventListener("click",(e)=>{
        e.preventDefault()
        switch (e?.target?.getAttribute('class')){
            case "decrease" :
                decrease(counter)
                break
            case "reset":
                reset(counter)
                break
            case "increase":
                increase(counter)
                break
        }
    })
})
