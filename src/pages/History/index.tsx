import { HistoryContainer, HistoryList, Status } from "./styles"

export function History() {
    return (
        <HistoryContainer>
          <h1>Meu historico</h1>

           <HistoryList>
              <table>
                <thead>
                    <tr>
                      <th>Tarefa</th>
                      <th>Duração</th>
                      <th>Inicio</th>
                      <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 miutos</td>
                        <td>há 2 meses</td>
                        <td>
                            <Status statusColor="green">concluido</Status>
                        </td>
                    </tr>

                    <tr>
                        <td>Tarefa</td>
                        <td>20 miutos</td>
                        <td>há 2 meses</td>
                        <td>
                            <Status statusColor="green">concluido</Status>
                        </td>
                    </tr>

                    <tr>
                        <td>Tarefa</td>
                        <td>20 miutos</td>
                        <td>há 2 meses</td>
                        <td>
                            <Status statusColor="green">concluido</Status>
                        </td>
                    </tr>

                    <tr>
                        <td>Tarefa</td>
                        <td>20 miutos</td>
                        <td>há 2 meses</td>
                        <td>
                            <Status statusColor="green">concluido</Status>
                        </td>
                    </tr>

                    <tr>
                        <td>Tarefa</td>
                        <td>20 miutos</td>
                        <td>há 2 meses</td>
                        <td>
                            <Status statusColor="green">concluido</Status>
                        </td>
                    </tr>

                    <tr>
                        <td>Tarefa</td>
                        <td>20 miutos</td>
                        <td>há 2 meses</td>
                        <td>
                            <Status statusColor="yellow">Em andamento</Status>
                        </td>
                    </tr>

                    <tr>
                        <td>Tarefa</td>
                        <td>20 miutos</td>
                        <td>há 2 meses</td>
                        <td>
                            <Status statusColor="red">interrompido</Status>
                        </td>
                    </tr>
                </tbody>
              </table>
           </HistoryList>

        </HistoryContainer>
    
    )  
}