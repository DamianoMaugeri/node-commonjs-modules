function makePerson(firstName, lastName) {
    return {
        firstName,
        lastName
    }


}

console.log(makePerson('damiano', 'maugeri'))

module.export = { makePerson }