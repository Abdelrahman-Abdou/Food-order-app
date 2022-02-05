import classess from './Modal.module.css'
import { Fragment } from 'react'
import ReactDOM from 'react-dom'

const BackDrop = (props) => {
  return (
    <div className={ classess.backdrop }></div>
  )
}

const ModalOverlay = (props) => {
  return (
    <div className={ classess.modal }>
      <div className={ classess.content }>

        { props.children }

      </div>
    </div>
  )
}
const portalElement = document.getElementById('overLays')
const Modal = (props) => {
  return (
    <Fragment>
     
      { ReactDOM.createPortal(<BackDrop />, portalElement) };

      { ReactDOM.createPortal(<ModalOverlay>{ props.children }</ModalOverlay>, portalElement) }
    </Fragment>
  )
}
export default Modal;
