function myFunction(x) {
   if (x.matches) { // If media query matches
      document.querySelector('h1').innerHTML = document.querySelector('h1').textContent 
   } else{
      document.querySelector('h1').innerHTML = "Art through Years<br> of Patience"
   }
    

 }
 
 var x = window.matchMedia("(max-width: 1500px)")
 myFunction(x) // Call listener function at run time
 x.addListener(myFunction) // Attach listener function on state changes

 var j = 0;
//  window.addEventListener('scroll', ()=>{
     
     
//      try{
//      var p = getBottomP(j)
//     } catch(e){}
     
//     //check to see if year reashed p
//     if(p< document.querySelector('.drawing-year').getBoundingClientRect().height +200){
//      gsap.to('.drawing-year' ,{opacity: 0, duration: 0.5, ease: 'slow'})    
//  }
//      if (p<0 || p > document.querySelector('.drawing-year').getBoundingClientRect().height +199){
//         gsap.to('.drawing-year' ,{opacity: 0.8, duration: 1, ease: 'slow'})   
           
//          if(p<0)j++
//      }
         
     
//      let temp = j-1
//      //check to change tracker if previous 
//      if(j != 0 && getBottomP(temp) >0 ){
//          j--
//      }
        
     
//      console.log("j: "+ j +" p: "+ parseInt(p))
    
//  })