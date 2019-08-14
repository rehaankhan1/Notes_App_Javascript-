import moment from 'moment'
import { getFilters } from './filters';
import { getNotes, sortNotes } from './notes'


// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
   const statusEL = document.createElement('p')


    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
   // textEl.setAttribute('href', `/edit.html#${note.id}`)
   textEl.classList.add('list-item__title')
   noteEl.appendChild(textEl)

   noteEl.setAttribute('href', `/edit.html#${note.id}`)
   noteEl.classList.add('list-item')

   statusEL.textContent = generateLastEdited(note.updatedAt)
   statusEL.classList.add('list-item__subtitle')
   noteEl.appendChild(statusEL)
    return noteEl
}



// Render application notes
const renderNotes = () => {
    const Rnotes = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)

    console.log(notes)

    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    Rnotes.innerHTML = ''

    if(filteredNotes.length > 0){
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            Rnotes.appendChild(noteEl)
        })
    }else{
const emptyMessage = document.createElement('p')
emptyMessage.textContent = 'No Notes To Show'
emptyMessage.classList.add('empty-message')
Rnotes.appendChild(emptyMessage)
    }

    
}


const InitializeEditPage = (noteId) => {

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')

const dateElement = document.querySelector('#last-edited')

    const notes = getNotes()
   
    let note = notes.find((note) => note.id === noteId)
    
    if (!note) {
        location.assign('/index.html')
    }
    
    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
    
    console.log(note.title)
}

// Generate the last edited message
const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
}

export {generateNoteDOM, renderNotes, generateLastEdited, InitializeEditPage}