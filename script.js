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


let timerInterval = null;

function startNewGame() {
    // Stop any existing timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    // Store the game start time
    localStorage.setItem('gameStartTime', Date.now());
    // Redirect to cards page
    window.location.href = 'cards.html?newGame=true';
}

function startTimer(minutes = 15) {
    const totalSeconds = minutes * 60;
    
    const updateDisplay = () => {
        const gameStartTime = localStorage.getItem('gameStartTime');
        if (!gameStartTime) return;
        
        const elapsedMs = Date.now() - parseInt(gameStartTime);
        const elapsedSeconds = Math.floor(elapsedMs / 1000);
        const timeRemaining = totalSeconds - elapsedSeconds;
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            localStorage.removeItem('gameStartTime');
            showTimeUpPopup();
            return;
        }
        
        const mins = Math.floor(timeRemaining / 60);
        const secs = timeRemaining % 60;
        const display = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        
        const timerElement = document.getElementById('timerDisplay');
        if (timerElement) {
            timerElement.textContent = display;
            
            // Change color as time runs out
            if (timeRemaining <= 300) { // Last 5 minutes
                timerElement.style.color = '#ff6b6b';
            }
            if (timeRemaining <= 60) { // Last minute
                timerElement.style.color = '#ff0000';
                timerElement.style.fontWeight = 'bold';
            }
        }
    };
    
    updateDisplay(); // Show initial time
    
    timerInterval = setInterval(updateDisplay, 1000);
}

function showTimeUpPopup() {
    const modal = document.getElementById('popupModal');
    const popupTitle = document.getElementById('popupTitle');
    const popupContent = document.getElementById('popupContent');
    
    popupTitle.textContent = 'Time is Up!';
    popupContent.innerHTML = `
        <h2 style="color: #ff0000; text-align: center; margin-bottom: 20px;">Time\'s Up!</h2>
        <p style="font-size: 18px; text-align: center; margin-bottom: 20px;">
            Your 15 minutes of gameplay have ended.
        </p>
        <p style="font-size: 16px; text-align: center; color: #666; margin-bottom: 30px;">
            Please count your points and tell a TA how many points your team got.
        </p>
        <div style="text-align: center;">
            <button onclick="window.location.href='index.html'" style="padding: 12px 40px; font-size: 16px;">
                Reset game for next lab group
            </button>
        </div>
    `;
    
    document.body.style.overflow = 'hidden';
    modal.classList.add('active');
}

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
    
    // Check if a game is already in progress
    const gameStartTime = localStorage.getItem('gameStartTime');
    if (gameStartTime) {
        startTimer(15);
    }
});

window.addEventListener('beforeunload', () => {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
});