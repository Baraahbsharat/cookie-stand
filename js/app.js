'use strict';
var storehours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
;
var Seattle = {
    name: 'Seattle',
    minHourlyCoustomers: 23,
    maxHourlyCoustomers: 65,
    avgCookiesPerCoustomers: 6.3,
    amountOfCookiesForEachHour: [],
    cousftPerHOur: [],
    totalCookiesPerDay: 0,
    calculatenumberocoustmer: function () {
        for (var i = 0; i < storehours.length; i++) {
            // this.cousftPerHOur.push(generateRandomNumber(this.maxHourlyCoustomers,
            //     this.maxHourlyCoustomers));
            this.cousftPerHOur.push(Math.floor(Math.random() * (this.maxHourlyCoustomers - this.minHourlyCoustomers + 1) + this.minHourlyCoustomers))
            }
            },

            calculateCookiesSoldPerHour: function () {
                for (var i = 0; i < this.cousftPerHOur.length; i++) {
                    var cookiesPerHour = Math.ceil(this.cousftPerHOur[i]*this.avgCookiesPerCoustomers);
                    console.log(cookiesPerHour);
                    this.amountOfCookiesForEachHour.push(cookiesPerHour);
                    this.totalCookiesPerDay = this.totalCookiesPerDay + cookiesPerHour       
    
    }
},
   render: function(){
       var mainDiv = document.getElementById('locations');
       var locationSection = document.createElement('section')
       ;
       mainDiv.appendChild(locationSection);
       var locationName = document.createElement('h3');
       locationName.textContent = this.name;
       locationSection.appendChild(locationName);
       
       var locationList = document.createElement('ul');
       locationSection.appendChild(locationList);
        
       var listItem;
       for(var i = 0; i < this.cousftPerHOur.length; i++){
           listItem = document.createElement('li');
           listItem.textContent = storehours[i] + ': '+ this.amountOfCookiesForEachHour[i] + 'cookoies';
           locationList.appendChild(listItem);
               }
               listItem = document.createElement('li');
               listItem.textContent = 'total:' + this.totalCookiesPerDay;
               locationList.appendChild(listItem);
   }
    };

    function generateRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
        
    }

var Tokyo = {
    name: 'Tokyo',
    minHourlyCoustomers: 3,
    maxHourlyCoustomers: 24,
    avgCookiesPerCoustomers: 1.2,
    amountOfCookiesForEachHour: [],
    cousftPerHOur: [],
    totalCookiesPerDay: 0,
    calculatenumberocoustmer: function () {
        for (var i = 0; i < storehours.length; i++) {
            // this.cousftPerHOur.push(generateRandomNumber(this.maxHourlyCoustomers,
            //     this.maxHourlyCoustomers));
            this.cousftPerHOur.push(Math.floor(Math.random() * (this.maxHourlyCoustomers - this.minHourlyCoustomers + 1) + this.minHourlyCoustomers))
            }
            },

            calculateCookiesSoldPerHour: function () {
                for (var i = 0; i < this.cousftPerHOur.length; i++) {
                    var cookiesPerHour = Math.ceil(this.cousftPerHOur[i]*this.avgCookiesPerCoustomers);
                    console.log(cookiesPerHour);
                    this.amountOfCookiesForEachHour.push(cookiesPerHour);
                    this.totalCookiesPerDay = this.totalCookiesPerDay + cookiesPerHour       
    
    }
},
   render: function(){
       var mainDiv = document.getElementById('locations');
       var locationSection = document.createElement('section')
       ;
       mainDiv.appendChild(locationSection);
       var locationName = document.createElement('h3');
       locationName.textContent = this.name;
       locationSection.appendChild(locationName);
       
       var locationList = document.createElement('ul');
       locationSection.appendChild(locationList);
        
       var listItem;
       for(var i = 0; i < this.cousftPerHOur.length; i++){
           listItem = document.createElement('li');
           listItem.textContent = storehours[i] + ': '+ this.amountOfCookiesForEachHour[i] + 'cookoies';
           locationList.appendChild(listItem);
               }
               listItem = document.createElement('li');
               listItem.textContent = 'total:' + this.totalCookiesPerDay;
               locationList.appendChild(listItem);
   }
    };

    function generateRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
        
    }


var Dubai = {
    name: 'Dubai',
    minHourlyCoustomers: 11,
    maxHourlyCoustomers: 38,
    avgCookiesPerCoustomers: 3.7,
    amountOfCookiesForEachHour: [],
    cousftPerHOur: [],
    totalCookiesPerDay: 0,
    calculatenumberocoustmer: function () {
        for (var i = 0; i < storehours.length; i++) {
            // this.cousftPerHOur.push(generateRandomNumber(this.maxHourlyCoustomers,
            //     this.maxHourlyCoustomers));
            this.cousftPerHOur.push(Math.floor(Math.random() * (this.maxHourlyCoustomers - this.minHourlyCoustomers + 1) + this.minHourlyCoustomers))
            }
            },

            calculateCookiesSoldPerHour: function () {
                for (var i = 0; i < this.cousftPerHOur.length; i++) {
                    var cookiesPerHour = Math.ceil(this.cousftPerHOur[i]*this.avgCookiesPerCoustomers);
                    console.log(cookiesPerHour);
                    this.amountOfCookiesForEachHour.push(cookiesPerHour);
                    this.totalCookiesPerDay = this.totalCookiesPerDay + cookiesPerHour       
    
    }
},
   render: function(){
       var mainDiv = document.getElementById('locations');
       var locationSection = document.createElement('section')
       ;
       mainDiv.appendChild(locationSection);
       var locationName = document.createElement('h3');
       locationName.textContent = this.name;
       locationSection.appendChild(locationName);
       
       var locationList = document.createElement('ul');
       locationSection.appendChild(locationList);
        
       var listItem;
       for(var i = 0; i < this.cousftPerHOur.length; i++){
           listItem = document.createElement('li');
           listItem.textContent = storehours[i] + ': '+ this.amountOfCookiesForEachHour[i] + 'cookoies';
           locationList.appendChild(listItem);
               }
               listItem = document.createElement('li');
               listItem.textContent = 'total:' + this.totalCookiesPerDay;
               locationList.appendChild(listItem);
   }
    };

    function generateRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
        
    }


var Paris = {
    name: 'Paris',
    minHourlyCoustomers: 20,
    maxHourlyCoustomers: 38,
    avgCookiesPerCoustomers: 2.3,
    amountOfCookiesForEachHour: [],
    cousftPerHOur: [],
    totalCookiesPerDay: 0,
    calculatenumberocoustmer: function () {
        for (var i = 0; i < storehours.length; i++) {
            // this.cousftPerHOur.push(generateRandomNumber(this.maxHourlyCoustomers,
            //     this.maxHourlyCoustomers));
            this.cousftPerHOur.push(Math.floor(Math.random() * (this.maxHourlyCoustomers - this.minHourlyCoustomers + 1) + this.minHourlyCoustomers))
            }
            },

            calculateCookiesSoldPerHour: function () {
                for (var i = 0; i < this.cousftPerHOur.length; i++) {
                    var cookiesPerHour = Math.ceil(this.cousftPerHOur[i]*this.avgCookiesPerCoustomers);
                    console.log(cookiesPerHour);
                    this.amountOfCookiesForEachHour.push(cookiesPerHour);
                    this.totalCookiesPerDay = this.totalCookiesPerDay + cookiesPerHour       
    
    }
},
   render: function(){
       var mainDiv = document.getElementById('locations');
       var locationSection = document.createElement('section')
       ;
       mainDiv.appendChild(locationSection);
       var locationName = document.createElement('h3');
       locationName.textContent = this.name;
       locationSection.appendChild(locationName);
       
       var locationList = document.createElement('ul');
       locationSection.appendChild(locationList);
        
       var listItem;
       for(var i = 0; i < this.cousftPerHOur.length; i++){
           listItem = document.createElement('li');
           listItem.textContent = storehours[i] + ': '+ this.amountOfCookiesForEachHour[i] + 'cookoies';
           locationList.appendChild(listItem);
               }
               listItem = document.createElement('li');
               listItem.textContent = 'total:' + this.totalCookiesPerDay;
               locationList.appendChild(listItem);
   }
    };

    function generateRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
        
    }

var Lima = {
    name: 'Lima',
    minHourlyCoustomers: 2,
    maxHourlyCoustomers: 16,
    avgCookiesPerCoustomers: 4.6,
    amountOfCookiesForEachHour: [],
    cousftPerHOur: [],
    totalCookiesPerDay: 0,
    calculatenumberocoustmer: function () {
        for (var i = 0; i < storehours.length; i++) {
            // this.cousftPerHOur.push(generateRandomNumber(this.maxHourlyCoustomers,
            //     this.maxHourlyCoustomers));
            this.cousftPerHOur.push(Math.floor(Math.random() * (this.maxHourlyCoustomers - this.minHourlyCoustomers + 1) + this.minHourlyCoustomers))
            }
            },

            calculateCookiesSoldPerHour: function () {
                for (var i = 0; i < this.cousftPerHOur.length; i++) {
                    var cookiesPerHour = Math.ceil(this.cousftPerHOur[i]*this.avgCookiesPerCoustomers);
                    console.log(cookiesPerHour);
                    this.amountOfCookiesForEachHour.push(cookiesPerHour);
                    this.totalCookiesPerDay = this.totalCookiesPerDay + cookiesPerHour       
    
    }
},
   render: function(){
       var mainDiv = document.getElementById('locations');
       var locationSection = document.createElement('section')
       ;
       mainDiv.appendChild(locationSection);
       var locationName = document.createElement('h3');
       locationName.textContent = this.name;
       locationSection.appendChild(locationName);
       
       var locationList = document.createElement('ul');
       locationSection.appendChild(locationList);
        
       var listItem;
       for(var i = 0; i < this.cousftPerHOur.length; i++){
           listItem = document.createElement('li');
           listItem.textContent = storehours[i] + ': '+ this.amountOfCookiesForEachHour[i] + 'cookoies';
           locationList.appendChild(listItem);
               }
               listItem = document.createElement('li');
               listItem.textContent = 'total:' + this.totalCookiesPerDay;
               locationList.appendChild(listItem);
   }
    };

    function generateRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
        
    }
    Seattle.calculatenumberocoustmer();
    Seattle.calculateCookiesSoldPerHour();
    Seattle.render();
    console.log(Seattle);
    Tokyo.calculatenumberocoustmer();
    Tokyo.calculateCookiesSoldPerHour();
    Tokyo.render();
    console.log(Tokyo);
    Dubai.calculatenumberocoustmer();
    Dubai.calculateCookiesSoldPerHour();
    Dubai.render();
    console.log(Dubai);
    Paris.calculatenumberocoustmer();
    Paris.calculateCookiesSoldPerHour();
    Paris.render();
    console.log(Paris);
    Lima.calculatenumberocoustmer();
    Lima.calculateCookiesSoldPerHour();
    Lima.render();
    console.log(Lima);

// numofcookiesPerHour: function () {
//     for (var i = 0; i < 14; i++) {
//         var cookiesnumber = Math.floor(this.NumofCousftPerHOur[i] * this.avgCookiesPerCoustomers);
//         this.amountOfCookiesForEachHour.push(cookiesnumber);
//     }
//     console.log(this.amountOfCookiesForEachHour);
// }
// };
// Seattle.numberocoustmer();
// Seattle.numofcookiesPerHour();


// var Tokyo = {
//     name: 'Tokyo',
//     minHourlyCoustomers: 3,
//     maxHourlyCoustomers: 24,
//     avgCookiesPerCoustomers: 1.2,
//     amountOfCookiesForEachHour: [],
//     NumofCousftPerHOur: [],
//     numberocoustmer: function () {
//         for (var i = 0; i < storehours.length; i++) {
//             var coustumers = Math.floor(Math.random() * (this.maxHourlyCoustomers - this.minHourlyCoustomers + 1) + this.minHourlyCoustomers);
//             this.NumofCousftPerHOur.push(coustumers);
//         }
//         console.log(this.NumofCousftPerHOur);
//     },
//     numofcookiesPerHour: function () {
//         for (var i = 0; i < 14; i++) {
//             var cookiesnumber = Math.floor(this.NumofCousftPerHOur[i] * this.avgCookiesPerCoustomers);
//             this.amountOfCookiesForEachHour.push(cookiesnumber);
//         }
//         console.log(this.amountOfCookiesForEachHour);
//     }
// };
// Tokyo.numberocoustmer();
// Tokyo.numofcookiesPerHour();
// // }

// var Dubai = {
//     name: 'Dunai',
//     minHourlyCoustomers: 11,
//     maxHourlyCoustomers: 38,
//     avgCookiesPerCoustomers: 3.7,
//     amountOfCookiesForEachHour: [],
//     NumofCousftPerHOur: [],
//     numberocoustmer: function () {
//         for (var i = 0; i < storehours.length; i++) {
//             var coustumers = Math.floor(Math.random() * (this.maxHourlyCoustomers - this.minHourlyCoustomers + 1) + this.minHourlyCoustomers);
//             this.NumofCousftPerHOur.push(coustumers);
//         }
//         console.log(this.NumofCousftPerHOur);
//     },
//     numofcookiesPerHour: function () {
//         for (var i = 0; i < 14; i++) {
//             var cookiesnumber = Math.floor(this.NumofCousftPerHOur[i] * this.avgCookiesPerCoustomers);
//             this.amountOfCookiesForEachHour.push(cookiesnumber);
//         }
//         console.log(this.amountOfCookiesForEachHour);
//     }
// };
// Dubai.numberocoustmer();
// Dubai.numofcookiesPerHour();

// var Paris = {
//     name: 'Paris',
//     minHourlyCoustomers: 20,
//     maxHourlyCoustomers: 38,
//     avgCookiesPerCoustomers: 2.3,
//     amountOfCookiesForEachHour: [],
//     NumofCousftPerHOur: [],
//     numberocoustmer: function () {
//         for (var i = 0; i < storehours.length; i++) {
//             var coustumers = Math.floor(Math.random() * (this.maxHourlyCoustomers - this.minHourlyCoustomers + 1) + this.minHourlyCoustomers);
//             this.NumofCousftPerHOur.push(coustumers);
//         }
//         console.log(this.NumofCousftPerHOur);
//     },
//     numofcookiesPerHour: function () {
//         for (var i = 0; i < 14; i++) {
//             var cookiesnumber = Math.floor(this.NumofCousftPerHOur[i] * this.avgCookiesPerCoustomers);
//             this.amountOfCookiesForEachHour.push(cookiesnumber);
//         }
//         console.log(this.amountOfCookiesForEachHour);
//     }
// };
// Paris.numberocoustmer();
// Paris.numofcookiesPerHour();
// var Lima = {
//     name: Lima,
//     minHourlyCoustomers: 2,
//     maxHourlyCoustomers: 16,
//     avgCookiesPerCoustomers: 4.6,
//     amountOfCookiesForEachHour: [],
//     NumofCousftPerHOur: [],
//     numberocoustmer: function () {
//         for (var i = 0; i < storehours.length; i++) {
//             var coustumers = Math.floor(Math.random() * (this.maxHourlyCoustomers - this.minHourlyCoustomers + 1) + this.minHourlyCoustomers);
//             this.NumofCousftPerHOur.push(coustumers);
//         }
//         console.log(this.NumofCousftPerHOur);
//     },
//     numofcookiesPerHour: function () {
//         for (var i = 0; i < 14; i++) {
//             var cookiesnumber = Math.floor(this.NumofCousftPerHOur[i] * this.avgCookiesPerCoustomers);
//             this.amountOfCookiesForEachHour.push(cookiesnumber);
//         }
//         console.log(this.amountOfCookiesForEachHour);
//     }
// };

// Lima.numberocoustmer();
// Lima.numofcookiesPerHour();

// var divCookies = document.getElementById('cookies');
// var salmonAtricle = document.createElement('article');
// divCookies.appendChild(salmonAtricle);
// var storeHourList = document.createElement('ul');
// salmonAtricle.appendChild(storeHourList);
// for (var i = 0; i < 14; i++) {
//     var storehours = document.createElement('li');
//     storehours.textContent = storehours[i] + ':' + Seattle.NumofCousftPerHOur[i] + 'cookies';;
//     storeHourList.appendChild(storehours);
// };

// var parentDiv = document.getElementById('cookies');
// var seatelAtricle = document.createElement('article');
// console.log(document);
// parentDiv.appendChild(seatelAtricle);
// console.log(document);




// var seatelName = document.createElement('h2');
// seatelName.textContent = Seattle.name;
// seatelAtricle.appendChild(seatelName);
// var storehours = document.createElement('ul');
// seatelAtricle.appendChild(storehours);
// for(var i = 0; i < Seattle.amountOfCookiesForEachHour.length; i++){
//     var amountOfCookiesForEachHour = document.createElement('li');
//     amountOfCookiesForEachHour.textContent = Seattle.amountOfCookiesForEachHour[i];
//     storehours.appendChild(amountOfCookiesForEachHour);
//   }


//   var parentDiv = document.getElementById('cookies2');
//    var TokyoAtricle = document.createElement('article');
//   console.log(document);
//   parentDiv.appendChild(TokyoAtricle);
//   console.log(document);



//   var TokyoeName = document.createElement('h2');
// TokyoName.textContent = Tokyo.name;
// TokyoAtricle.appendChild(TokyoName);
// var storehours = document.createElement('ul');
// TokyoAtricle.appendChild(storehours);
// for(var i = 0; i < Tokyo.amountOfCookiesForEachHour.length; i++){
//     var amountOfCookiesForEachHour = document.createElement('li');
//     amountOfCookiesForEachHour.textContent = Tokyo.amountOfCookiesForEachHour[i];
//     storehours.appendChild(amountOfCookiesForEachHour);
//   }



// var DubaieName = document.createElement('h2');
// DubaiName.textContent = Dubai.name;
// DubaiAtricle.appendChild(DubaiName);
// var storehours = document.createElement('ul');
// DubaiAtricle.appendChild(storehours);
// for(var i = 0; i < Dubai.amountOfCookiesForEachHour.length; i++){
//     var amountOfCookiesForEachHour = document.createElement('li');
//     amountOfCookiesForEachHour.textContent = Dubai.amountOfCookiesForEachHour[i];
//     storehours.appendChild(amountOfCookiesForEachHour);
//   }



// var PariseName = document.createElement('h2');
// PariseName.textContent = Paris.name;
// ParisAtricle.appendChild(ParisName);
// var storehours = document.createElement('ul');
// ParisAtricle.appendChild(storehours);
// for(var i = 0; i < Paris.amountOfCookiesForEachHour.length; i++){
//     var amountOfCookiesForEachHour = document.createElement('li');
//     amountOfCookiesForEachHour.textContent = Paris.amountOfCookiesForEachHour[i];
//     storehours.appendChild(amountOfCookiesForEachHour);
//   }


// var LimaName = document.createElement('h2');
// LimaName.textContent = Lima.name;
// LimaAtricle.appendChild(LimaeName);
// var storehours = document.createElement('ul');
// LimalAtricle.appendChild(storehours);
// for(var i = 0; i < Lima.amountOfCookiesForEachHour.length; i++){
//     var amountOfCookiesForEachHour = document.createElement('li');
//     amountOfCookiesForEachHour.textContent = Lima.amountOfCookiesForEachHour[i];
//     storehours.appendChild(amountOfCookiesForEachHour);
//   }





























// var storeNames = document.createElement('p');
// storeNames.textContent = frankie.age;
// frankieAtricle.appendChild(frankieAge);

// var interestsList = document.createElement('ul');
// frankieAtricle.appendChild(interestsList);

// for (var i = 0; i < frankie.interests.length; i++) {
//     var interest = document.createElement('li');
//     interest.textContent = frankie.interests[i];
//     interestsList.appendChild(interest);
// };
//     console.log(this.name + ' storebranch ');
// };
// var storeNames = [Seattle, Tokyo, Dubai, Paris,Lima];

// for(var i=0; i < storeNames.length; i++){
//   for(var j = 0; j < storeNames[i].storeNames.length; j++ )
//     document.write(storeNames[i].storeNames[j]);

//     var students = [eiad, jamila];

// for(var i=0; i < storehours.length; i++){
//   for(var j = 0; j <storehours[i].amountOfCookiesForEachHour.length; j++ )
//     console.log(students[i].amountOfCookiesForEachHour[j]);
// }
// var storenames = ['Seattle', 'Tokyo', 'Dubai', 'Paris','Lima'];
// var  minHourlyCoustomers = [23, 3, 11, 20, 2];
// var maxHourlyCoustomers = [65, 24, 38, 38, 16];
// var avgCookiesPerCoustomers = [6.3, 1.2, 3.7, 2.3, 4.6];

// function CookieStore(name, minHourlyCoustomers, maxHourlyCoustomers, avgCookiesPerCoustomers){
//     this.customersEachHour = [];
//     this.cookieSalesEachHour = [];
//     this.cookieSalesTotal = 0;
//     this.name = name;
//     this.minHourlyCoustomers = minHourlyCoustomers;
//     this.maxHourlyCoustomers =avgCookiesPerCoustomers;
//     this.avgCookiesPerCoustomers = avgCookiesPerCoustomers;
//   }

//   CookieStore.prototype.RandomNumOfCustomers = function(){
//     for(var i = 0; i < storehours.length; i++){
//       this.customersEachHour.push( Math.floor(Math.random() * (this.maxHourlyCoustomers - this.minHourlyCoustomers + 1)) + this.minHourlyCoustomers);
//     }
//   };
//   CookieStore.prototype.CookieSalesEachHour = function(){
//     this.RandomNumberOfCustomers();
//     for(var i = 0; i < storehours.length; i++){
//       this.cookieSalesEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCoustomers));
//       this.Total += this.cookieSalesEachHour[i];
//     }
//   };
//   var list = document.createElement('ul');
//   storehours.forEach(function(storehours){
//       var li = document.createElement('li');
//       li.textContent = storehours;
//       list.appendChild(li);
//   });
// var app = document.querySelector('#app');
// var app = document.querySelector('#app');
// app.appendChild(list);
//   var divCookies = document.getElementById('cookies');
// var salmonAtricle = document.createElement('article');
// divCookies.appendChild(salmonAtricle);
// var storeHourList = document.createElement('ul');
// salmonAtricle.appendChild(storeHourList);


// for (var i = 0; i < storehours.length; i++) {
//     var storehours = document.createElement('li');
//     storehours.textContent = storehours[i];
//     storeHourList.appendChild(storehours);
// };

// storeHourList.push("cookieSalesEachHour");
//   var createStores = function(){
//     salesTable.innerHTML = '';
//     header(); 
//     for (var i = 0; i < storeNames.length; i++){
//       objectStoreNames[i] = new CookieStore(storeNames[i],storehours[i] ,customersEachHour[i]);
//     }
//     Total();
//   };
//   CookieStore.RandomNumOfCustomers();
//   CookieStore.cookieSalesEachHour();


//   CookieStore.prototype.render = function (){
//     this.eCookieSalesEachHour();
//     var trEl = document.createElement('tr');
//     var tdEl = document.createElement('td');
//     tdEl.textContent = this.name;
//     tdEl.className = 'loc';
//     trEl.appendChild(tdEl);
//     for(var i = 0; i < hours.length; i++){
//       tdEl = document.createElement('td');
//       tdEl.textContent = this.cookieSalesEachHour[i];
//       trEl.appendChild(tdEl);
//     }
//     tdEl = document.createElement('td');
//     tdEl.textContent = this.Total;
//     trEl.appendChild(tdEl);
//     salesTable.appendChild(trEl);
//   };
//   var header = function() {
//     var trEl = document.createElement('tr');
//     var thEl = document.createElement('th');
//     thEl.textContent = 'Store Names';
//     trEl.appendChild(thEl);
//     for(var i = 0; i < storehours.length; i++){
//       thEl = document.createElement('th');
//       thEl.textContent = hours[i];
//       trEl.appendChild(thEl);
//     }
//     thEl = document.createElement('th');
//     thEl.textContent = 'Daily Totals:';
//     trEl.appendChild(thEl);
//     salesTable.appendChild(trEl);
//   };
//   CookieStore.all = [];



// function function1() {
//     var ul = document.getElementById("list");
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("Element 4"));
//     ul.appendChild(li);
//   }

// var divCookies = document.getElementById('cookies');
// var salmonAtricle = document.createElement('article');
// divCookies.appendChild(salmonAtricle);
// var storeHourList = document.createElement('ul');
// salmonAtricle.appendChild(storeHourList);


// for (var i = 0; i < storehours.length; i++) {
//     var storehours = document.createElement('li');
//     storehours.textContent = storehours[i];
//     storeHourList.appendChild(storehours);
// }
// document.write ('storeHourList');
// for (var i in a) 
// {
//    console.log(" store " + i);
//    for (var j in a[i]) 
//      {
//       console.log(" " + a[i][j]);
//      }
// }
// ;console.log(document);
// // }
// }
// }

//     numofcookiesPerHour: function() {
//         for (var i = 0; i < storehours.length; i++)
//             var cookiesnumber =  Math.floor(this.avgCookiesPerCoustomers * this.NumofCousftPerHOur[i]);
//             this.amountOfCookiesForEachHour.push(cookiesnumber);
//      console.log(this.amountOfCookiesForEachHour); 
//     }   
// };
// Seattle.numberocoustmer();
// Seattle.numofcookiesPerHour();
// var Seattle = {
//     minHourlyCoustomers: 23,
//     maxHourlyCoustomers: 65,
//     avgCookiesPerCoustomers: 6.3,
//     amountOfCookiesForEachHour: [],
//     NumofCoustPerHOur: [],
//     numberofcoustmer: function () {
//             randomCuostomersPerHour = function (this.minHourlyCoustomers, this.maxHourlyCoustomers)
//             for (var i = 0; i < storehours.length; i++) {
//             this.NumofCoustPerHOur.push( Math.floor(Math.random() * (this.maxHourlyCoustomers - this.minHourlyCoustomers + 1)) + this.minHourlyCoustomers);
//         } console.log(this.NumofCoustPerHOur);
//     },
//     numofcookiesPerHour: function () {

//         for (var i = 0; i < 14; i++)
//             var cookiesnumber = (this.avgCookiesPerCoustomers * this.NumofCoustPerHOur);
//             this.amountOfCookiesForEachHour.push(cookiesnumber);
//      console.log(this.amountOfCookiesForEachHour); 
//     }   

// };
// Seattle.numberofcoustmer();
// Seattle.numofcookiesPerHour();
// var Tokyo = {
//     minHourlyCoustomers: 3,
//     maxHourlyCoustomers: 24,
//     avgCookiesPerCoustomers: 1.2,
//     amountOfCookiesForEachHour: [],
//     NumofCoustPerHOur: [],
// };
// var Dubai = {
//     minHourlyCoustomers: 11,
//     maxHourlyCoustomers: 38,
//     avgCookiesPerCoustomers: 3.7,
//     amountOfCookiesForEachHour: [],
//     NumofCoustPerHOur: [],
// };
// var Paris = {
//     minHourlyCoustomers: 20,
//     maxHourlyCoustomers: 38,
//     avgCookiesPerCoustomers: 2.3,
//     amountOfCookiesForEachHour: [],
// };
// var Lima = {
//     minHourlyCoustomers: 2,
//     maxHourlyCoustomers: 16,
//     avgCookiesPerCoustomers: 4.6,
//     amountOfCookiesForEachHour: [],
// };

// function randomCuostomersPerHour(minHourlyCoustomers, maxHourlyCoustomers) {
//     return Math.floor(Math.random() * (maxHourlyCoustomers - minHourlyCoustomers + 1) + minHourlyCoustomers);

// };

// var amountOfCookiesForEachHour = document.createElement('ul');
// function multiply(avgCookiesPerCoustomers, randomCuostomersPerHour) {
//     return avgCookiesPerCoustomers * randomCuostomersPerHour;
// }

// // amountOfCookiesForEachHour = multiply(avgCookiesPerCoustomers, randomCuostomersPerHour);
// var divCookies = document.getElementById('cookies');
// var salmonAtricle = document.createElement('article');
// divCookies.appendChild(salmonAtricle);
// var storeHourList = document.createElement('ul');
// salmonAtricle.appendChild(storeHourList);


// for (var i = 0; i < storehours.length; i++) {
//     var storehours = document.createElement('li');
//     storehours.textContent = storehours[i];
//     storeHourList.appendChild(storehours);
// };
// Seattle.numofcookiesPerHour();