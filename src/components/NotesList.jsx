import React from 'react';
import Note from './Note';
import './styles/NotesList.css';
class NotesList extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="notes-list">
                <div className="create-new">
                    <button onClick={this.props.createNoteEvent} className="new-note-btn">New Note</button>
                    <div className={this.props.newNoteClicked === true ? "add-note-wrapper-after" : "add-note-wrapper"}> 
                        <input value={this.props.value} onChange={this.props.getValue} placeholder='Enter title' className="note-title-input"></input>
                        <button onClick={this.props.addNoteEvent} className="add-note">Add</button>
                    </div>
                    {this.props.notes.map((item, index) => {
                        return (
                            <Note onClick={() => {this.props.selectNote(item[0], item[1])}} key={index} title={item[0]} content={item[1]} deleteNote={() =>  {this.props.deleteNote(item[0], item[1])}}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default NotesList;