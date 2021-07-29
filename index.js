const { emailIsValid, phoneIsValid } = require('./src/Validation');

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
            case 'number':
                onChangeText(text.replace(/\D/g, ''));
                break;
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
                        .replace(/\D/g, '')
                        .replace(/(\d{2})(\d)/, '$1/$2')
                        .replace(/(\d{2})(\d)/, '$1/$2')
                        .replace(/(\d{4})\d+?$/, '$1')
                );
                break;
            case 'money':
                onChangeText(
                    text
                        .replace(/\D/g, '')
                        .replace(/^(\d{1})$/g, '0,0$1')
                        .replace(/^(\d{2})$/g, '0,$1')
                        .replace(/^(\d{1,})(\d{2})$/g, '$1,$2')
                        .replace(/^00(,\d{2})$/g, '0$1')
                        .replace(/^00(\d)(,\d{2})$/g, '$1$2')
                        .replace(/^0(\d)(,\d{2})$/g, '$1$2')
                        .replace(/^(\d{1,})(,\d{2})$/g, 'R$ $1$2')
                );
                break;
            default:
                break;
        }
    };
}

/**
 * Sort array of object by key property
 * @param {string} k
 */
function sortByKey(k) {
    return function (a, b) {
        var textA = a[k];
        var textB = b[k];
        if (typeof textA === 'string') textA = textA.toUpperCase().trim();
        if (typeof textB === 'string') textB = textB.toUpperCase().trim();
    };
}

/**
 * Sort array of object alphabetically by child property
 * @param {string} k
 * @deprecated Use sortByKey instead
 */
var sortAlphabeticallyByChild = sortByKey;

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

function numberFromText(text) {
    if (!text) return 0;
    let number = text.replace(/R\$/g, '').replace(',', '.').trim();
    number = Number(number);
    return number;
}

module.exports = {
    formatDateBR,
    formatTextToFilter,
    maskText,
    sortByKey,
    sortAlphabeticallyByChild,
    formatMoneyBR,
    capitalize,
    emailIsValid,
    phoneIsValid,
    numberFromText
};
