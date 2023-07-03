import { ITarefa } from '../../types/tarefa';
import style from './Lista.module.scss';
import Item from './item';

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props){
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
              {tarefas.map(item => (
                <Item
                    key={item.id} 
/*                  id={item.id}
                    selecionado={item.selecionado}
                    tarefa={item.tarefa}
                    completado={item.completado}
                    tempo={item.tempo} */
                    {...item}
                    selecionaTarefa={selecionaTarefa}
                />
              ))}
            </ul>
        </aside>
    )
}

export default Lista;