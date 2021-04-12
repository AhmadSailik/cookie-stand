'use strict'
let time=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
const seattle ={
    location:'seattle',
    min:23,
    max:65,
    avg:6.3,
    numPersonPerH:[],
    avgCookiesPerH:[],
    Total:0,
    calNumPersonPerH:function(){
     for (let i=0;i<time.length;i++) {
       this.numPersonPerH.push(this.randomValue(this.min,this.max))  
     }
     console.log(this.numPersonPerH);  
    },
    randomValue:function (min, max) {
       return Math.floor(Math.random() * (max - min + 1) + min);
    },
    calAvgCookiesPerH:function(){
        for (let i = 0; i < this.numPersonPerH.length; i++) {  
            let val=Math.ceil(this.avg*this.numPersonPerH[i]);
            this.Total=this.Total+val;
            this.avgCookiesPerH.push(val);
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
            ul.appendChild(li);
            li.textContent=[time[i]+' : '+this.avgCookiesPerH[i]+' cookies'];
        }
        li=document.createElement('li');
        ul.appendChild(li);
        li.textContent=['Total: '+this.Total+' cookies'];
    }
}
seattle.calNumPersonPerH()
seattle.calAvgCookiesPerH()
seattle.listelement()

const Tokyo ={
    location:'Tokyo',
    min:3,
    max:24,
    avg:1.2,
    numPersonPerH:[],
    avgCookiesPerH:[],
    Total:0,
    calNumPersonPerH:function(){
     for (let i=0;i<time.length;i++) {
       this.numPersonPerH.push(this.randomValue(this.min,this.max))  
     }
     console.log(this.numPersonPerH);  
    },
    randomValue:function (min, max) {
       return Math.floor(Math.random() * (max - min + 1) + min);
    },
    calAvgCookiesPerH:function(){
        for (let i = 0; i < this.numPersonPerH.length; i++) {  
            let val=Math.ceil(this.avg*this.numPersonPerH[i])
            this.Total=this.Total+val
            this.avgCookiesPerH.push(val)
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
            ul.appendChild(li);
            li.textContent=[time[i]+' : '+this.avgCookiesPerH[i]+' cookies'];
        }
        li=document.createElement('li');
        ul.appendChild(li);
        li.textContent=['Total: '+this.Total+' cookies'];
    }
} 
Tokyo.calNumPersonPerH()
Tokyo.calAvgCookiesPerH()
Tokyo.listelement()

const Dubai ={
    location:'Dubai',
    min:11,
    max:38,
    avg:3.7,
    numPersonPerH:[],
    avgCookiesPerH:[],
    Total:0,
    calNumPersonPerH:function(){
        for (let i=0;i<time.length;i++) {
          this.numPersonPerH.push(this.randomValue(this.min,this.max))  
        }
        console.log(this.numPersonPerH);  
       },
       randomValue:function (min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
       },
       calAvgCookiesPerH:function(){
           for (let i = 0; i < this.numPersonPerH.length; i++) {  
               let val=Math.ceil(this.avg*this.numPersonPerH[i])
               this.Total=this.Total+val
               this.avgCookiesPerH.push(val)
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
               ul.appendChild(li);
               li.textContent=[time[i]+' : '+this.avgCookiesPerH[i]+' cookies'];
           }
           li=document.createElement('li');
           ul.appendChild(li);
           li.textContent=['Total: '+this.Total+' cookies'];
    }
}
Dubai.calNumPersonPerH()
Dubai.calAvgCookiesPerH()
Dubai.listelement()

const Paris ={
    location:'Paris',
    min:20,
    max:38,
    avg:2.3,
    numPersonPerH:[],
    avgCookiesPerH:[],
    Total:0,
    calNumPersonPerH:function(){
     for (let i=0;i<time.length;i++) {
       this.numPersonPerH.push(this.randomValue(this.min,this.max))  
     }
     console.log(this.numPersonPerH);  
    },
    randomValue:function (min, max) {
       return Math.floor(Math.random() * (max - min + 1) + min);
    },
    calAvgCookiesPerH:function(){
        for (let i = 0; i < this.numPersonPerH.length; i++) {  
            let val=Math.ceil(this.avg*this.numPersonPerH[i])
            this.Total=this.Total+val
            this.avgCookiesPerH.push(val)
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
            ul.appendChild(li);
            li.textContent=[time[i]+' : '+this.avgCookiesPerH[i]+' cookies'];
        }
        li=document.createElement('li');
        ul.appendChild(li);
        li.textContent=['Total: '+this.Total+' cookies'];
    }
}
Paris.calNumPersonPerH()
Paris.calAvgCookiesPerH()
Paris.listelement()

const Lima ={
    location:'Lima',
    min:2,
    max:16,
    avg:4.6,
    numPersonPerH:[],
    avgCookiesPerH:[],
    Total:0,
    calNumPersonPerH:function(){
     for (let i=0;i<time.length;i++) {
       this.numPersonPerH.push(this.randomValue(this.min,this.max))  
     }
     console.log(this.numPersonPerH);  
    },
    randomValue:function (min, max) {
       return Math.floor(Math.random() * (max - min + 1) + min);
    },
    calAvgCookiesPerH:function(){
        for (let i = 0; i < this.numPersonPerH.length; i++) {  
            let val=Math.ceil(this.avg*this.numPersonPerH[i])
            this.Total=this.Total+val
            this.avgCookiesPerH.push(val)
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
            ul.appendChild(li);
            li.textContent=[time[i]+' : '+this.avgCookiesPerH[i]+' cookies'];
        }
        li=document.createElement('li');
        ul.appendChild(li);
        li.textContent=['Total: '+this.Total+' cookies'];
    }
}
Lima.calNumPersonPerH()
Lima.calAvgCookiesPerH()
Lima.listelement()