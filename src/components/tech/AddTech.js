import React, { useState } from 'react';
import { connect } from 'react-redux';
import uuid  from  'uuidv4';
import M from 'materialize-css/dist/js/materialize';
import { addTech } from '../../actions/techActions';
import PropTypes from 'prop-types';

export const AddTech = ({ addTech }) => {
    const [ firstName, setFirstname ] = useState('');
    const [ lastName, setLastname ] = useState('');
   
    const onSubmit = () => {
        const techData = {
            id: uuid,
            firstName,
            lastName
        }
        addTech( techData );
        setFirstname('');
        setLastname('');

        M.toast({ html: 'Successfully added technician'});
    }

    return (
        <div id='add_tech_modal' className='modal'>
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" value={firstName} name='firstname' onChange={ e => setFirstname(e.target.value)}/>
                        <label htmlFor="firstname">Firstname</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" value={lastName} name='lastname' onChange={ e => setLastname(e.target.value)}/>
                        <label htmlFor="lastname">Lastname</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="btn-flat blue waves-effect white-text modal-close">Add</a>
            </div>
            
        </div>
    )
}

AddTech.propTypes = {
    addTech: PropTypes.func.isRequired,
}

export default connect(null, { addTech } ) (AddTech);
