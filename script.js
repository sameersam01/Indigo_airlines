document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search-button');
  const modal = document.getElementById('flight-status-modal');
  const modalBody = document.getElementById('modal-body');
  const closeButton = document.querySelector('.close-button');
  const notifyButton = document.getElementById('notify-button');
  const notifyEmail = document.getElementById('notify-email');

  // Function to handle search button click
  searchButton.addEventListener('click', () => {
    const departing = document.getElementById('departing').value;
    const arriving = document.getElementById('arriving').value;
    const flightNum = document.getElementById('flight-num').value;
    const pnr = document.getElementById('pnr').value;
    const travelDate = document.getElementById('travel-date').value;

    if (!departing || !arriving || !flightNum || !pnr || !travelDate) {
      alert('Please fill in all the fields.');
      return;
    }

    const mockData = {
      flightNumber: flightNum,
      departing:departing,
      arriving:arriving,
      status: 'On Time',
      departureTime: '10:00 AM',
      arrivalTime: '12:00 PM',
    };

    modalBody.innerHTML = `
      <p><strong>Flight Number:</strong> ${mockData.flightNumber}</p>
      <p><strong>Departing from:</strong> ${mockData.departing}</p>
      <p><strong>Arriving at:</strong> ${mockData.arriving}</p>
      <p><strong>Status:</strong> ${mockData.status}</p>
      <p><strong>Departure Time:</strong> ${mockData.departureTime}</p>
      <p><strong>Arrival Time:</strong> ${mockData.arrivalTime}</p>
    `;

    modal.style.display = 'flex';
  });

  // Close modal
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });



});
