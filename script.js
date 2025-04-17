// script.js
function submitForm(event) {
  event.preventDefault();
  alert("Thank you for contacting us! We'll get back to you soon.");
}
// script.js (Updated)

function submitBooking(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  
  alert(`Booking Confirmed! \nName: ${name} \nService: ${service} \nDate: ${date}`);
}

document.getElementById('booking-form').addEventListener('submit', submitBooking);
