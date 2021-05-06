import React from 'react';
import NotesList from './components/NotesList';
import EditNote from './components/EditNote';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNoteClicked: false,
      startNoteTitle: '',
      currentNoteTitle: '',
      currentNoteText: '',
      notesStatus: 'Your notes will be here',
      onNoteClicked: false,
    };
    this.createNewNote = this.createNewNote.bind(this);
    this.getValue = this.getValue.bind(this);
    this.addNewNote = this.addNewNote.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.onTitleBlur = this.onTitleBlur.bind(this);
    this.onTextBlur = this.onTextBlur.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.blockEnter = this.blockEnter.bind(this);
    this.enterAddNew = this.enterAddNew.bind(this);
  }

  createNewNote() {
    this.setState({
      newNoteClicked: true,
    });
  }

  getValue(event) {
    this.setState({
      startNoteTitle: event.target.value,
    });
  }

  addNewNote() {
    if (this.state.startNoteTitle !== '') {
      this.setState({
        notes: [[[this.state.startNoteTitle], []], ...this.state.notes],
        startNoteTitle: '',
        newNoteClicked: false,
        notesStatus: 'Select a note',
      });
    }
  }

  enterAddNew(e) {
    if (this.state.startNoteTitle !== '' && e.keyCode === 13) {
      this.setState({
        notes: [[[this.state.startNoteTitle], []], ...this.state.notes],
        startNoteTitle: '',
        newNoteClicked: false,
        notesStatus: 'Select a note',
      });
    }
  }

  selectNote(notetitl, notetxt) {
    this.setState({
      currentNoteTitle: notetitl,
      currentNoteText: notetxt,
      onNoteClicked: true,
    });
  }

  onTitleBlur(e) {
    this.state.notes.map((note) => {
      if (note[0] === this.state.currentNoteTitle) {
        note[0] = [e.target.innerText];
        this.setState({
          currentNoteTitle: note[0],
        });
      }
    });
  }

  onTextBlur(e) {
    this.state.notes.map((note) => {
      if (note[1] === this.state.currentNoteText) {
        note[1] = [e.target.innerHTML];
        this.setState({
          currentNoteText: note[1],
        });
      }
    });
  }

  deleteNote(toDeleteTitle, toDeleteText) {
    let onDeleteNotes = this.state.notes.filter(
      (item) => item[0] !== toDeleteTitle && item[1] !== toDeleteText
    );
    this.setState({
      notes: onDeleteNotes,
      currentNoteText: '',
      currentNoteTitle: '',
      onNoteClicked: false,
    });
    if (this.state.notes.length <= 1) {
      this.setState({
        notesStatus: 'Your notes will be here',
      });
    }
  }

  blockEnter(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div className="app">
        <NotesList
          onKeyDown={this.enterAddNew}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          value={this.state.startNoteTitle}
          notes={this.state.notes}
          createNoteEvent={this.createNewNote}
          getValue={this.getValue}
          addNoteEvent={this.addNewNote}
          newNoteClicked={this.state.newNoteClicked}
        />
        <EditNote
          onKeyDown={this.blockEnter}
          onNoteClick={this.state.onNoteClicked}
          status={this.state.notesStatus}
          onTitleBlur={this.onTitleBlur}
          onTextBlur={this.onTextBlur}
          getNoteTitle={this.getNoteTitle}
          getNoteText={this.getNoteText}
          titleContent={this.state.currentNoteTitle[0]}
          textContent={this.state.currentNoteText[0]}
          selectNote={this.selectNote}
        />
      </div>
    );
  }
}
export default App;
