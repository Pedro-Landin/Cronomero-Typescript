import { ITarefa } from '../../types/tarefa';
import style from './Lista.module.scss';
import Item from './item';

function Lista({ tarefas }: {tarefas: ITarefa[]}){
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
              {tarefas.map((item, index) => (
                <Item 
                    key={index}
/*                     id={item.id}
                    selecionado={item.selecionado}
                    tarefa={item.tarefa}
                    completado={item.completado}
                    tempo={item.tempo} */
                    {...item}
                />
              ))}
            </ul>
        </aside>
    )
}

export default Lista;