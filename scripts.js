var resPlum;
var costConstructfee = 14;
var costConstrt = 500;
var fixFee = 50;
//test
window.onload = function()  // sets focus on first box, submit button
{
    document.getElementById("resplum").focus();
    document.getElementById("sbmt").onclick = getValResPlumb;
};


function getValResPlumb() //gets the value in the input box and puts it in resPlum
{
    resPlum = document.getElementById("resplum").value;

    document.getElementById("fixfee").value = "$" + resFeeCalc()[0];
    document.getElementById("confee").value = "$" + resFeeCalc()[1];
    document.getElementById("fee").value = "$" + resFeeCalc()[2];
    document.getElementById("mainFixfee").value = "$" + (resFeeCalc()[0] * 2);
    document.getElementById("mainconfee").value = "$" + (resFeeCalc()[1] * 2);
    document.getElementById("mainfee").value = "$" + (resFeeCalc()[2] * 2);

};

function resFeeCalc() //calculates the fees and returns as array 
{
    if (resPlum != 0){
        var fixtureFee = resPlum * fixFee; //calculates the fee for the fixtures
        var conFee = Math.ceil(((resPlum * costConstrt + 500) / 1000)) * costConstructfee; // calculates the cost of construction the 500 is for the first fixture being $1000 cost
        var totalFee = conFee + fixtureFee; //total fee

    } else{
        return [0, 0, 0]
    }
    return [fixtureFee, conFee, totalFee];
};

