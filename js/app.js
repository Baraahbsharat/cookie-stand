'use strict';
var storehours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allcookieshops = [];



function CookieShop(name, minHourlyCoustomers, maxHourlyCoustomers, avgCookiesPerCoustomers,amountOfCookiesForEachHour,coustPerHOur, ) {
    this.name = name;
    this.minHourlyCoustomers = minHourlyCoustomers;
    this.maxHourlyCoustomers = maxHourlyCoustomers;
    this.avgCookiesPerCoustomers = avgCookiesPerCoustomers;
    this.amountOfCookiesForEachHour = amountOfCookiesForEachHour;
    this.coustPerHOur = coustPerHOur;
    this.render ='';
    allcookieshops.push(this);
}


CookieShop.prototype.coustPerHOur = function () {

    return Math.ceil(Math.random() * ((this.maxHourlyCoustomers) - (this.minHourlyCoustomers)) + this.minHourlyCoustomers);
};

CookieShop.prototype.amountOfCookiesForEachHour = function () {
    return Math.round(this.avgCookiesPerCoustomers * this.coustPerHOur());
};
// var render;
CookieShop.prototype.render = function () {
    var parentDiv = document.getElementById('locations');
    var shopssection = document.createElement('section');
    parentDiv.appendChild(shopssection);
    
    var cookiesTable = document.getElementById('table');
    shopssection.appendChild(cookiesTable);

    var trElement = document.createElement('tr');
    var thElement = document.createElement('th');
    thElement.textContent = this.name;
     trElement.appendChild(thElement);
    
     var cookiesSold = 0;
     var totalCookiesSold = 0;
    
     for ( var i = 0; i < storehours.length; i++){
     cookiesSold = this.amountOfCookiesForEachHour();
    var tdElement = document.createElement('td');
    tdElement.textContent = cookiesSold;
    trElement.appendChild(tdElement);

    this.amountOfCookiesForEachHour.push(cookiesSold);
    this.totalCookiesSold += cookiesSold;
}

     tdElement = document.createElement('td');
     tdElement.textContent = totalCookiesSold;
     trElement.appendChild(tdElement);
     cookiesTable.appendChild(trElement);

};
function createHeaderRow(){
var theadElement = document.createElement('thead');
var trElement = document.createElement('tr');
var thElement = document.createElement('th');
thElement.textContent ='';
trElement.appendChild(thElement);
for (var i = 0; i < storehours.length; i++){
    thElement = document.createElement('th');
    thElement.textContent = storehours[i];
    trElement.appendChild(thElement);
}
thElement = document.createElement('th');
thElement.textContent = 'Daily Total';
trElement.appendChild(thElement);
theadElement.appendChild(trElement);
cookiesTable.appendChild(theadElement);
}


function totalCookiesPerHour (){
    var trElement = document.createElement('tr');
    var thElement = document.createElement('th');
    thElement.textContent = 'Totals';
    trElement.appendChild(thElement);
    
    var grandTotalCookies = 0;

    for (var i = 0; i < storehours.length; i++){
        var totalCookies = 0;
        for ( var j = 0; j < allcookieshops.length; j++){
            grandTotalCookies += allcookieshops[j].amountOfCookiesForEachHour[i];
        }
    var tdElement = document.createElement('td');
    tdElement.textContent = totalCookies;
    trElement.appendChild(tdElement);
    }
    
    
    tdElement = document.createElement('td');
    tdElement.textContent = grandTotalCookies;
    trElement.appendChild(trElement);
    cookiesTable.appendChild(trElement);
}
    new CookieShop('Seattle', 23, 65, 6.3);
    new CookieShop('Tokyo', 3, 24, 1.2);
    new CookieShop('Dubai', 11, 38, 3.7);
    new CookieShop('Paris', 20, 38, 2.3);
    new CookieShop('Lima', 2, 16, 4.6);

    function renderallcookieshops(){
        for (var i in allcookieshops){
            allcookieshops[i].render();
        }
    }
 

//   makeHeaderRow();
//   renderallcookieshops();
//   totalCookiesPerHour();


