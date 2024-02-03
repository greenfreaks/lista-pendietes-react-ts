type Props = {}
import { useState } from "react"
import { ListaTareas } from "./ListaTareas";
import { Tarea } from "./Tarea";

export const ToDoApp = (props: Props) => {
    const [nuevaTarea, setNuevaTarea] = useState<string>(''); //Le decimos al useState que el tipo de datp que recibirá e un <strinh>
    const [listaTareas, setListaTareas] = useState<string[]>([]) //L dicemis al useState que el tipo de dato que recibirá será un <array de string>
    const handleAddTask = () => {
        if (nuevaTarea.trim() === '') return //La pálabra <<return>> corta y sale del método
        setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea]);
        setNuevaTarea('')
    }

    const handleBorrarTarea = (index: number) => {
        setListaTareas(tareas => tareas.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h1>Lista de tareas</h1>
            <div>
                <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} placeholder="Nueva tarea" />
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
        </div>
    )
}