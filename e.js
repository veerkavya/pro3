const h1=document.getElementById("hh");
const scrolbtn=document.getElementsByClassName("ab")[1];
const bt=document.getElementsByClassName("ab")[0];
const pc2=document.getElementsByClassName("pc2")[0];
let j=0;
scrolbtn.addEventListener("click",function(){
    pc2.scrollBy(100,0);
    console.log(0)
    j+=100;
   
    if(j>0){
        
        bt.classList.add("o1")
        bt.classList.remove("o0");
      
       
    }
     console.log(0)

})
bt.addEventListener("click",function(){
    pc2.scrollBy(-100,0);
    console.log(0)
    j-=100;
   
    if(j===100){
        
        bt.classList.add("o0")
        bt.classList.remove("o1");
      
       
    }
     console.log(0)

})
const scroll=["skills","passion","knowledge"];
var i=0;
setInterval(()=>{
   if(i==3){
       i=0;
   }
   h1.textContent=scroll[i];
   i+=1
  
        
    },1500)
    
