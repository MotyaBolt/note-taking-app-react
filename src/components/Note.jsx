import React from 'react';
import './styles/Note.css';
import '../icons/css/all.css';
class Note extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div  className="note">
                <div onClick={this.props.onClick}  className="content-div">
                    <div className="note-title-wrapper"><h3 className="note-title">{this.props.title}</h3></div>
                    <div className="note-content-wrapper"><p className="note-content">{this.props.content}</p></div>
                </div>
                <button onClick={this.props.deleteNote} className="delete-note"><i className="fas fa-trash-alt"></i></button>
            </div>
        )
    }
}
export default Note;