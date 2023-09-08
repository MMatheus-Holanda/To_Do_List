class Tarefa {
    protected descricao: string;
    protected concluida: boolean = false;
    prioridade?: Prioridade

    constructor(descricao: string, prioridade?: Prioridade) {
        this.descricao = descricao;
        this.prioridade = prioridade;
    }

    marcarConcluida() {
        this.concluida = true
    }

    mostrarTarefa(): string {
        let status: string;
        if (this.concluida == false) {
            status = 'Pendente'
        } else {
            status = 'Concluida'
        }
        return `Descrição: ${this.descricao} | Status: ${status}`
    }

    getDescricao() {
        return this.descricao
    }

    setDescricao(descricao: string) {
        this.descricao = descricao
    }

    getConcluida() {
        return this.concluida
    }

}

class ListaDeTarefas {
    tarefas: Tarefa[] = []

    adicionarTarefa(descricao: string) {       
        const tarefa = new Tarefa(descricao);
        this.tarefas.push(tarefa)
        
    }

    listarTarefas() {
        for (const tarefa of this.tarefas) {
            let status: string;
            if (tarefa.getConcluida() == false) {
                status = 'Pendente'
            } else {
                status = 'Concluida'
            }
            console.log(`Tarefa: ${tarefa.getDescricao()}\nStatus:${status}`);
        }
    }

    editarTarefa(descricao: string, noveDescricao: string) {
        const tarefaEmEdicao = this.tarefas.filter((tarefa) =>
            tarefa.getDescricao() == descricao
        )

        tarefaEmEdicao[0].setDescricao(noveDescricao)
    }

    removerTarefa(descricao: string) {
        for (let i = 0; i < this.tarefas.length; i++) {
            if (this.tarefas[i].getDescricao() == descricao) {
                this.tarefas.splice(i, 1)
            }
        }
    }
}



class ListaPrioritaria extends ListaDeTarefas {
    
    adicionarTarefaPrioritaria(descricao: string, prioridade: Prioridade): void {
        const tarefa = new Tarefa(descricao, prioridade)
        this.tarefas.push(tarefa);        
    }

    listarTarefas(): void {
        for (const tarefa of this.tarefas) {
            let status: string;
            if (tarefa.getConcluida() == false) {
                status = 'Pendente'
            } else {
                status = 'Concluida'
            }

            if (tarefa.prioridade == undefined) {
                tarefa.prioridade = Prioridade.NAO_DEFINIDA
            }
            console.log(`Tarefa: ${tarefa.getDescricao()}\nStatus:${status}\nPrioridade:${tarefa.prioridade}`);
        }
    }

    editarTarefa(descricao: string, noveDescricao: string) {
        const tarefaEmEdicao = this.tarefas.filter((tarefa) =>
            tarefa.getDescricao() == descricao
        )

        tarefaEmEdicao[0].setDescricao(noveDescricao)
    }

    removerTarefa(descricao: string) {
        for (let i = 0; i < this.tarefas.length; i++) {
            if (this.tarefas[i].getDescricao() == descricao) {
                this.tarefas.splice(i, 1)
            }
        }
    }
}

enum Prioridade {
    ALTA = 'ALTA',
    MEDIA = 'MEDIA',
    BAIXA = 'BAIXA',
    NAO_DEFINIDA = 'NÃO DEFINIDA'
}


const lista = new ListaDeTarefas()
lista.adicionarTarefa('Praticar Prog')
lista.listarTarefas()
lista.tarefas[0].marcarConcluida()
lista.adicionarTarefa('Passear com a Alaska')
lista.listarTarefas()
lista.editarTarefa('Praticar Prog', 'Praticar POO')
lista.listarTarefas()
lista.removerTarefa('Praticar POO')
lista.listarTarefas()
lista.adicionarTarefa('Passear com a Alaska')

console.log('=========================');

const listaPrio = new ListaPrioritaria()
listaPrio.adicionarTarefaPrioritaria('Arrumar carro', Prioridade.MEDIA)
listaPrio.listarTarefas()
listaPrio.tarefas[0].marcarConcluida()
listaPrio.adicionarTarefaPrioritaria('estudar TS', Prioridade.ALTA)
listaPrio.listarTarefas()
listaPrio.editarTarefa('estudar TS', 'Estudar TypeScript')
listaPrio.listarTarefas()
listaPrio.removerTarefa('Estudar TypeScript')
listaPrio.listarTarefas()

