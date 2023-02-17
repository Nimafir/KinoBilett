function submit_click() {
    var inputs = [document.getElementById("input1").value, 
                  document.getElementById("input2").value, 
                  document.getElementById("input3").value, 
                  document.getElementById("input4").value,
                  document.getElementById("input5").value];
    for (var i = 0; i < inputs.length; i++){
        if (inputs[i] == ""){
            document.getElementById("input" + (i+1) + "_error").innerHTML = "Fyll ut dette feltet.";
        }
        else{
            document.getElementById("input" + (i+1) + "_error").innerHTML = "";
        }
    }
}

function clearInputs() {
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
    document.getElementById("input3").value="";
    document.getElementById("input4").value="";
    document.getElementById("input5").value="";
    document.getElementById("select1").value="";
}