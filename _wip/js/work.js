/* get work items from JSON */
class Work {
    async workItems() {
        try {
            let result = await fetch('./work.json')
            let data = await result.json()
           // return data
            
           /* destructuring data */ 
         let workItems = data.work.projectList
            workItems = workItems.map(item =>{
            const pin = item.pin
            const{title,shortDesc,tech,role,img} = item.project
              
            return {pin,title,shortDesc,tech,role,img}
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
        console.log(work)
        console.log(listPlace)
        let result = ""
        work.forEach((item)=>{
        result += `
        <li>
        title: ${item.title} <br />
        pin: ${item.pin} <br />
        role: ${item.role} <br />
        tech : ${item.tech} <br />
        img : ${item.img} <br />
        shortDesc : ${item.shortDesc} <br />
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