/**
 * Fetches browser's language preference
 * @return {string}
 */
const getBrowserLanguagePreference = () => (
    typeof window === 'undefined' ? null :
    (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language ||
    window.navigator.userLanguage ||
    window.navigator.browserLanguage
);

export default () => {
    const languagePreference = getBrowserLanguagePreference();
    if (!languagePreference) {
        return 'Japanese';
    }
    if (languagePreference.indexOf('ja') >= 0) {
        return 'Japanese';
    }
    return 'English';
};
