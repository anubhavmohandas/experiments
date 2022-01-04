function calc(opt){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out;
    if(opt == "add"){
        out = `Sum is ${Number(a)+Number(b)}`;
    }else if(opt == "sub"){
        out = `Sub is ${Number(a)-Number(b)}`;
    }else if(opt == "multiply"){
        out = `Multiplication is ${Number(a)*Number(b)}`;
    }else{
        out = `Division is ${Number(a)/Number(b)}`;
    }
    document.getElementById("output").innerText=out
}