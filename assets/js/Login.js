/*
* Login Service
*/
(function () {
    let userNameValue = window.localStorage.getItem('user');

    const buttonSubmit = document.getElementById('userNameInputSubmit');
    const buttonLogout = document.getElementById('logoutBtn');
    const inputUserName = document.getElementById('userNameInput');
    const userNameTargetSpan = document.getElementById('userName');
    const dataLayer = window.dataLayer || (window.dataLayer = []);

    const error = {
        status: false,
        erorrText: 'Fill User Name field, please'
    }

    if (userNameValue) {
        userNameTargetSpan.textContent = userNameValue;
        hideLogin();
        showUserBlock();
    }

    buttonSubmit.addEventListener('click', () => {
        let userNameValue = inputUserName.value;
        if (userNameValue) {
            userNameTargetSpan.textContent = userNameValue;
            inputUserName.value = '';
            window.localStorage.setItem('user', userNameValue);
            hideLogin();
            showUserBlock();
            dataLayer.push({
                'event': 'Parent_Site_Logined'
            });
            console.log('Login');
        } else {
            alert(error.erorrText);
        }
    }, false);

    buttonLogout.addEventListener('click', () => {
        window.localStorage.removeItem('user');
        hideUserBlock();
        showLogin();
        dataLayer.push({
            'event': 'Parent_Site_Unlogined'
        });

        console.log('Logout');
    }, false);

    function hideLogin() {
        const userBlock = document.getElementById('userSet');
        userBlock.classList.add('d-none');
    }

    function showLogin() {
        const userBlock = document.getElementById('userSet');
        userBlock.classList.remove('d-none');
    }

    function showUserBlock() {
        const userBlock = document.getElementById('userBox');
        const userButton = document.getElementById('logoutBtn');
        userBlock.classList.add('d-block');
        userButton.classList.add('d-block');
    }

    function hideUserBlock() {
        const userBlock = document.getElementById('userBox');
        const userButton = document.getElementById('logoutBtn');
        userBlock.classList.remove('d-block');
        userButton.classList.remove('d-block');
    }
}());