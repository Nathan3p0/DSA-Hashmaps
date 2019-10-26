const HashMap = require('./imTheMap')

const main = () => {
    const lor = new HashMap()
    lor.MAX_LOAD_RATIO = 0.5
    lor.SIZE_RATIO = 3

    lor.set("Hobbit", "Bilbo")
    lor.set("Hobbit", "Frodo")
    lor.set("Wizard", "Gandolf")
    lor.set("Human", "Aragon")
    lor.set("Elf", "Legolas")
    lor.set("Maiar", "The Necromancer")
    lor.set("Maiar", "Sauron")
    lor.set("RingBearer", "Gollum")
    lor.set("LadyOfLight", "Galadriel")
    lor.set("HalfElven", "Arwen")
    lor.set("Ent", "Treebeard")

    return lor;

}


console.log(main())