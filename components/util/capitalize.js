function capitalize(string){
    if(string == null){
        return "";
    }
    var final = "";
    for(var i = 1; i < string.length; i++){
        if(string.substring(i - 1, i) === " "){
            final += string.substring(i, i + 1).toUpperCase();
        }
        else{
            final += string.substring(i, i + 1);
        }
    }
    return string.substring(0, 1).toUpperCase() + final;
}

export default capitalize;