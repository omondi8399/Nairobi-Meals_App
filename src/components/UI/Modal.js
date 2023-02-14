import classes from './Modal.module.css'
import React from 'react'

const Backdrop = props => {
 return (
    <div className={classes.backdrop} />
 )
}

const ModalOverlay = props => { 
    return (
        <div className={classes.modal}>
            <div className={classes.content}></div>
        </div>
    )
}

const Modal = props => {
    return (
    <div>Modal</div>
    )
}

export default Modal