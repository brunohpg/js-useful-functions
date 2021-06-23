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

function uuidIsValid(uuid) {
    const reg =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return re.test(String(uuid).toLowerCase());
}

module.exports = {
    emailIsValid,
    phoneIsValid
};
