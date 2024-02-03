import { Tarea } from "./Tarea"

type Props ={
    listaTareas: string[]
    borrarTarea: (index:number) => void // Esta es una función que recibirá el index (cuál es la posición del arreglo), no devolverá mada así que deveuelve un VOID

}

export const ListaTareas = ({listaTareas, borrarTarea}: Props) => { //Recordemos que borrarTarea es una función
    return(
        <div className="taskList">
            {listaTareas.map((tarea, index) =>(
                <Tarea key={index} tarea = {tarea} borrarTarea={()=> borrarTarea(index)}></Tarea>    
                )
                )}
        </div>    
    )
}