/**
 * Format Date object to Brazil format
 * @param {Date} date
 * @returns {string} date as DD/MM/YYYY
 */
function formatDateBR(date) {
    let day = date.getDate();
    day = day.toString().length < 2 ? `0${day}` : day;
    let month = date.getMonth() + 1;
    month = month.toString().length < 2 ? `0${month}` : month;
    return `${day}/${month}/${date.getFullYear()}`;
}

/**
 * Format text to lowercase and without special characters
 * @param {string} text
 */
function formatTextToFilter(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
}

/**
 * Mask text
 * @param {string} maskType
 * @param {Function} onChangeText
 * @returns {Function}
 */
function maskText(maskType, onChangeText) {
    return function (text) {
        switch (maskType) {
            case 'cpf':
                onChangeText(
                    text
                        .replace(/\D/g, '')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                        .replace(/(-\d{2})\d+?$/, '$1')
                );
                break;
            case 'cnpj':
                onChangeText(
                    text
                        .replace(/\D/g, '')
                        .replace(/(\d{2})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d)/, '$1/$2')
                        .replace(/(\d{4})(\d)/, '$1-$2')
                        .replace(/(-\d{2})\d+?$/, '$1')
                );
                break;
            case 'phone':
                onChangeText(
                    text
                        .replace(/\D/g, '')
                        .replace(/(\d{2})(\d)/, '($1) $2')
                        .replace(/(\d{4})(\d)/, '$1-$2')
                        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
                        .replace(/(-\d{4})\d+?$/, '$1')
                );
                break;
            case 'cep':
                onChangeText(
                    text
                        .replace(/\D/g, '')
                        .replace(/(\d{5})(\d)/, '$1-$2')
                        .replace(/(-\d{3})\d+?$/, '$1')
                );
                break;
            case 'data':
                onChangeText(
                    text
                        .replace(/\D/g, "")
                        .replace(/(\d{2})(\d)/, "$1/$2")
                        .replace(/(\d{2})(\d)/, "$1/$2")
                        .replace(/(\d{4})\d+?$/, "$1")
                );
                break;
            default:
                break;
        }
    };
}

/**
 * Sort array of object alphabetically by child property
 * @param {string} k
 */
function sortAlphabeticallyByChild(k) {
    return function (a, b) {
        var textA = a[k].toUpperCase().trim();
        var textB = b[k].toUpperCase().trim();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
    };
}

/**
 * Format number as: 100000.00 to 100.000,00
 * @param {Number} value
 */
function formatMoneyBR(value) {
    return value
        .toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

/**
 * Return text with first letter to uppercase
 * @param {string} text
 * @returns {string}
 */
function capitalize(text) {
    return text.replace(/^\w/, c => c.toUpperCase());
}

module.exports = {
    formatDateBR,
    formatTextToFilter,
    maskText,
    sortAlphabeticallyByChild,
    formatMoneyBR,
    capitalize
};
