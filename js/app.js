






















'use strict';
var storehours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


// var parentDiv = document.getElementById('locations');

// var cookiesTable = document.createElement('table');

// parentDiv.appendChild(cookiesTable);

function CookieShop(name, minHourlyCoustomers, maxHourlyCoustomers, avgCookiesPerSale) {
    this.name = name;
    this.minHourlyCoustomers = minHourlyCoustomers;
    this.maxHourlyCoustomers = maxHourlyCoustomers;
    this.avgCookiesPerSale = avgCookiesPerSale;
    this.coustPerHOur = [];
    this.amountOfCookiesForEachHour = [];
    this.totalCookiesPerDay = 0;

    // this.render ='';
    // allcookieshops.push(this);
}


CookieShop.prototype.calculateCoustPerHOur = function () {
    for (var i = 0; i < storehours.length; i++)
        // return Math.ceil(Math.random() * ((this.maxHourlyCoustomers) - (this.minHourlyCoustomers)) + this.minHourlyCoustomers);
        this.coustPerHOur.push(generateRandomNumber(this.minHourlyCoustomers, this.maxHourlyCoustomers));
};

CookieShop.prototype.calculateAmountOfCookiesForEachHour = function () {
    for (var i = 0; i < this.coustPerHOur.length; i++) {
        var cookiesPerHour = Math.ceil(this.coustPerHOur[i] * this.avgCookiesPerSale);
        this.amountOfCookiesForEachHour.push(cookiesPerHour);
        this.totalCookiesPerDay = this.totalCookiesPerDay + cookiesPerHour;
        totalOfColumn[i] = totalOfColumn[i] + this.amountOfCookiesForEachHour[i];
         console.log(totalOfColumn[i], this.amountOfCookiesForEachHour[i]);
        
        grandTotal = grandTotal + this.amountOfCookiesForEachHour[i];

    }
    // return Math.round(this.avgCookiesPerCoustomers * this.coustPerHOur());
};
// var render;
CookieShop.prototype.render = function () {
    var locationData = document.createElement('tr');
    cookiesTable.appendChild(locationData);
    var namecell = document.createElement('td');
    namecell.textContent = this.name;
    locationData.appendChild(namecell);
    var datacell;
    for (var i = 0; i < this.amountOfCookiesForEachHour.length; i++) {
        datacell = document.createElement('td');
        datacell.textContent = this.amountOfCookiesForEachHour[i];
        locationData.appendChild(datacell);
        // totalOfColumn[i] += this.amountOfCookiesForEachHour[i];
        console.log(this.amountOfCookiesForEachHour[i]);
    }
    var totalcell = document.createElement('td');

    totalcell.textContent = this.totalCookiesPerDay;
    console.log(this.totalCookiesPerDay);
    locationData.appendChild(totalcell);
};

//     var shopssection = document.createElement('section');
//     parentDiv.appendChild(shopssection);

//     shopssection.appendChild(cookiesTable);

//     var trElement = document.createElement('tr');
//     var thElement = document.createElement('th');
//     thElement.textContent = this.name;
//      trElement.appendChild(thElement);

//      var cookiesSold = 0;
//      var totalCookiesSold = 0;

//      for ( var i = 0; i < storehours.length; i++){
//      cookiesSold = this.amountOfCookiesForEachHour();
//     var tdElement = document.createElement('td');
//     tdElement.textContent = cookiesSold;
//     trElement.appendChild(tdElement);

//     this.amountOfCookiesForEachHour.push(cookiesSold);
//     this.totalCookiesSold += cookiesSold;
// }

//      tdElement = document.createElement('td');
//      tdElement.textContent = totalCookiesSold;
//      trElement.appendChild(tdElement);
//      cookiesTable.appendChild(trElement);

// };

var parentDiv;
var cookiesTable;
// var totalOfColumn = [];
var grandTotal = 0;

function generateRandomNumber(minHourlyCoustomers, maxHourlyCoustomers) {
    return Math.ceil(Math.random() * ((maxHourlyCoustomers) - (minHourlyCoustomers)) + minHourlyCoustomers);
}






// var container = document.getElementById('CookiesForm')
// container.innerHTML = ''
// for ( var i = 0; i< storehours.length; i ++){
//     storehours.
// }













function creatTable() {
    parentDiv = document.getElementById('locations');
    cookiesTable = document.createElement('table');
    parentDiv.appendChild(cookiesTable);
}
creatTable();
createHeader();

function createHeader() {
    var headerRow = document.createElement('tr');
    cookiesTable.appendChild(headerRow);
    var emptycell = document.createElement('th');
    headerRow.appendChild(emptycell);
    var hourcell;
    for (var i = 0; i < storehours.length; i++) {
        hourcell = document.createElement('th');
        hourcell.textContent = storehours[i];
        headerRow.appendChild(hourcell);
    }
    var totalcell = document.createElement('th');
    totalcell.textContent = 'Daily location Total';
    headerRow.appendChild(totalcell);
}

var totalOfColumn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var totalRow;
function createTotalRow() {
    // for ( var i = 0; i < storehours.length; i++){
    //     totalOfColumn.push(0);
    // }
    totalRow = document.createElement('tr');
    cookiesTable.appendChild(totalRow);

    var totalCell = document.createElement('th');
    totalCell.textContent = 'Totals';
    totalRow.appendChild(totalCell);

    var columnTotalCell;

    for (var j = 0; j < storehours.length; j++) {
        columnTotalCell = document.createElement('th');
        totalRow.appendChild(columnTotalCell);
        columnTotalCell.textContent = totalOfColumn[j];
        console.log(totalOfColumn[j]);
    }

    var grandTotalCell = document.createElement('th');
    grandTotalCell.textContent = grandTotal;
    totalRow.appendChild(grandTotalCell);


}
var Seattle = new CookieShop('Seattle', 23, 65, 6.3);
var Tokyo = new CookieShop('Tokyo', 3, 24, 1.2);
var Dubai = new CookieShop('Dubai', 11, 38, 3.7);
var Paris = new CookieShop('Paris', 20, 38, 2.3);
var Lima = new CookieShop('Lima', 2, 16, 4.6);
var allcookieshops = [Seattle, Tokyo, Dubai, Paris, Lima];
// var addNewLocation = new CookieShop (

// )


for (var j = 0; j < allcookieshops.length; j++) {

    allcookieshops[j].calculateCoustPerHOur();
    allcookieshops[j].calculateAmountOfCookiesForEachHour();
    allcookieshops[j].render();
}


var cookiesForm = document.getElementById('CookiesForm')

cookiesForm.addEventListener('submit', submitter);
function submitter(event) {
    event.preventDefault();
    console.log(event.target);
    var name = event.target.locationName.value
    console.log('name', name);
    var minHour = parseInt(event.target.MinHourlyCuostmers.value)
    // console.log(typeof(minHour));
    console.log('MinHourlyCuostmers', minHour);
    var maxHour = parseInt(event.target.MaxHourlyCoustmers.value)
    console.log('MaxHourlyCoustmers', maxHour);
    var avgCookies = parseInt(event.target.AverageCookiesPerSale.value)
    console.log('AverageCookiesPerSale', avgCookies);
    
    if(minHour > maxHour) {
        alert('you shpuld add reight minimum number less than the maximum number');}
        else {
            var addNewLocation = new CookieShop(name, minHour, maxHour, avgCookies)
            cookiesTable.removeChild(totalRow);
            addNewLocation.calculateCoustPerHOur();
            addNewLocation.calculateAmountOfCookiesForEachHour();
            addNewLocation.render();
            for (var i = 1; i < totalRow.childNodes.length -1; i++) {
                totalRow.childNodes[i].textContent = totalOfColumn[i-1];
            }
            totalRow.childNodes[i].textContent = grandTotal;
            cookiesTable.appendChild(totalRow);
          
       
       
        }
    
      
  

}


























createTotalRow();




// function validateform(){
//     var name=document.locationName.name.value;
//     if (name.length<4){
//         alert("name should be at least 4 character")
//     }}
