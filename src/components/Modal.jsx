import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"
import Button from "./Button";


const Modal = forwardRef(function Modal({ children, caption },ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();        
        }
    }
    })/* expose a fxn that can be clled ouside this cmp fxn */


    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{caption}</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root'))
});

export default Modal;