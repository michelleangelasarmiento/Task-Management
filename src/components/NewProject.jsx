import { useRef } from "react";
import Input from "./Input";

export default function NewProject({onAddingProject}) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        onAddingProject({
            title: enteredTitle,
            description: enteredDescription,
            dudeDate: enteredDueDate
        })
        
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">
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
    
    )
}