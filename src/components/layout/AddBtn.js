import React from 'react'

export const AddBtn = () => {
    return (
        <div className="fixed-action-btn">
            <a href='#add_log_modal' className='btn-large btn-floating modal-trigger'>
                <i className="material-icons blue darken-2">add</i>
            </a>
            <ul>
                <li>
                    <a href='#tech_list_modal' className='btn-floating green modal-trigger'>
                        <i className="material-icons">person</i>
                    </a>
                </li>     
                <li>
                    <a href='#add_tech_modal' className='btn-floating red modal-trigger'>
                    <i className="material-icons">person_add</i>
                    </a>
                </li>
            </ul>
            
        </div>
    )
}

export default AddBtn;
