
let availableHours = ['5 PM','6 PM','7 PM','8 PM','9 PM',
'10 PM','11 PM','12 AM','1 AM','2 AM','3 AM','4 AM']


var familyA = {
	hourly: 15,
	afterHours: 20
	 
}

var familyB = {
	hourly: 12,
	afterHours: 16,
	special: 8
}

var familyC = {
	hourly: 21,
	afterHours: 15
}

function calculateTotalPay (family,startTime,endTime) {

let payDay = 0;
// let startingHour = parseInt(startTime[0], 10);
// let endingHour = parseInt(endTime[0], 10);
// let hoursArray = availableHours.slice(availableHours.indexOf(startTime),availableHours.indexOf(endTime))

if (availableHours.indexOf(startTime) > availableHours.indexOf(endTime)) {
	return 'Starting time must be before ending time.'
}

if(family === familyA){

	for(let i = 0; i < availableHours.length; i++) {

		if (availableHours[i] < 6) {
			 payDay += family.hourly; 
		} 
		payDay += family.afterHours;
	}
 }  

 else if(family === familyB){

	for(let i = 0; i < availableHours.length; i++) {

		if (availableHours[i] < 5) {
			 payDay += family.hourly; 
		} 
		else if (availableHours[i] > 4 && availableHours[i] < 8) {
			payDay += family.special;
		}
		payDay += family.afterHours;
	}
 }

  else if(family === familyC){

	for(let i = 0; i < availableHours.length; i++) {

		if (availableHours[i] < 4) {
			 payDay += family.hourly; 
		} 
		payDay += family.afterHours;
	}
 }    
return 'Total Pay: $' + payDay
}

calculateTotalPay(familyC,'5 PM','12 AM')