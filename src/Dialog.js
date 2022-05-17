import './dialog.css'

const Dialog = ({open, onClose, children}) => {

  if(open) {
    return (
      <div className='dialogContainer'>
        <div className='dialog'>
          <h2>Speech settings</h2>
          {children}
          <span className='dialog__close' onClick={onClose}>Done</span>
        </div>
      </div>
    )
  }
  return null
}

export default Dialog