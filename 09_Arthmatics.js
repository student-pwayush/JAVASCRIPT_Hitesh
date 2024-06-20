// // ++++++++++++++++++++ NUMS  ++++++++++
// //const score = 400
// //console.log(score);

// const balance = new Number(500)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// // isme ham logo ki digit ki length show karayega 

// console.log(balance.toFixed(4));
// // isme ham log tofixed ki value badhayenge utna hi .0000 ki value badegi

// const anotherString = new Number(452.485)

// console.log(anotherString.toPrecision(4));
// // isme ham logo ki 452 ke baad jo nhi point mein value hpoti hai usko approx total kar deta hai jo ki naswer .. ayega 425 ki jagah = 49

// const hundreds = 100000000
// console.log(hundreds.toLocaleString().length);
// //isme ham logo ko pta chalta hai kitna zero lage hai (jo ki videshi duniye ki tarah show karenge)
// console.log(hundreds.toLocaleString('en-IN'));

// // isme ham logo ko pta chalta hai kitna zero lage hai  uke lie 'en-IN' laga denga (jo india digfit ki tarah show karenge)

// //  abhi in sabhi consloe.log ko comments kar diye hai jisme problems na hi aage..... 

// // +++++++++++++++++++++++++    MATHS   +++++++++++

// //console.log(Math);
// // isme ham logo ki bohat bvalue hai jisa ki object , [array], {} etc 

// //console.log(Math);
// console.log(Math.abs(-4));
// // isme ham log ka sign change hoga bs baki value vahi rahegi

// console.log(Math.round(4.6));
// //isme ham logo ki value 5 aayegi roung value lega 

// console.log(Math.ceil(5.2));
// // isme ham logo ka sidhe 5.2 hai toh 6 lega 

// console.log(Math.floor(4.9));
// // agar ham logo ki value 4 hai toh voo uthna na hi lega jitna hai . ki value nahi leta hai 
// // floor ham logon ki round off kar deta hai choti value k liye is;ye choti value aati hain 

// console.log(Math.min(4, 3, 6, 8));
// //sime choti value leta hai 

// console.log(Math.max(4, 3, 6, 8));
// //isme badi value leta hain

// console.log(Math.random());
// // isme ham logo ki value always 0 se 1 ki bich mein aayegi aur always change karegi


// console.log(Math.random());
// console.log(Math.floor(Math.random()*10) + 1);
// // *10 isliye kiya hai ki jo value aaye vo 0 na aaye aur +1 islye liya hai ki 0 na aaye point k baad bhi



// // == NOTE -  important (1) 

// const min = 10
// const max = 20

// console.log((Math.random() * (max - min + 1)) + min)
// console.log(Math.floor(Math.random() * (max - min + 1 )) + min)
// //isme ham logo badi value lenge jo ki min se

// const newmin = 50
// const newmax = 100

// console.log(Math.floor(Math.random() * (newmin - newmax + 1 )) - newmin)
// //isme ham logo choti value lenge jo ki min se
