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
    displayBasket(work, listPlace, moreWork) {
        let result = ""
        let i=0;
        work.forEach((item)=>{
            i++
        result += `
        <li class="card pin${item.pin} ${i>6 ? 'hide hidden' : ''} ${i>3 ? 'mHidden' : ''}" >

            <div class="title">${item.title}</div>

            <div class="cardImg"><img src="/img/work/${item.img}" /></div>

            <div class="meta cat">
                <div class="dataTitle">Category:</div>
                <div class="data">${item.cat}</div>
            </div>

            <div class="meta tech no-border">
                <div class="dataTitle">Technology:</div>
                <div class="data">${item.tech}</div>
            </div>

            <div class="hidden">${item.role}</div>

            <div class="hidden">${item.shortDesc}</div>
        </li>
        `})
        const moreButton = document.createElement("div");
        moreButton.classList.add("moreBreak");
        moreButton.innerHTML = `
                <span class="moreButton" onclick="moreShow('#work')">Load more <small>(${i-6})</small> <i class="fa-solid fa-arrow-down fa-xs"></i></span>
                <span class="lessButton hidden" onclick="lessShow('#work')">Load less <i class="fa-solid fa-arrow-up fa-xs"></i></span>`;

        moreWork.appendChild(moreButton);
        listPlace.innerHTML = result;
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    const work  = new Work()
    const display = new Display()
    const listPlace = document.getElementById("workList")
    const moreWork = document.getElementById("work")

    work.workItems().then(work => display.displayBasket(work, listPlace, moreWork))
})