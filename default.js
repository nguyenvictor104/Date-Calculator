let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


function calculateInput(tripID){
    const flightTo = parseInt(document.getElementById("flightTo_"+tripID).value);
    const carRental = parseInt(document.getElementById("carRental_"+tripID).value);
    const houseRental = parseInt(document.getElementById("houseRental_"+tripID).value);
    const flightBack = parseInt(document.getElementById("flightBack_"+tripID).value);

    const totalAmount = flightTo+carRental+houseRental+flightBack;

    console.log(USDollar.format(totalAmount));
    document.getElementById("totalAmount_"+tripID).innerHTML = USDollar.format(totalAmount);
}

function clearInput(tripID){
    document.getElementById("descriptionTextBox_"+tripID).value= null;
    document.getElementById("flightTo_"+tripID).value="0";
    document.getElementById("carRental_"+tripID).value="0";
    document.getElementById("houseRental_"+tripID).value="0";
    document.getElementById("flightBack_"+tripID).value="0";
    document.getElementById("totalAmount_"+tripID).innerHTML=USDollar.format(0);

}

//WIP
function addNewTrip(){
    let clonedDiv = document.getElementById('trip1').cloneNode(true);
    document.getElementById('tripContainer').appendChild(clonedDiv);
}
//WIP
function clearTrips(){
    document.getElementById('trip1').innerHTML="";
}