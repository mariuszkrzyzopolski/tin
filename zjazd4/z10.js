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