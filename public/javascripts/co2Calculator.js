function initCo2Calculator() {
    var inputFieldKmBike = getKmBikeInputField().value;
    var inputFieldConsumptionCar = getConsumptionCarInputField().value;
    console.log("init",inputFieldKmBike)
    updateHTML(inputFieldKmBike, inputFieldConsumptionCar);
}

function calc(kmBike, consumptionCar) {

    var co2Bike = 0.005;
    var co2Car = consumptionCar * 25 / 100;
    var co2Difference = co2Car - co2Bike;

    var co2Savings = kmBike * co2Difference;
    parseFloat(co2Savings.toFixed(1));

    return co2Savings
}

function updateHTML(kmBike, consumptionCar) {
    co2Savings = calc(kmBike, consumptionCar)
    document.getElementById("co2_calculator_result_value").innerHTML = co2Savings + " kg";
}


function getKmBikeInputField() {
    return document.getElementById("input_field_km_bike")
}

function getConsumptionCarInputField() {
    return document.getElementById("input_field_consumption_co2")
}

module.exports = {
    calc: calc
};
