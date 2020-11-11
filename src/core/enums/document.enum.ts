enum DocumentTypes {
    CC = 0,
    TI = 1,
    Nit = 2,
    Rut = 3,
    Passport = 4,
    CE = 5
}

const documentTypes = Object.freeze({
    CC: 'CC',
    TI: 'TI',
    Nit: 'Nit',
    Rut: 'Rut',
    Passport: 'Passport',
    CE: 'CE'
})

export { DocumentTypes, documentTypes }