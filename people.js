const { makePerson } = require('./names.js');
const { addHobbies } = require('./hobbies.js');


function combinePersonHobbies() {
    const result = makePerson('damiano', 'maugeri')
    result.hobbies = addHobbies('calcio', 'tennis', 'basket').hobbies

    return result


}
console.log(combinePersonHobbies())