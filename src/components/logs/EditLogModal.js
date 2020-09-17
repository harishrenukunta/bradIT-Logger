import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { updateLog } from '../../actions/logActions'
import PropTypes from 'prop-types';

export const EditLogModal = ({current, techs, updateLog }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention ] = useState(false);
    const [ tech, setTech ] = useState('');

    useEffect(()=> {
        if( current ){
            setMessage( current.message );
            setAttention( current.attention );
            setTech( current.tech );
        }
    }, [current])

    const handleSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({html: 'Please enter message and tech...'});
        }else{
            const log = {
                id: current.id,
                message,
                tech,
                attention,
                date: new Date()
            }
            updateLog( log );
            setMessage('');
            setTech('');
            setAttention(false);
        }   
    }

    return (
        <div id='edit_log_modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Edit System Log</h4>  
                    <div className="row">
                        <div className="input-field">
                            <input type='text' placeholder='Enter message' name='message' value={message} onChange={ e=> setMessage(e.target.value)}/>
                            <label htmlFor='message'>Enter message</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="input-field">     
                            <select name='tech' value={tech}  className='browser-default' onChange={ e => setTech(e.target.value)}>
                                <option value="">Choose technician</option>
                                {
                                    (techs && techs.map( tech => <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>{`${tech.firstName} ${tech.lastName}`}</option>))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="row">
                            <label>
                                <input type="checkbox" className='filled-in' name='attention' checked={attention} onChange={ e => setAttention(!attention)}/>
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

EditLogModal.propTypes = {
    current: PropTypes.object.isRequired,
    techs: PropTypes.array.isRequired,
    updateLog: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    current: state.log.current,
    techs: state.tech.techs
})

export default connect(mapStateToProps, { updateLog })(EditLogModal);
