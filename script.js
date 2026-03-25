function openTab(evt, tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Show the current tab
    document.getElementById(tabName).classList.add('active');

    // Add active class to the clicked button
    evt.currentTarget.classList.add('active');
}

function openPopupFromCard(cardElement) {
    const cardContent = cardElement.querySelector('.card-content');
    if (!cardContent) {
        console.warn('No card content found for', cardElement);
        return;
    }

    const modal = document.getElementById('popupModal');
    const cardId = cardElement.dataset.cardId || 'unknown';
    const cardTitle = cardElement.dataset.cardTitle || cardId;
    const modalContent = document.getElementById('popupContent');

    document.getElementById('popupTitle').textContent = cardTitle;
    modalContent.innerHTML = cardContent.innerHTML;
    modalContent.insertAdjacentHTML('beforeend', `<p style="margin-top:1rem; font-size:0.9rem; color:#555;">Card ID: ${cardId}</p>`);
    document.body.style.overflow = 'hidden';  // Prevent scrolling when popup is open
    modal.classList.add('active');
}

function closePopup(evt) {
    if (evt && evt.target.id !== 'popupModal') {
        return;
    }
    const modal = document.getElementById('popupModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';  // Restore scrolling when popup is closed
}

function attachCardEvents() {
    const cards = document.querySelectorAll('.grey-card[data-card-id], .level1-card[data-card-id]');
    cards.forEach(card => {
        card.addEventListener('click', () => openPopupFromCard(card));
    });
}

// Easy editing guide for non-developers:
// 1. Open cards.html.
// 2. Find the card you want and edit its hidden .card-content block.
// 3. Edit the content like regular HTML.
// 4. To add a new card, duplicate a card block and change its label, data attributes, and popup content.

window.addEventListener('DOMContentLoaded', () => {
    attachCardEvents();
});
