document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nume = document.getElementById('name').value;
            const telefon = document.getElementById('phone').value;
            const data = document.getElementById('date').value;
            const tipEveniment = document.getElementById('type').value;
            alert(`Mulțumim, ${nume}! Solicitarea pentru evenimentul de tip "${tipEveniment}" din data de ${data} a fost trimisă cu succes. Te vom contacta la numărul ${telefon}.`);
            bookingForm.reset();
        });
    }
});