function getBottomP(j){
    return  document.querySelectorAll('.picture-container p')[j].getBoundingClientRect().y 
 }
 function getTopP(j){
    return  document.querySelectorAll('.picture-container p')[j].getBoundingClientRect().y + document.querySelectorAll('.picture-container p')[j].getBoundingClientRect().height
 }

 var j = 0;
 window.addEventListener('scroll', ()=>{
     
     
     try{
     var p = getBottomP(j)
    } catch(e){}
     
    //check to see if year reashed p
    if(p< document.querySelector('.drawing-year').getBoundingClientRect().height +200){
     gsap.to('.drawing-year' ,{opacity: 0.8, duration: 5, ease: 'slow'})    
 }
     if (p<0 || p > document.querySelector('.drawing-year').getBoundingClientRect().height +199){
         
           
         if(p<0)j++
     }
         
     
     let temp = j-1
     //check to change tracker if previous 
     if(j != 0 && getBottomP(temp) >0 ){
         j--
     }
        
     
     console.log("j: "+ j +" p: "+ parseInt(p))
    
 })