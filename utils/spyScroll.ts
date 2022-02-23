export function spyScroll(callback:any){
    if(typeof window!== "undefined")   {
        const section= document.querySelectorAll("section")   
        section.forEach(el=>{
            const top=el.offsetTop;
            if(pageYOffset>=top-60){
                callback(el.getAttribute("id"))
            }
        })
        
    }
}