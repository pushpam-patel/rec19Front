function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');

    filter = input.value.toUpperCase();
    li = [
    "19BCE2614",
    "19BEC0730",
    "18BIT0302",
     "19BCE2647",
    "19BEI0113",
    "18BME0843",
    "19BIT0316",
     "19BCB0045",
    "19BEC0662",
    "18BCE2474",
    "19BEC0435",
    "19BCE2636",
    "19BCE2253",
    "19BCE0833",
     "19BCT0016",
     "19BCE2269",
     "19BEC0785",
     "19BCE2606",
    "19BEI0115",
    "18BME2022",
     "19BCE2208",
    "18BCE2467",
    "19BEI0112",
     "19BEE0198",
    "19BEC0636",
    "19BCE2242",
    "19BCE2613",
    "18BCI0162",
    "19BCT0084",
    "18BCB0062",
    "18BCB0076",
    "19BCE0964",
    "19BCT0168",
    "19BEE0318",
    "18BCB0038",
    "19BCE2063",
    "18BEC0438",
    "19BEC0290",
    "19BCE2372",
    "19BCE2268",
    "19BEC0836",
    "19BEC0463",
    "18BCE2476",
    "19BCE2523",
    "19BCE2638",
    "19BCI0044",
    "19BCE0345"];
    
    let suc="Congratulations on becoming a part of IEEE-SSIT!!!";
    let fail="Sorry, you couldn't be a part of IEEE-SSIT"

    if (li.indexOf(filter) > -1) {
        //In the array!
        document.getElementById("result").innerHTML = suc;
        document.getElementById("result").style.border = "1px solid black";

    }
    else
    {
        document.getElementById("result").innerHTML = fail;
        document.getElementById("result").style.border = "1px solid black";
    }
    
        
    
}