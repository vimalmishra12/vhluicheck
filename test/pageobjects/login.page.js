

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#main-focus-area');
    }

    get inputPassword () {
        return $('#login-pass');
    }

    get btnSubmit () {
        return $('input[type="submit"]');
    }

    async login (username, password) {
        console.log(username)
        await this.inputUsername.waitForDisplayed({ timeout: 50000 });
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
     async  open (path) {
        await console.log(path)
      
         await browser.url(path)
         await browser.pause(50000)
        
    }
}

module.exports = new LoginPage();
