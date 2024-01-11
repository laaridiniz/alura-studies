import Style from '../list.module.scss';

export default function Item(props: {tarefa: string, tempo: string}) {

    const {tarefa, tempo} = props

    return(
        <li className={Style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li> 
    )
}

// Outra possibilidade de desestruturar a props seria passar tarefa e tempo como parâmetros da função. Assim, ao invés de ter:

// export default function Item(props: {tarefa: string, tempo: string}) {
//     const {tarefa, tempo} = props
//     return()
// }

// Teríamos:

// export default function Item({tarefa, tempo}: {tarefa: string, tempo: string}) {
//     return()
// }