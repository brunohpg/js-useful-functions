// https://pt.stackoverflow.com/questions/11045/express%C3%A3o-regular-para-validar-um-campo-que-aceita-cpf-ou-cnpj

function emailIsValid(email) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
}

function phoneIsValid(phone) {
    let reg = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/;
    return reg.test(phone);
}

function cpfIsValid(cpf) {
    let reg = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;
    return reg.test(cpf);
}

function cnpjIsValid(cnpj) {
    let reg = /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/;
    return reg.test(cnpj);
}

function cpfcnpjIsValid(cpfcnpj) {
    let reg =
        /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
    return reg.test(cpfcnpj);
}

module.exports = {
    emailIsValid,
    phoneIsValid
};
