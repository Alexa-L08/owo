document.querySelectorAll('.batman-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        const messageId = this.getAttribute('data-message');
        const message = document.getElementById(messageId);
        if (message) {
            message.classList.remove('hidden');         }
    });
});
