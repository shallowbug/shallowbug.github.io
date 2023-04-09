/* get 3d items from JSON */
class ThreeD {
    async workItems() {
        try {
            let result = await fetch('./3d.json')
            let data = await result.json()
           // return data
            
           /* destructuring data */ 
         let workItems = data.threeD.threeDlist
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

document.addEventListener("DOMContentLoaded", ()=>{
    const work  = new ThreeD()
    const display = new Display()
    const listPlace = document.getElementById("threeDlist")

    work.workItems().then(work => display.displayBasket(work, listPlace))
})