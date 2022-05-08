document.addEventListener("DOMContentLoaded",
function (event){
    
    document.querySelector("button").addEventListener("click",
    function sayHelloToMe(event){
        console.log(this);
        username = document.getElementById("name").value;
        
        newTittle = "<h1>Hello "+username+"</h1>";
        
    
        document.getElementById("tittle").innerHTML=newTittle;
        document.getElementById("name").value=" ";
        
    
    }
    );

    document.querySelector("html")
    .addEventListener("mousemove",
    function mousepoints(event){
        
        console.log("x :"+event.clientX);
        console.log("y :"+event.clientY);
        
    }
    );
    
}
);
