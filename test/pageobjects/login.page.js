

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user_session_username');
    }

    get inputPassword () {
        return $('#user_session_password');
    }

    get btnSubmit () {
        return $('input[type="submit"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open (path) {
        return browser.url(path)
    }
}

module.exports = new LoginPage();
