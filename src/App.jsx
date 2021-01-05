import React from 'react';
import NotesList from './components/NotesList';
import EditNote from './components/EditNote';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteClicked: false,
      notes: [],
      startNoteTitle: '',
      currentNoteTitle: '',
      currentNoteText: '',
      getNoteTitleValue: '',
      getNoteTextValue: '',
      notesStatus: 'Your notes will be here',
      onNoteClicked: false,
      startTyping: false
    }
    this.createNewNote = this.createNewNote.bind(this);
    this.getValue = this.getValue.bind(this);
    this.addNewNote = this.addNewNote.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.getNoteTitle = this.getNoteTitle.bind(this);
    this.getNoteText = this.getNoteText.bind(this);
    this.onTitleBlur = this.onTitleBlur.bind(this);
    this.onTextBlur = this.onTextBlur.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  createNewNote () {
    this.setState ({
      newNoteClicked: true
    })
  };

  getValue (event) {
    this.setState ({
      startNoteTitle: event.target.value
    })
  };

  addNewNote () {
    if(this.state.startNoteTitle !== '') {
      this.setState ({
        notes: [[[this.state.startNoteTitle], []], ...this.state.notes],
        startNoteTitle: '',
        newNoteClicked: false,
        notesStatus: 'Select a note',
        startTyping: false
    })
    }
  };
  
  selectNote (notetitl, notetxt) {
    this.setState ({
      currentNoteTitle: notetitl,
      currentNoteText: notetxt,
      onNoteClicked: true
    })
    console.log(notetitl, notetxt)
  };

  getNoteTitle (event) {
      this.setState ({
        getNoteTitleValue: event.target.innerText,
        startTyping: true
      })
  };

  getNoteText (event) {
     this.setState ({
       getNoteTextValue: event.target.innerText,
       startTyping: true
     })
  };

  onTitleBlur () {
      if(this.state.getNoteTitleValue !== '') {
      this.state.notes.map(item => {
        if(item[0] === this.state.currentNoteTitle) {
          item[0] = this.state.getNoteTitleValue
          this.setState({
            currentNoteTitle: item[0], 
            getNoteTitleValue: ''
            })
          }
        })
      }
      else {
        console.log('here')
      }
  };

  onTextBlur () {
    if(this.state.getNoteTextValue !== '' ) {
      this.state.notes.map(item => {
        if(item[1] === this.state.currentNoteText) {
          item[1] = this.state.getNoteTextValue
          this.setState({
            currentNoteText: item[1],
            getNoteTextValue: ''
          })
        }
      })
    }
    else {
      console.log('here')
    }
  };
  
  deleteNote (toDeleteTitle, toDeleteText) {
    let onDeleteNotes = this.state.notes.filter(item => item[0] !== toDeleteTitle && item[1] !== toDeleteText)
    this.setState ({ 
      notes: onDeleteNotes,
      currentNoteText: '',
      currentNoteTitle: '',
      onNoteClicked: false
    })
    if(this.state.notes.length <= 1) {
      this.setState ({
        notesStatus: 'Your notes will be here'
      })
    }
  };

  render () {
    return (
      <div className="app">
        <NotesList deleteNote={this.deleteNote} selectNote={this.selectNote} value={this.state.startNoteTitle}  notes={this.state.notes} addNoteEvent={this.addNewNote} getValue={this.getValue} newNoteClicked={this.state.newNoteClicked} createNoteEvent={this.createNewNote}/>
        <EditNote  onNoteClick={this.state.onNoteClicked} status={this.state.notesStatus} onTitleBlur={this.onTitleBlur} onTextBlur={this.onTextBlur} getNoteTitle={this.getNoteTitle} getNoteText={this.getNoteText} titleContent={this.state.currentNoteTitle} textContent={this.state.currentNoteText} selectNote={this.selectNote}/>
      </div>
    )
  }
}
export default App;