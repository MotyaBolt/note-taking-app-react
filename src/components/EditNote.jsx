import React from 'react';
import './styles/EditNote.css';
class EditNote extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className='note-inputs'>
                <div onBlur={this.props.onTitleBlur} onKeyDown={this.props.onKeyDown} suppressContentEditableWarning={true}  data-placeholder='Enter title' className='input title' contentEditable='true'>{this.props.titleContent}</div>
                <div onBlur={this.props.onTextBlur}  dangerouslySetInnerHTML={{__html: this.props.textContent}} suppressContentEditableWarning={true} data-placeholder='Note...' className='input text' contentEditable='true'></div>
                <div className={this.props.onNoteClick === false ? 'start-display' : 'start-display-after'}><h2 className="status">{this.props.status}</h2></div>
            </div>
        )
    }
}
export default EditNote;