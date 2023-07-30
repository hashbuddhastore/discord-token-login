if (document.querySelector('.discord-token-login-popup')) {
    const tokenInput = document.querySelector('#token');
    const submitButton = document.querySelector('#submit');

    submitButton.addEventListener('click', () => {
        const tokenValue = tokenInput.value;

        if (tokenValue !== '') {
            tokenInput.style.border = '1px solid #222428';

            chrome.tabs.executeScript(null, {
                code: `const token = '${tokenValue}';`
            }, () => chrome.tabs.executeScript(null, {file: 'login.js'}));
        } else {
            tokenInput.style.border = '1px solid #ee4445';
        }
    });
}
