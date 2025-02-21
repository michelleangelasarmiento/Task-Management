import { useRef } from "react";
import Input from "../Input";
import Modal from "../Modal";

export default function NewProject({onAddingProject , onCancellingAddingProject}) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const modal = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return; /*dont execute on add if invalid */
        }

        onAddingProject({
            title: enteredTitle,
            description: enteredDescription,
            dudeDate: enteredDueDate
        })
        
    }

    return (
        <>
        <Modal ref={modal} caption="Close">
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Please make sure to provide the necessary information</p>
        </Modal> 
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                        <button className="text-stone-800 hover:text-stone-950"
                        onClick={onCancellingAddingProject}>
                        Cancel
                    </button>
                </li>
                 <li>
                    <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
                    onClick={handleSave}>
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input ref={titleRef} type="text" label="Title"/>
                <Input ref={descriptionRef} label="Description" isTextArea/>
                <Input ref={dueDateRef} type="date" label="Due Date"/>
            </div>
            </div>
        </>
    
    )
}