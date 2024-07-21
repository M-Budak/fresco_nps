function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(event, modalId) {
    if (event.target === document.getElementById(modalId)) {
        document.getElementById(modalId).style.display = 'none';
    }
}

function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup(event) {
    if (event.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
}
