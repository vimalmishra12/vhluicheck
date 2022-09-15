
class HeaderPage {
    /**
     * define selectors using getter methods
     */
    get headerPage () {
        browser.pause(5000)
        return $('[data-tid=text-pageTitle]');
    }
}
module.exports = new HeaderPage();
