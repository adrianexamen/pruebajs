function clickButton() {
    var result = document.getElementById("txtNumber").value;

    if (result.toString().trim() == "") {
        console.log("Please, introduce a valid number");

    } else {
        if (isNaN(result)) {
            console.log("You haven't introduced a number");
        } else {
            result = result * 2;
            console.log(result);
        }

    }







}