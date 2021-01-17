class Auto {
    constructor(start_price, year, km) {
        this.year = year;
        this.start_price = start_price;
        this.end_price = start_price;
        this.km = km;
    }


    increasePrice() {
    return this.start_price += 1000;
    }

    lowerPriceByAge() {
        var currYear = new Date().getFullYear()
        for (var i = currYear - this.year; i >= 0; i--) {
            this.end_price -= 1000;
        }
        return this.end_price;
    }

    lowerPriceByCarKm () {
    var carKm = Math.floor(this.km / 100000);
    return this.end_price -= carKm * 10000;
    }

    addKmYear(km, year) {
    this.year = year;
    this.km = km;
    this.lowerPrice();
    this.lowerPriceByCarKm();
    }
};

var cars = [new Auto(60000, 1998, 10000),new Auto(3000, 1990, 98000),new Auto(20000, 2010, 20000)];
$(function(){
    for(var i=0; i<cars.length; i++) {
        $("#table").append(
            "<tr><td>" + cars[i].year + "</td><td>" + cars[i].km + "</td><td>" + cars[i].start_price + "</td><td>" + cars[i].end_price + "</td></tr>");
            
            
            
    }
})