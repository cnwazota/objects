// Question 1

function InstagramPost(handle, content, imageLink, numberOfViews, numberOfLikes) {
    this.Handle = handle;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
};

// Question 2

const post1 = new InstagramPost("Chinenye", " Car picture", "http://nicepics.com", 324, 40);
const post2 = new InstagramPost("Tobechukwu", "Dancing video", "http://instagram.com", 5000, 254);

console.log(post1);
console.log(post2);


// QUESTION 3A

// A createPerson() factory function that takes name, age and location as parameters.
function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    }
};

// An object musaObj created from createPerson factory function taking arguments.
const musaObj = createPerson("Musa", 19, "Lekki, Lagos State");
console.log(musaObj);



//QUESTION 3B

// A factory function createJambScores() that takes eng, govt, lit, crk as parameters.
function createJambScores(Eng, Govt, Lit, Crk) {
    return {
        Eng: Eng,
        Govt: Govt,
        Lit: Lit,
        Crk: Crk
    }
};

// An object musaScore created from createJambScores factory function taking arguments.
const musaScore = createJambScores(70, 85, 82, 94);
console.log(musaScore);

// Merging the object musaScore as a property to musaObj object
Object.assign(musaObj, musaScore);
console.log(musaObj);




// QUESTION 4
// What are the different ways you can clone an object? Give examples for each of them.

// 1. using Object.assign({}, object)
// 2. using the spread operator {...{}, ...object}
// 3. using the JSON.parse(JSON.stringify(object))

// 1. using Object.assign(object)
const student = {
    name: "Chinenye",
    age: 33,
    gender: "female"
};

const studentCopy = Object.assign(student);
console.log(student);
console.log(studentCopy);

// 2. using spread operator
const cars = {
    car1: "Toyota",
    car2: "Chevrolet",
    car3: "Honda",
    car4: "Volkswagen",
    car5: "Ford",
    car6: "Kia"
};

const carsCopy = { ...cars };
console.log(cars);
console.log(carsCopy);

// 3. using the JSON.parse(JSON.stringify())
const camera = {
    type1: "camon",
    type2: "canon",
    type3: "sony",
    type4: "Nikon"
};

const cameraCopy = JSON.parse(JSON.stringify(camera));
console.log(camera);
console.log(cameraCopy);


// QUESTION 5

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
};

// for (let key in presidentialCandidates) {
//     console.log(`${presidentialCandidates[key]} is the presidential candidate for ${key}`);
// }

for (let key of Object.keys(presidentialCandidates)) {
    console.log(`${presidentialCandidates[key]} is the presidential candidate for ${key}`);
}