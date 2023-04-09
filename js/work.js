/* get work items from JSON */
class Work {
    async workItems() {
        try {
            let result = await fetch('/js/work.json')
            let data = await result.json()
           // return data
            
           /* destructuring data */ 
         let workItems = data.work.projectList
            workItems = workItems.map(item =>{
            const pin = item.pin
            const{title,shortDesc,tech,cat,role,img} = item.project
              
            return {pin,title,shortDesc,tech,cat,role,img}
            })
            return workItems 
            
        } catch (error) {
            console.log(error)
        }
    }
}

/* Display stuff from the work */
class Display {
    displayBasket(work, listPlace) {
        let result = ""
        work.forEach((item)=>{
        result += `
        <li class="card pin${item.pin}">

            <div class="title">${item.title}</div>

            <img src="/img/work/${item.img}" />

            <div class="meta cat">
                <div class="dataTitle">Category:</div>
                <div class="data">${item.cat}</div>
            </div>

            <div class="meta tech">
                <div class="dataTitle">Technology:</div>
                <div class="data">${item.tech}</div>
            </div>

            <div class="hidden">${item.role}</div>

            <div class="hidden">${item.shortDesc}</div>
        </li>
        `})
        listPlace.innerHTML = result;
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    const work  = new Work()
    const display = new Display()
    const listPlace = document.getElementById("workList")

    work.workItems().then(work => display.displayBasket(work, listPlace))
})