function check(){
    let random=Math.floor(Math.random() * 10);
    let name=document.querySelector("input").value;
    console.log(name);
    if(name!="" && name.length == random){
        document.querySelector("p").innerHTML=""+name +" you are best";
    }
    else if(name!="" && name.length < random){
        document.querySelector("p").innerHTML=""+name +" you are super ";
    }
    else if(name!="" && name.length > random){
        document.querySelector("p").innerHTML=""+name +" you are fantastic";
    }
    else if(name==""){
        document.querySelector("p").innerHTML="plz enter the name";
    }


}