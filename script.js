document.addEventListener('DOMContentLoaded', function () {
    const roomTypeSelect = document.getElementById('roomType');
    const sharedFields = document.getElementById('sharedFields');
    const wifiCheckbox = document.getElementById('wifi');
    const wifiCharges = document.getElementById('wifiCharges');

    roomTypeSelect.addEventListener('change', function () {
        if (roomTypeSelect.value === 'shared') {
            sharedFields.style.display = 'block';
        } else {
            sharedFields.style.display = 'none';
        }
    });

    wifiCheckbox.addEventListener('change', function () {
        if (wifiCheckbox.checked) {
            wifiCharges.style.display = 'block';
        } else {
            wifiCharges.style.display = 'none';
        }
    });

    const form = document.getElementById('dataForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle form submission here
        // You can access form fields using their IDs and retrieve their values
    });
});
