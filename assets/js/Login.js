/*
* Login Service
*/
(function () {
    let userNameValue = window.localStorage.getItem('user');

    const buttonSubmit = document.getElementById('userNameInputSubmit');
    const inputUserName = document.getElementById('userNameInput');
    const userNameTargetSpan = document.getElementById('userName');

    const error = {
        status: false,
        erorrText: 'Fill User Name field, please'
    }

    if (userNameValue) {
        userNameTargetSpan.textContent = userNameValue;
        hideUserSetBlock();
        showUserBlock();
    }

    buttonSubmit.addEventListener('click', () => {
        let userNameValue = inputUserName.value;
        if (userNameValue) {
            userNameTargetSpan.textContent = userNameValue;
            window.localStorage.setItem('user', userNameValue);
            hideUserSetBlock();
            showUserBlock();
        } else {
            alert(error.erorrText);
        }
    }, false);

    function hideUserSetBlock() {
        const userBlock = document.getElementById('userSet');
        userBlock.classList.add('d-none');
    }

    function showUserBlock() {
        const userBlock = document.getElementById('userBox');
        userBlock.classList.add('d-block');
    }
}());