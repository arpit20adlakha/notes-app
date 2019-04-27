const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return "success"
}

const addNote = (title, body) => {
    const notes  = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)

    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New Note added!")
    }
    else {
        console.log("Note title taken !")
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const filteredNotes = notes.filter((note) => note.title !== title)

    if (notes.length === filteredNotes.length){
        console.log(chalk.red.inverse("No note is there to be removed"))
    }
    else {
        saveNotes(filteredNotes)
        console.log("removed Note ! " + chalk.green.inverse(title))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const requiredNote = notes.find((note) => note.title === title)

    if (requiredNote) {
        console.log(chalk.green(requiredNote.title))
        console.log(requiredNote.body)
    }
    else {
        console.log(chalk.red("No note found with the title : ") + title)
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse("your notes"))
    notes.forEach((note) => {
        console.log(note.title)
    })
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()  // JSON.stringify() will not work for arrays
        return JSON.parse(dataJSON)
    }
    catch(e) {
       return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

