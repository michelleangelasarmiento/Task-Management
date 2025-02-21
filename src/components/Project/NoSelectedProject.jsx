import noProjectImg from '../../assets/no-projects.png';
import Button from '../Button';

export default function NoSelectedProject({onAddProject}) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImg} alt="An empty check list" className='w-16 h-16 object-contain mx-auto'></img>
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
            <p className='text-stone-400 mb-4'>Select or start a project</p>
            <p className="mt-8">
             <Button onClick={onAddProject}>Create a new project</Button>
            </p>
        </div>
    )
}