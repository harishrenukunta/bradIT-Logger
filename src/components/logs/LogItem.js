import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({log, deleteLog, setCurrent}) => {
   const msgClassName = (log.attention) ? 'red-text': 'blue-text';

   const onDelete = () => {
       deleteLog(log.id);
       M.toast({html: 'Log deleted successfully'});
   }

   const selectLogToEdit = ( log ) => {
       console.log('Inside select log');
       console.dir(log);
       setCurrent( log );
   }

    return (
        <li className='collection-item'>
            <div className='row'>
                <div className='col s9'>
                <a href="#edit_log_modal" className={`${msgClassName} modal-trigger`} 
                    onClick={() => selectLogToEdit(log)}>{log.message}</a>
                <br/>
                <span className='grey-text'>
                    <span className='black-text'>ID# {log.id}</span>&nbsp;
                    last updated by <span className='black-text'>{log.tech}&nbsp;</span>
                     on <Moment format='DD-MMM-YYYY HH:mm:ss a'>{log.date}</Moment>
                </span>
                </div>
                <div className='col s3'>
                <a href="#!" className='secondary-content' onClick={ onDelete }><i className='material-icons grey-text'>delete</i></a>
                </div>
            </div>           
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired
}

export default connect(null, {deleteLog, setCurrent})(LogItem);
