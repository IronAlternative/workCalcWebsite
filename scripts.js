var resPlum;
var costConstructfee = 14;
var costConstrt = 500;
var fixFee = 50;
var finalFee;

window.onload = function()
{
    document.getElementById("resplum").focus();
    document.getElementById("sbmt").onclick = getValResPlumb;
};

function getValResPlumb()
{
    resPlum = document.getElementById("resplum").value;
}

function resFeeCalc()
{
    var fixtureFee = resPlum * fixFee;
    var conFee = (resPlum * costConstrt) / 1000
}

