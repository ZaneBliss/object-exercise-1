let car = {
    year: 2015,
    make: "Ford",
    model: "Mustang",
    color: "red"
}
let animals = ['Kippers', 'Jack', 'Gypsy', 'Angus', 'Seymour Bouts', 'Sharkey']
let dad = {
    name: 'Derek',
    age: 42
}
let mom = {
    name: 'Katherine',
    age: 38
}
let son = {
    name: 'George',
    age: 15
}
let daughter = {
    name: 'Melody',
    age: 13
}
let familyMembers = [dad, mom, son, daughter];

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log("Part one!")
for (let i = 0; i < nashvilleSoftwareSchool.instructors.fullTime.length; i++) {
    console.log(nashvilleSoftwareSchool.instructors.fullTime[i])
}
console.log("Part two!")
console.log(nashvilleSoftwareSchool.instructors.fullTime[nashvilleSoftwareSchool.instructors.fullTime.length-1])
console.log(nashvilleSoftwareSchool.instructors.partTime[0])

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(
    "Dimensions:",
    empireStateBuilding.squareFeet,
    empireStateBuilding.height,
    empireStateBuilding.eastWestLength,
    empireStateBuilding.northSouthLength,
)

let stories = 'stories'
let add = 'address'
let con_date = "ConstructionDate"
let owner = 'owner'
let arch = 'architect'

console.log (
    "other properties:",
    empireStateBuilding[stories],
    empireStateBuilding[add],
    empireStateBuilding[con_date],
    empireStateBuilding[owner],
    empireStateBuilding[arch]
)