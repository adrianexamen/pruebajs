window.onload = function(){
    this.clickBack();
};

function clickButton() {
    //Hide introduction div
    //.style.display="none" >> HIDEs
    //.style.display="block" >> SHOWs
    document.getElementById("divInput")
        .style.display="none";
    document.getElementById("divResult")
        .style.display="block";

    var result = document.getElementById("txtNumber").value;

    if (result.toString().trim() == "") {
        //DIVs, Ps... don't use value property to fill
        //a text area. Instead two different properties 
        //are used:
        //-innerText: for plain text
        //-innerHTML: for HTML-rich text
        document.getElementById("pResult").innerHTML=   
        "<B>Please, introduce a valid number</B>";

    } else {
        if (isNaN(result)) {
            document.getElementById("pResult")
            .innerText= 
            "You haven't introduced a number";
        } else {
            result = result * 2;
            document.getElementById("pResult")
            .innerText += result;
        }

    }
}

function clickBack(){
    document.getElementById("divInput")
        .style.display="block";
    document.getElementById("divResult")
        .style.display="none"; 
    document.getElementById("pResult")
        .innerText = "The result is: ";
    document.getElementById("txtNumber")
        .value = "";    

}