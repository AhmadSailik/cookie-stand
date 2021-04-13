'use strict'
function randomValue(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let time=['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm']
let locations=['seattle','Tokyo','Dubai','Paris','Lima']
let mins=[2.3,3,11,20,2]
let maxs=[65,24,38,38,16]
let avgs=[6.3,1.2,3.7,2.3,4.6]
let dfin=[]
let sum=[]
function Cookies (location,min,max,avg){
    this.location=location;
    this.min=min;
    this.max=max;
    this.avg=avg;
    this.numPersonPerH=[]
    this.avgCookiesPerH=[]
    this.Total=0
    this.totals=[]
    sum.push(this);
}

for(let i=0;i<locations.length;i++){
    dfin.push(new Cookies(locations[i],mins[i],maxs[i],avgs[i])) 
}
console.log(sum);
Cookies.prototype.calNumPersonPerH=function(){
    for (let i=0;i<time.length;i++){ 
    this.numPersonPerH.push(randomValue(this.min,this.max))
    }
    //console.log(this.numPersonPerH)
}
Cookies.prototype.calAvgCookiesPerH=function(){
    for (let i = 0; i < time.length; i++) {  
    let val=Math.ceil(this.avg*this.numPersonPerH[i]);
    this.Total=this.Total+val;
    this.avgCookiesPerH.push(val);
    }
    console.log(this.avgCookiesPerH);

}
var cont = document.getElementById('first');
    var tableEl =document.createElement('table');
    cont.appendChild(tableEl);
    var trEl=document.createElement('tr');
    tableEl.appendChild(trEl);
    var thEl=document.createElement('th')
    trEl.appendChild(thEl)
    var trEl2=document.createElement('tr');
    tableEl.appendChild(trEl2);
    var thEl2=document.createElement('th')
    trEl2.appendChild(thEl2)
    var trEl2=document.createElement('tr');
    tableEl.appendChild(trEl2);
    var thEl2=document.createElement('th')
    trEl2.appendChild(thEl2)

for (let i = 0; i < time.length; i++) {
    var thEl=document.createElement('th')
    trEl.appendChild(thEl)
    thEl.textContent=time[i]
    }
    var thEl=document.createElement('th')
    trEl.appendChild(thEl)
    thEl.textContent='Total'
    for(let i=0;i<locations.length;i++){
    var trEl2=document.createElement('tr');
    tableEl.appendChild(trEl2);
    var thEl2=document.createElement('th')
    trEl2.appendChild(thEl2)
    thEl2.textContent=locations[i]
    }
Cookies.prototype.headerRow=function(){
    
    var tdEl=document.createElement('td')
    trEl.appendChild(tdEl)
    tdEl.textContent='                '
    
    var trEl2=document.createElement('tr');
    tableEl.appendChild(trEl2);
    var thEl2=document.createElement('th')
    trEl2.appendChild(thEl2)
    
    
    for(let i=0;i<time.length;i++){
    var tdEl2=document.createElement('td')
    trEl2.appendChild(tdEl2)
    tdEl2.textContent=this.avgCookiesPerH[i]
    }
    var tdEl2=document.createElement('td')
    trEl2.appendChild(tdEl2)
    tdEl2.textContent=this.Total
    }
    

for(let i=0 ;i<sum.length;i++){
    sum[i].calNumPersonPerH();
    sum[i].calAvgCookiesPerH();
    sum[i].headerRow();
     
}

// let loc1 =new Cookies('seattle',2.3,65,6.3)
// let loc2 =new Cookies('Tokyo',3,24,1.2)
// let loc3 =new Cookies('Dubai',11,38,3.7)
// let loc4 =new Cookies('Paris',20,38,2.3)
// let loc5 =new Cookies('Lima',2,16,4.6)

//headerRow()
    // let headerRow=function(){
//     let cont = document.getElementById('first');
//     let tableEl =document.createElement('table');
//     cont.appendChild(tableEl);
//     let trEl=document.createElement('tr');
//     tableEl.appendChild(trEl);
//     let tdEl=document.createElement('td')
//     trEl.appendChild(tdEl)
//     tdEl.textContent='                '
//     for (let i = 0; i < time.length; i++) {
//     let thEl=document.createElement('th')
//     trEl.appendChild(thEl)
//     thEl.textContent=time[i]
//     }
//     let thEl=document.createElement('th')
//     trEl.appendChild(thEl)
//     thEl.textContent='Total'
//     for(let i=0;i<locations.length;i++){
//     let trEl2=document.createElement('tr');
//     tableEl.appendChild(trEl2);
//     let thEl2=document.createElement('th')
//     trEl2.appendChild(thEl2)
//     thEl2.textContent=locations[i]
//     for(let i=0;i<time.length;i++){
//     let tdEl2=document.createElement('td')
//     trEl2.appendChild(tdEl2)
//     tdEl2.textContent='ahmad'
//     }
//     let tdEl2=document.createElement('td')
//     trEl2.appendChild(tdEl2)
//     tdEl2.textContent='tot'
//     }
//  }
    
    
    
    
    
    

    // h2.textContent=this.location;
    // let ul=document.createElement('ul')
    // cont.appendChild(ul);
    // let li=null;
    // for (let i = 0; i < time.length; i++) {
    //     li=document.createElement('li');
    //     ul.appendChild(li);
    //     li.textContent=[time[i]+' : '+this.avgCookiesPerH[i]+' cookies'];
    // }
    // li=document.createElement('li');
    // ul.appendChild(li);
    // li.textContent=['Total: '+this.Total+' cookies'];


//dfin[i].render();



//loc1.calNumPersonPerH();
//console.log(this.numPersonPerH)
// console.log()

// const seattle ={
//     location:'seattle',
//     min:23,
//     max:65,
//     avg:6.3,
//     numPersonPerH:[],
//     avgCookiesPerH:[],
//     Total:0,
//     calNumPersonPerH:function(){
//      for (let i=0;i<time.length;i++) {
//        this.numPersonPerH.push(this.randomValue(this.min,this.max))  
//      }
//      console.log(this.numPersonPerH);  
//     },
//     randomValue:function (min, max) {
//        return Math.floor(Math.random() * (max - min + 1) + min);
//     },
//     calAvgCookiesPerH:function(){
//         for (let i = 0; i < this.numPersonPerH.length; i++) {  
//             let val=Math.ceil(this.avg*this.numPersonPerH[i]);
//             this.Total=this.Total+val;
//             this.avgCookiesPerH.push(val);
//         }
//         console.log(this.avgCookiesPerH);
//     },
//     listelement:function(){
        // let cont = document.getElementById('first');
        // let h2 =document.createElement('h2');
        // cont.appendChild(h2);
        // h2.textContent=this.location;
        // let ul=document.createElement('ul')
        // cont.appendChild(ul);
        // let li=null;
        // for (let i = 0; i < time.length; i++) {
        //     li=document.createElement('li');
        //     ul.appendChild(li);
        //     li.textContent=[time[i]+' : '+this.avgCookiesPerH[i]+' cookies'];
        // }
        // li=document.createElement('li');
        // ul.appendChild(li);
        // li.textContent=['Total: '+this.Total+' cookies'];
//     }
// }
// seattle.calNumPersonPerH()
// seattle.calAvgCookiesPerH()
// seattle.listelement()

// const Tokyo ={
//     location:'Tokyo',
//     min:3,
//     max:24,
//     avg:1.2,
//     numPersonPerH:[],
//     avgCookiesPerH:[],
//     Total:0,
//     calNumPersonPerH:function(){
//      for (let i=0;i<time.length;i++) {
//        this.numPersonPerH.push(this.randomValue(this.min,this.max))  
//      }
//      console.log(this.numPersonPerH);  
//     },
//     randomValue:function (min, max) {
//        return Math.floor(Math.random() * (max - min + 1) + min);
//     },
//     calAvgCookiesPerH:function(){
//         for (let i = 0; i < this.numPersonPerH.length; i++) {  
//             let val=Math.ceil(this.avg*this.numPersonPerH[i])
//             this.Total=this.Total+val
//             this.avgCookiesPerH.push(val)
//         }
//         console.log(this.avgCookiesPerH);
//     },
//     listelement:function(){
//         let cont = document.getElementById('first');
//         let h2 =document.createElement('h2');
//         cont.appendChild(h2);
//         h2.textContent=this.location;
//         let ul=document.createElement('ul')
//         cont.appendChild(ul);
//         let li=null;
//         for (let i = 0; i < time.length; i++) {
//             li=document.createElement('li');
//             ul.appendChild(li);
//             li.textContent=[time[i]+' : '+this.avgCookiesPerH[i]+' cookies'];
//         }
//         li=document.createElement('li');
//         ul.appendChild(li);
//         li.textContent=['Total: '+this.Total+' cookies'];
//     }
// } 
// Tokyo.calNumPersonPerH()
// Tokyo.calAvgCookiesPerH()
// Tokyo.listelement()

// const Dubai ={
//     location:'Dubai',
//     min:11,
//     max:38,
//     avg:3.7,
//     numPersonPerH:[],
//     avgCookiesPerH:[],
//     Total:0,
//     calNumPersonPerH:function(){
//         for (let i=0;i<time.length;i++) {
//           this.numPersonPerH.push(this.randomValue(this.min,this.max))  
//         }
//         console.log(this.numPersonPerH);  
//        },
//        randomValue:function (min, max) {
//           return Math.floor(Math.random() * (max - min + 1) + min);
//        },
//        calAvgCookiesPerH:function(){
//            for (let i = 0; i < this.numPersonPerH.length; i++) {  
//                let val=Math.ceil(this.avg*this.numPersonPerH[i])
//                this.Total=this.Total+val
//                this.avgCookiesPerH.push(val)
//            }
//            console.log(this.avgCookiesPerH);
//        },
//        listelement:function(){
//            let cont = document.getElementById('first');
//            let h2 =document.createElement('h2');
//            cont.appendChild(h2);
//            h2.textContent=this.location;
//            let ul=document.createElement('ul')
//            cont.appendChild(ul);
//            let li=null;
//            for (let i = 0; i < time.length; i++) {
//                li=document.createElement('li');
//                ul.appendChild(li);
//                li.textContent=[time[i]+' : '+this.avgCookiesPerH[i]+' cookies'];
//            }
//            li=document.createElement('li');
//            ul.appendChild(li);
//            li.textContent=['Total: '+this.Total+' cookies'];
//     }
// }
// Dubai.calNumPersonPerH()
// Dubai.calAvgCookiesPerH()
// Dubai.listelement()

// const Paris ={
//     location:'Paris',
//     min:20,
//     max:38,
//     avg:2.3,
//     numPersonPerH:[],
//     avgCookiesPerH:[],
//     Total:0,
//     calNumPersonPerH:function(){
//      for (let i=0;i<time.length;i++) {
//        this.numPersonPerH.push(this.randomValue(this.min,this.max))  
//      }
//      console.log(this.numPersonPerH);  
//     },
//     randomValue:function (min, max) {
//        return Math.floor(Math.random() * (max - min + 1) + min);
//     },
//     calAvgCookiesPerH:function(){
//         for (let i = 0; i < this.numPersonPerH.length; i++) {  
//             let val=Math.ceil(this.avg*this.numPersonPerH[i])
//             this.Total=this.Total+val
//             this.avgCookiesPerH.push(val)
//         }
//         console.log(this.avgCookiesPerH);
//     },
//     listelement:function(){
//         let cont = document.getElementById('first');
//         let h2 =document.createElement('h2');
//         cont.appendChild(h2);
//         h2.textContent=this.location;
//         let ul=document.createElement('ul')
//         cont.appendChild(ul);
//         let li=null;
//         for (let i = 0; i < time.length; i++) {
//             li=document.createElement('li');
//             ul.appendChild(li);
//             li.textContent=[time[i]+' : '+this.avgCookiesPerH[i]+' cookies'];
//         }
//         li=document.createElement('li');
//         ul.appendChild(li);
//         li.textContent=['Total: '+this.Total+' cookies'];
//     }
// }
// Paris.calNumPersonPerH()
// Paris.calAvgCookiesPerH()
// Paris.listelement()

// const Lima ={
//     location:'Lima',
//     min:2,
//     max:16,
//     avg:4.6,
//     numPersonPerH:[],
//     avgCookiesPerH:[],
//     Total:0,
//     calNumPersonPerH:function(){
//      for (let i=0;i<time.length;i++) {
//        this.numPersonPerH.push(this.randomValue(this.min,this.max))  
//      }
//      console.log(this.numPersonPerH);  
//     },
//     randomValue:function (min, max) {
//        return Math.floor(Math.random() * (max - min + 1) + min);
//     },
//     calAvgCookiesPerH:function(){
//         for (let i = 0; i < this.numPersonPerH.length; i++) {  
//             let val=Math.ceil(this.avg*this.numPersonPerH[i])
//             this.Total=this.Total+val
//             this.avgCookiesPerH.push(val)
//         }
//         console.log(this.avgCookiesPerH);
//     },
//     listelement:function(){
//         let cont = document.getElementById('first');
//         let h2 =document.createElement('h2');
//         cont.appendChild(h2);
//         h2.textContent=this.location;

//         let ul=document.createElement('ul')
//         cont.appendChild(ul);
//         let li=null;
//         for (let i = 0; i < time.length; i++) {
//             li=document.createElement('li');
//             ul.appendChild(li);
//             li.textContent=[time[i]+' : '+this.avgCookiesPerH[i]+' cookies'];
//         }
//         li=document.createElement('li');
//         ul.appendChild(li);
//         li.textContent=['Total: '+this.Total+' cookies'];
//     }
// }
// Lima.calNumPersonPerH()
// Lima.calAvgCookiesPerH()
// Lima.listelement()
// let students = [];                                    
// function College(name,age,height,likes){
//   this.name =  name;
//   this.age = age;
//   this.height = height;
//   this.likes = likes;
//   students.push(this);
// }
// College.prototype.walk = function(){
//     console.log(`${this.name}  Walking under the rain ${this.height}`);
// }
// College.prototype.talk =function(){
//     console.log(`${this.name} is talking about his ${this.age} all the time`);
