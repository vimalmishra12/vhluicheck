
class HeaderPage {
    /**
     * define selectors using getter methods
     */
    get headerPage () {
        return $('[data-tid=text-pageTitle]');
    }
}
module.exports = new HeaderPage();
