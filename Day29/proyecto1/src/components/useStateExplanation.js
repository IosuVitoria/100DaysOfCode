import React, { useState } from 'react';

const UseStateExplanation = () => {
    const [title, setTitle] = useState("Valor inicial");

    const handleTitleChange = () => {
        setTitle("Nuevo valor del título");
    };
    const handleTitleChange2 = () => {
        setTitle("Valor inicial");
    };

    return (
        <div className='explanation'>
            <h1>Explorando useState y Props en React</h1>
            <p>
                El hook <code>useState</code> es una función provista por React que nos permite
                agregar estado a nuestros componentes funcionales. Con este hook, podemos hacer
                que nuestros componentes reaccionen y se actualicen en respuesta a los cambios
                en el estado.
            </p>

            <h2>useState para el título</h2>
            <p>
                En este ejemplo, estamos utilizando <code>useState</code> para manejar un título
                dentro de un componente funcional. Inicializamos el estado con un valor inicial
                de <code>"Valor inicial"</code>. Luego, podemos actualizar el estado utilizando
                la función <code>setTitle</code>, que React nos proporciona cuando usamos
                <code>useState</code>.
            </p>
            <p>
                Ambos botones tanto "Cambiar título" como "Volver a estado inicial" hacen uso de
                useState para cambiar el contenido del componente. Te invito a descargar el código 
                para poder analizar con tranquilidad.
            </p>
            <p>
                Título actual: <strong>{title}</strong>
            </p>

            <div className='button__container'>
                <button onClick={handleTitleChange} className='button'>Cambiar Título</button>
                <button onClick={handleTitleChange2} className='button'>Volver a estado inicial</button>
            </div>

            <h2>Props en React</h2>
            <p>
                Las props (abreviatura de "properties") son mecanismos para pasar datos de un
                componente padre a un componente hijo en React. Permiten la comunicación entre
                componentes y son de solo lectura, es decir, el componente hijo no debe modificar
                las props, son inmutables.
            </p>
            <p>
                En el ejemplo del componente <code>Todo</code>, observamos cómo pasamos props
                como <code>item</code>, <code>onUpdate</code>, y <code>onDelete</code> al componente
                hijo <code>Todo</code>. Estas props contienen datos y funciones que el componente
                hijo utiliza para mostrar información y realizar acciones.
            </p>
            
            <h2>Ejercicios propuestos si se descarga el código</h2>
            <p>1. Crea un nuevo componente funcional que utilice el hook <code>useState</code> para manejar un contador. Añade botones para incrementar y decrementar el contador.</p>
            <p>2. Modifica el componente Todo para que pueda recibir el color del fondo como una prop y lo aplique al fondo del todo.</p>
        </div>
    );
};

export default UseStateExplanation;
