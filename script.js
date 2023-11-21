function valor(){
    var x = Number(document.getElementById("num1").value);
    var n= "";
    if(x>0){
        for (var i = 1; i <= x; i++) {
          var n= n+ "O número "+i+" é";
            if(i % 2==0){
                n=n + " par"+"<br>";
            }else{
                n=n + " ímpar"+"<br>";
                
            } document.getElementById("resultado").innerHTML =n; 
        }   
    }
}
