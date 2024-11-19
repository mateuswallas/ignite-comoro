import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountIput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                  <label htmlFor="task">vou trabalhar em</label>
                  <TaskInput  
                     id="task"
                     list="task-suggestions"
                     placeholder="Dê um nome para seu projeto"
                   />
                   <datalist id="task-suggestions">
                      <option value="projeto 1"/>
                      <option value="projeto 2"/>
                      <option value="projeto 3"/>
                      <option value="qualquer"/>
                   </datalist>


                  <label htmlFor="minutesAmount">durante</label>
                  <MinutesAmountIput
                    type="number" id="minutesAmount"
                    placeholder="00" />    
            
                  <span>minutos.</span>
                </FormContainer>

            <CountdownContainer>
              <span>0</span>
              <span>0</span>
              <Separator>:</Separator>
              <span>0</span>
              <span>0</span>
            </CountdownContainer>

            <StartCountdownButton disabled type="submit">
                <Play size={24} />
                começar
            </StartCountdownButton>
         </form>
        </HomeContainer> 
    )
}