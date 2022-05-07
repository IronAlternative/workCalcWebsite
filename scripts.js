var Plum;
var costConstructfee = 14;
var costConstrt = 500;
var fixFee = 50;

window.onload = function()  // sets focus on first box, submit button
{
    document.getElementById("resplum").focus();
    document.getElementById("sbmt").onclick = getValResPlumb;
    document.getElementById("sbmt2").onclick = getValCommPlumb;
};


function getValResPlumb() //gets the value in the input box and puts it in resPlum
{
    Plum = document.getElementById("resplum").value;

    document.getElementById("fixfee").value = "$" + resFeeCalc()[0];
    document.getElementById("confee").value = "$" + resFeeCalc()[1];
    document.getElementById("fee").value = "$" + resFeeCalc()[2];
    document.getElementById("mainFixfee").value = "$" + (resFeeCalc()[0] * 2);
    document.getElementById("mainconfee").value = "$" + (resFeeCalc()[1] * 2);
    document.getElementById("mainfee").value = "$" + (resFeeCalc()[2] * 2);

};

function getValCommPlumb(){
    Plum = document.getElementById("complum").value;
    document.getElementById("fixfeecomm").value = "$" + (resFeeCalc(1)[0]);
    document.getElementById("confeecomm").value = "$" + resFeeCalc(1)[1];
    document.getElementById("feecomm").value = "$" + resFeeCalc(1)[2];
    document.getElementById("mainfixfeecomm").value = "$" + (resFeeCalc(1)[0] * 2);
    document.getElementById("mainconfeecomm").value = "$" + (resFeeCalc(1)[1] * 2);
    document.getElementById("mainfeecomm").value = "$" + (resFeeCalc(1)[2] * 2);


};

function resFeeCalc(comm) //calculates the fees and returns as array 
{
    if (Plum != 0){
        var conFee = Math.ceil(((Plum * costConstrt + 500) / 1000)) * costConstructfee; // calculates the cost of construction the 500 is for the first fixture being $1000 cost

        if (comm != 1){
            var fixtureFee = Plum * fixFee; //calculates the fee for the fixtures for residential
        } else{
            fixtureFee = Plum * fixFee + 50 //for commercial with an extra 50 for the first fixture
        }
        var totalFee = conFee + fixtureFee; //total fee
    } else{
        return [0, 0, 0]
    }
    return [fixtureFee, conFee, totalFee];
};

