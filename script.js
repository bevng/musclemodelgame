function openTab(evt, tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the current tab
    document.getElementById(tabName).classList.add('active');

    // Add active class to the clicked button
    evt.currentTarget.classList.add('active');
}


function openPopup(evt, title, content) {
    const modal = document.getElementById('popupModal');
    document.getElementById('popupTitle').textContent = title;
    document.getElementById('popupContent').textContent = content;
    modal.classList.add('active');
}

function closePopup(evt) {
    // If clicking on the modal background, close it
    if (evt && evt.target.id !== 'popupModal') {
        return;
    }
    
    const modal = document.getElementById('popupModal');
    modal.classList.remove('active');
}