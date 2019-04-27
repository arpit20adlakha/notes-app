const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes')




// const v8 = require('v8')
// console.log (v8.getHeapStatistics())
// console.log(v8.getHeapStatistics().total_available_size/1024/1024/1024)
//


// add , remove , read , list

// create add command
yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
      title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string'
      },
      body: {
          describe: "Note body",
          demandOption: true,
          type: 'string'
      }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})


// create list command
yargs.command({
    command: "list",
    describe: "List the notes",
    handler() {
        notes.listNotes()
    }
})


// create read command
yargs.command({
    command: "read",
    describe: "Read notes",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse()


// console.log(yargs.argv)






