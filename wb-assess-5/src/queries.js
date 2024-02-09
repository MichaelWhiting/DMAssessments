import { Op } from 'sequelize';
import { Animal, Human } from './model.js';

// Get the human with the primary key 2
export const query1 = await Human.findByPk(2);

// Get the first animal whose species is "fish"
export const query2 = await Animal.findOne({
    where: {
        species: "fish"
    }
});

// Get all animals belonging to the human with primary key 5
export const query3 = await Animal.findAll({
    where: {
        human_id: 5
    }
});

// Get all animals born in a year greater than (but not equal to) 2015.
export const query4 = await Animal.findAll({
    where: {
        birth_year: {[Op.gt]: 2015}
    }
});

// Get all the humans with first names that start with "J"
export const query5 = await Human.findAll({
    where: { 
        fname: {[Op.startsWith]: "J"}
    }
});

// Get all the animals who don't have a birth year
export const query6 = await Animal.findAll({
    where: {
        birth_year: null
    }
});

// Get all the animals with species "fish" OR "rabbit"
export const query7 = await Animal.findAll({
    where: {
        species: {[Op.or]: ["fish", "rabbit"]}
    }
});

// Get all the humans who DON'T have an email address that contains "gmail"
export const query8 = await Human.findAll({
    where: {
        email: {[Op.notILike]: "%gmail%"}
    }
});

// console.log(query1);
// console.log(query2);
// console.log(query3);
// console.log(query4);
// console.log(query5);
// console.log(query6);
// console.log(query7);
// console.log(query8);

// Continue reading the instructions before you move on!

// Print a directory of humans and their animals
export async function printHumansAndAnimals() {
    const allHumans = await Human.findAll();
    let directory = "";

    allHumans.forEach(async (human, i) => {        
        const animals = await human.getAnimals();
        directory += `\n ${human.getFullName()}` // add the humans name

        animals.forEach((animal) => {
            directory += `\n - ${animal.name}, ${animal.species}` // adds a - with the animal name and species
        })

        if (i === allHumans.length - 1) { // checks if its on the last person, if so then it prints/returns the string
            console.log(directory);
            return directory;
        }
    })
}


printHumansAndAnimals();

// Return a Set containing the full names of all humans
// with animals of the given species.
export async function getHumansByAnimalSpecies(species) {
    const humans = new Set();
    // console.log(humans);
    const animals = await Animal.findAll({
        where: {
            species: species
        }
    });

    // when returning in the forEach, it was returning to the forEach callback instead of the getHumansByAnimalSpecies();
    // animals.forEach(async (animal, i) => {
    //     const human = await Human.findByPk(animal.humanId); // gets the human tied to that animal
    //     humans.add(human.getFullName()); // adds the first name

    //     if (i === animals.length - 1) {
    //         console.log("Log: ", humans);
    //     }
    // })
    
    for (let i = 0; i < animals.length; i++) {
        const human = await Human.findByPk(animals[i].humanId); // gets the human tied to that animal
        humans.add(human.getFullName()); // adds the first name
    
        if (i === animals.length - 1) {
            return humans;
        }
    }

    return humans; // if theres no humans found connected to that animal it will just return a blank set.
}

// console.log(await getHumansByAnimalSpecies('frog'));
