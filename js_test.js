//javascripit
function submit(){
    var name=document.getElementById("name").value;
    var mobileCheck=document.getElementById("mobile").value;
    var string=mobileCheck.length;
    var mobile=parseInt(document.getElementById("mobile").value);
    console.log(Number(name));
    var test=hello(mobile);
    console.log(test);
    console.log(name);
    console.log(mobile);
    var data =check(name,mobile,string,test);
    if(data!=-1){
        authen(name,mobile,string);
}
}

function hello(mobile){
    if(isNaN(mobile)){
        console.log("enter nan function");
        return -1;
    }else {
        return 1;
    }
} 

function check(name,mobile,string,test){
    if( name.length === 0 && test ==-1){
        console.log("Entered Both empty field function");
        document.getElementById("result").style.color="red";
        document.getElementById("name").style.border="1px solid red";
        document.getElementById("mobile").style.border="1px solid red";
        document.getElementById("result").innerHTML=("Both Field cant be empty");
        return -1;
    }else if(name.length === 0){
        console.log("Entered name empty field function");
        document.getElementById("sn").style.color="red";
        document.getElementById("name").style.border="1px solid red";
        document.getElementById("sn").innerHTML=("Name Field cant be empty");
        document.getElementById("result").style.color="red";
        document.getElementById("result").innerHTML=("Error");
    return -1;
    }else if(string.length === 0){
        console.log("Entered Mobile empty field function");
        document.getElementById("sm").style.color="red";
        document.getElementById("mobile").style.border="1px solid red";
        document.getElementById("sm").innerHTML=("mobile Field cant be empty");
        document.getElementById("result").style.color="red";
        document.getElementById("result").innerHTML=("Error");
        console.log("entered check function");
        return -1;
    }
}


function authen(name,mobile,string){
    if (isNaN(mobile)){
        console.log("Number should be in int format")
        document.getElementById("sm").style.color="red";
        document.getElementById("name").style.border="1px solid black";
        document.getElementById("mobile").style.border="1px solid red";
        document.getElementById("sm").innerHTML=("Wrong format");
        document.getElementById("result").style.color="red";
        document.getElementById("result").innerHTML=("Error");
    }else if(string != 10){
        console.log("Number not 10 digits");
        document.getElementById("sm").style.color="red";
        document.getElementById("mobile").style.border="1px solid red";
        document.getElementById("sm").innerHTML=("Mobile number should be of 10 digits");
        document.getElementById("result").style.color="red";
        document.getElementById("result").innerHTML=("Error");
    }else if(Number(name)){
        console.log("Name should be in string format");
        document.getElementById("sn").style.color="red";
        document.getElementById("name").style.border="1px solid red";
        document.getElementById("sn").innerHTML=("Name should be in string format");
        document.getElementById("sm").innerHTML=("");
        document.getElementById("mobile").style.border="1px solid black";
    }else if(!Number(name) && string==10){
       document.getElementById("sn").style.color="Green";
        document.getElementById("name").style.border="1px solid Green";
        document.getElementById("sn").innerHTML=("Perfect");
        document.getElementById("sm").style.color="Green";
        document.getElementById("mobile").style.border="1px solid Green";
        document.getElementById("sm").innerHTML=("Perfect");
        display(name,mobile);
    }
        
}


function display(name,mobile){
    document.getElementById("result").style.color="Green";
    document.getElementById("result").innerHTML=("Hello "+name+ " your mobile number is "+mobile);
}