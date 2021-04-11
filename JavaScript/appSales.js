'use strict'
let time=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
const seattle ={
    location:'seattle',
    min:23,
    max:65,
    avg:6.3,
    numPersonPerH:[],
    avgCookiesPerH:[],
    numPerHo:function(){
     for (let i=0;i<time.length;i++) {
       this.numPersonPerH.push(this.randomValue(this.min,this.max))  
     }
     console.log(this.numPersonPerH);  
    },
    randomValue:function (min, max) {
       return Math.floor(Math.random() * (max - min + 1) + min);
    },
    mltiplyAvgAndRandom:function(){
        for (let i = 0; i < this.numPersonPerH.length; i++) {  
            this.avgCookiesPerH.push(Math.floor(this.avg*this.numPersonPerH[i]))
        }
        console.log(this.avgCookiesPerH);
    },
    listelement:function(){
        let cont = document.getElementById('first');
        let h2 =document.createElement('h2');
        cont.appendChild(h2);
        h2.textContent=this.location;
        let ul=document.createElement('ul')
        cont.appendChild(ul);
        let li=null;
        for (let i = 0; i < time.length; i++) {
            li=document.createElement('li');
            cont.appendChild(li);
            li.textContent=[time[i]+' : '+this.avgCookiesPerH[i]+' cookies'];
        }
    }
}
seattle.numPerHo()
seattle.mltiplyAvgAndRandom()
seattle.listelement()

const Tokyo ={
    location:'Tokyo',
    min:3,
    max:24,
    avg:1.2,
    numPersonPerH:[],
    avgCookiesPerH:[],
    numPerHo:function(){
     for (let i=0;i<time.length;i++) {
       this.numPersonPerH.push(this.randomValue(this.min,this.max))  
     }
     console.log(this.numPersonPerH);  
    },
    randomValue:function (min, max) {
       return Math.floor(Math.random() * (max - min + 1) + min);
    },
    mltiplyAvgAndRandom:function(){
        for (let i = 0; i < this.numPersonPerH.length; i++) {  
            this.avgCookiesPerH.push(Math.floor(this.avg*this.numPersonPerH[i]))
        }
        console.log(this.avgCookiesPerH);
    },
    listelement:function(){
        let cont = document.getElementById('first');
        let h2 =document.createElement('h2');
        cont.appendChild(h2);
        h2.textContent=this.location;
        let ul=document.createElement('ul')
        cont.appendChild(ul);
        let li=null;
        for (let i = 0; i < time.length; i++) {
            li=document.createElement('li');
            cont.appendChild(li);
            li.textContent=[time[i]+' : '+this.avgCookiesPerH[i]+' cookies'];
        }
    }
}
Tokyo.numPerHo()
Tokyo.mltiplyAvgAndRandom()
Tokyo.listelement()
