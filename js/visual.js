/* get visual items from JSON */
class Visual {
    async visualItems() {
        try {
            let result = await fetch('/js/visual.json')
            let data = await result.json()
           // return data
            
           /* destructuring data */ 
         let visualItems = data.visual.visualList
            visualItems = visualItems.map(item =>{
            const pin = item.pin
            const{title,shortDesc,tech,cat,role,img} = item.project
              
            return {pin,title,shortDesc,tech,cat,role,img}
            })
            return visualItems 
            
        } catch (error) {
            console.log(error)
        }
    }
}

/* Display stuff from visual */
class VDisplay {
    displayBasket(vWork, vListPlace) {
        let result = ""
        vWork.forEach((item)=>{
        result += `
        <li class="card pin${item.pin}">

            <div class="title">${item.title}</div>

            <img src="/img/vis/${item.img}" />

            <div class="meta tech">
                <div class="dataTitle">Tools:</div>
                <div class="data">${item.tech}</div>
            </div>

            <div class="meta desc no-border">
                <span>${item.shortDesc}</span>
            </div>

            <div class="hidden">${item.role}</div>

            <div class="hidden">${item.shortDesc}</div>
        </li>
        `})
        vListPlace.innerHTML = result;
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    const vWork  = new Visual()
    const vDisplay = new VDisplay()
    const vListPlace = document.getElementById("vWorkList")

    vWork.visualItems().then(vWork => vDisplay.displayBasket(vWork, vListPlace))
})