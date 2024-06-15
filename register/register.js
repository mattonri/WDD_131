import {participantTemplate, successTemplate } from "./Templates.js";

const addButton = document.getElementById('add');
var participants = 1;
addButton.addEventListener('click', function() {
    participants += 1;
    addButton.insertAdjacentHTML('beforebegin', participantTemplate(participants));

});


const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();

    
    var fee_total = 0;
    for (let i = 1; i <= participants; i++) {
        fee_total += parseInt(form.elements[`fee${i}`].value);
    }
    console.log(fee_total);
    const adultName = form.elements.adult_name.value;
    const info = {
        adultName: adultName,
        numParticipants: participants,
        feeTotal: fee_total
    };
    const successMessage = successTemplate(info);
    console.log(successMessage)    
    form.classList.add('hidden');
    form.insertAdjacentHTML('afterend', successMessage);
}





// I misunderstood and thought you wanted the information printed below
// const form = document.getElementById('myForm');
// var participant_info = [];
// // get Inputs
// const participant_id = participants
// const fName = form.elements.fName.value + participants;
// const fee = form.elements.fee.value;
// const date = form.elements.date.value;
// const activity = form.elements.activity.value;
// participant_info.add((participant_id, fName, fee, date, activity))
// participants += 1
// // Print inputs
// console.log(`First Name: ${fName}`);
// console.log(`activity: ${activity}`);
// console.log(`fee: ${fee}`);
// console.log(`date: ${date}`);

