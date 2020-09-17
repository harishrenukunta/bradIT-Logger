import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addLog } from '../../actions/logActions';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';

export const AddLogModal = ({techs, addLog}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention ] = useState(false);
    const [ tech, setTech ] = useState('');

    const handleSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({html: 'Please enter message and tech...'});
        }else{
            console.log(`Log: ${message} attention:${attention} tech:${tech}`);
            const logData = {
                message,
                attention,
                tech,
                id: uuid(),
                date: new Date()
            }
            addLog(logData);
            setMessage('');
            setAttention(false);
            setTech('');
        }
       
    }
    return (
        <div id='add_log_modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>  
                    <div className="row">
                        <div className="input-field">
                            <input type='text' placeholder='Enter message' name='message' value={message} onChange={ e=> setMessage(e.target.value)}/>
                            <label htmlFor='message'>Enter message</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="input-field">
                            <select name='tech' value={tech} className='browser-default' onChange={ e => setTech(e.target.value)}>
                                <option value=''>Choose technician</option> 
                                {
                                   techs.map( tech => <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>{`${tech.firstName} ${tech.lastName}`}</option>)
                                }
                            </select>
                            <label htmlFor='tech'>Tech</label>
                        </div>
                    </div>
                    <div className="row">
                            <label>
                                <input type="checkbox" className='filled-in' name='attention' value={attention} onChange={ e => setAttention(!attention)}/>
                                <span>Select Attention</span>
                            </label>
                    </div>
                </div>         
                <div className='modal-footer'>
                    <a href='#!' className="waves-effect blue modal-close btn-flat white-text" onClick={ handleSubmit }>Enter</a>
                </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

AddLogModal.prototype = {
    techs: PropTypes.array.isRequired,
    addLog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    techs: state.tech.techs
})

export default connect(mapStateToProps, {addLog})(AddLogModal);
