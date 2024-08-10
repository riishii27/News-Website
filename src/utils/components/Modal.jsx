import React, {useEffect, useRef} from 'react'

const Modal = ({image, title, description, close}) => {

    const dialog = useRef();

    useEffect(()=>{
        dialog.current.showModal()
    },[dialog])

    return (
    <dialog ref={dialog} className='mt-32 h-96 bg-zinc-400 w-1/3 pb-3 rounded-lg backdrop:bg-gray-100 backdrop:opacity-50 items-center justify-center'>
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p>{description}</p>
        <button className='bg-blue-400 rounded ml-32 mt-2 w-1/3 h-10' onClick={close}>Close</button>
    </dialog>
  )
}


export default Modal
