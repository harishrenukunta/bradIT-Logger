import React, { useEffect } from 'react';
import TechListItem from './TechListItem';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import PropTypes from 'prop-types';

export const TechListModal = ({ techs ,  getTechs }) => {

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    },[]);
    return (
        <div id="tech_list_modal" className="modal">
            <div className="modal-content">
                <h4>Technicians</h4>
                <ul className='collection'>
                    {
                        (techs && techs.map(tech => <TechListItem tech={tech} />))
                    }
                </ul>
            </div>
        </div>
    )
}

TechListModal.propTypes = {
    techs: PropTypes.array.isRequired,
    getTechs: PropTypes.func.isRequired,

}

const mapStateToProps = state => ({
    techs: state.tech.techs
})

export default connect(mapStateToProps, { getTechs } )(TechListModal);
