"use strict";

window.onload = init;  


function init() {
    // Find the addBtn
    const btntotal = document.getElementById("btntotal");
    
    btntotal.onclick = onbtntotalClicked; 
   
   
     
 }

 function onbtntotalClicked()
 {
    let baserental=getrentalamount();
    let optionamount=optionsamount();
    let underageamount=getunderageamount();
    let totalvalue=baserental+optionamount+underageamount;
    document.getElementById("txttotal").value = totalvalue;
 }

 function getrentalamount()
 {
    let numberofdays=document.getElementById("numberdays").value;
    let carrental=numberofdays * 29.99;
  
    document.getElementById("txtrental").value = carrental;
    return carrental;
 }

 function optionsamount()
 {
   
let numberofdays=document.getElementById("numberdays").value;
 
 let finaloptionvalue=0;
 
 let extraPerDay = 0;

let tollTagChkbox = document.getElementById("electrictag");
if (tollTagChkbox.checked) {
   extraPerDay += 3.95;
}

let gpsChkbox = document.getElementById("gps");
if (gpsChkbox.checked) {
   extraPerDay += 2.95;
}

let roadsideChkbox = document.getElementById("roadside");
if (roadsideChkbox.checked) {
   extraPerDay += 2.95;
}
 finaloptionvalue=extraPerDay *numberofdays;
 document.getElementById("txtoptions").value = finaloptionvalue;
return finaloptionvalue;
 }

 function getunderageamount()
 {
    let yesRadioBtn = document.getElementById("yesradio");
    let noRadioBtn = document.getElementById("noradio");
    
    let rentalamount=getrentalamount();
    let basePremium = 0;
    if (yesRadioBtn.checked) {
        
        basePremium = rentalamount*(30/100);
    } 
    else if (noRadioBtn.checked) {
       basePremium = 0;
    }
    document.getElementById("txtunder25").value = basePremium;
    return basePremium;
   
 }
