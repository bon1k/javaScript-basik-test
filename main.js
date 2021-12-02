let userName = prompt("write name","");
if (userName == "admin") {
    let userPas = prompt("write pas","");
    if (userPas == "Я главный") {
        alert("hello!");
    } else if (userPas == "" || userPas == null){
        alert("cancel");
    } else{
        alert("Неверный пароль!!!");
        alert();
    }

}else if(userName == "" || userName == null){
    alert("cancel");
}else{
    alert("i dont know");
}
 