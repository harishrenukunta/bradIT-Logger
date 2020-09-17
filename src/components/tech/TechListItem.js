import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTech } from '../../actions/techActions';

const TechListItem = ({ tech, removeTech }) => {
    return (
        <li className='collection-item'>
            {tech.firstName} {tech.lastName}
            <a href='#!' className='secondary-content' onClick={ () => removeTech( tech.id )}>
                <i className='material-icons grey-text'>delete</i>
            </a>
        </li>
    )
}

TechListItem.propTypes = {
    tech: PropTypes.object.isRequired,
    removeTech: PropTypes.func.isRequired
}

export default connect(null, {removeTech})(TechListItem);
