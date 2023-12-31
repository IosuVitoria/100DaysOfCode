// import React, { useState } from 'react';

// const Todo = ({ item, onUpdate, onDelete }) => {
//     const [isEdit, setIsEdit] = useState(false);
    
//     function FormEdit() {
//         const [newValue, setNewValue] =useState(item.title);

//         function handleSubmit(e){
//             e.preventDefault();
//         }
        
//         function handleChange(e){
//             const value = e.target.value;
//             setNewValue(value);
//         }

//         function handleClick(){
//             onUpdate(item.id, newValue);
//             setIsEdit(false);
//         }


//         return (
//             <form className='todoUpdateForm' onScroll={handleSubmit}>
//                 <input type='text' className='todoInput' onChange={handleChange} value={newValue}/>
//                 <button className='button' onClick={handleClick}>Update</button>
//             </form>
//         );
//     }

//     function TodoElement() {
//         return (
//             <div className='item__todo'>
//                 <span className='todoTitle'>{item.title}</span>
//                 <button className="button edition" onClick={() => setIsEdit(true)}>Edit</button>
//                 <button className="button delete" onClick={(e) => onDelete(item.id)}>Delete</button>
//             </div>
//         );
//     }

//     return (
//         <div className='todo'>
//             {isEdit ? <FormEdit /> : <TodoElement />}
//         </div>
//     );
// };

// export default Todo;

import React, { useState } from 'react';

const Todo = ({ item, onUpdate, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false);

    const FormEdit = () => {
        const [newValue, setNewValue] = useState(item.title);

        const handleSubmit = (e) => {
            e.preventDefault();
        }

        const handleChange = (e) => {
            const value = e.target.value;
            setNewValue(value);
        }

        const handleClick = () => {
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return (
            <form className='todoUpdateForm' onSubmit={handleSubmit}>
                <input type='text' className='todoInput' onChange={handleChange} value={newValue} />
                <button className='button' onClick={handleClick}>Update</button>
            </form>
        );
    }

    const TodoElement = () => {
        return (
            <div className='item__todo'>
                <span className='todoTitle'>{item.title}</span>
                <button className="button edition" onClick={() => setIsEdit(true)}>Edit</button>
                <button className="button delete" onClick={() => onDelete(item.id)}>Delete</button>
            </div>
        );
    }

    return (
        <div className='todo'>
            {isEdit ? <FormEdit /> : <TodoElement />}
        </div>
    );
};

export default Todo;
