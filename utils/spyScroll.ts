export function spyScroll(callback:any){
    if(typeof window!== "undefined")   {
        const section= document.querySelectorAll("section")   
        section.forEach(el=>{
            const top=el.offsetTop;
            if(scrollY>=top-150){
                callback(el.getAttribute("id"))
            }
        })
        
    }
}