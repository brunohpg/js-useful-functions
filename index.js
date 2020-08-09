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
 * Format text to lowercase and without special caracteres
 * @param {string} text
 */
function formatTextToFilter(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
}

module.exports = {
    formatDateBR,
    formatTextToFilter
};
