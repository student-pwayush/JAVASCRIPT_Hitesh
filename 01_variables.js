const accountid = 123456
let accountemail = "Ayushchandel1999@gmail.com"
var accountpassword = 321654
var city = "kalyanpur"
/* var ham log use nahi karenge kahi bhi kyunki vo aage problems karega isliya ya vala 
  sign lena par jisko ham log SCOPE {} BOLTE HAI(block and functional scope)*/


var city = "kanpur" // var ham logo ka pahle vala hona chahiye tha but isme ham logo ka baad vala leta hai islye ham log var nahi use karte hain//
 
//accountid = 12534// is mein do id ek saath waork nahi karenge//

//let accountstatus;
/* agar kahi par value nahi diya hua hai toh vo ham logo ka undifined show karega  */

console.log(accountid, city);      //yaa ham loga ka single run hoga//

console.log([accountemail, accountid, accountpassword, city]); // ya ham logo ka ek sath show hoga//

console.table([accountemail, accountid, accountpassword, city]);  // isme ham logo ka table mein show hoga// 
