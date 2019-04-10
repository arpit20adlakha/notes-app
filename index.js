const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')
const getNotes = require('./notes')


// add , remove , read , list

// create add command
yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
      title: {
          describe: 'Note title'
      }
    },
    handler: function () {
        console.log('Adding a new note')
    }
})

// create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function() {
        console.log("Removing the note")
    }
})


// create list command
yargs.command({
    command: "list",
    describe: "List the notes",
    handler: function() {
        console.log("Listing the notes")
    }
})


// create read command
yargs.command({
    command: "read",
    describe: "Read notes",
    handler: function() {
        console.log("Reading notes")
    }
})



console.log(yargs.argv)






