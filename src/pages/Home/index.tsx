import { Play, Watch } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountIput, Separator, StartCountdownButton, TaskInput } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod  from "zod";
import { useState } from "react";

const newCycleFormValidationSchema = zod.object({
  task: zod
  .string()
  .min(1, 'Infome a tarefa')
  .regex(
    /^(?=.*[a-zA-Z])(?!^\d+$)(?!^[^\w\s]+$).+$/,
    'A tarefa deve conter letras e pode conter números, mas não pode ser apenas números ou caracteres especiais'
  ),
  
  minutesAmount: zod.number().min(5).max(60),
})

// Tipagem do formulário com base no esquema Zod

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

export function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
    
    const {
      register, 
      handleSubmit, 
      watch,
      reset, 
      formState: { errors },
    } = useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: '',
        minutesAmount: 0,
      }
    
    });

    function handleCreateNewCycle(data: NewCycleFormData) {
      const id = String(new Date().getTime())
      
      const newCycle: Cycle = {
        id,
        task: data.task,
        minutesAmount: data.minutesAmount,
      }
      
      setCycles((state) => [...state, newCycle])
      setActiveCycleId(id)

      reset()

    }
    
    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
    
    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
    
    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2,'0')
    const seconds = String(secondsAmount).padStart(2,'0')

    
    
    console.log(activeCycle)

    const task = watch('task')
    const isSubmitDisabled = !task

   
    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                   {/* Campo "Task" */}
                  
                  <label htmlFor="task">vou trabalhar em</label>
                  <TaskInput  
                     id="task"
                     list="task-suggestions"
                     placeholder="Dê um nome para seu projeto"
                     type="text"
                     {...register('task')}
                     
                   />
                   
                   <datalist id="task-suggestions">
                      <option value="projeto 1"/>
                      <option value="projeto 2"/>
                      <option value="projeto 3"/>
                      <option value="qualquer"/>
                   </datalist>

                   {/* Exibição do erro de task */}
                   {errors.task && (
                     <p style={{ color: 'red', fontSize: '0.875rem' }}>
                     {errors.task.message}
                     </p>
                    )}

                   {/* Campo "Minutes" */}
                  <label htmlFor="minutesAmount">Durante</label>
                  <MinutesAmountIput
                    type="number" 
                    id="minutesAmount"
                    placeholder="00"
                    step={5}
                    min={5}
                    max={60}
                    {...register('minutesAmount', {valueAsNumber: true})}
                    />    
                    <span>minutos.</span>

                    {/* Exibição do erro de minutes */}
                   
                    {errors.minutesAmount && (
                       <p style={{ color: 'red', fontSize: '0.875rem' }}>
                         {errors.minutesAmount.message}
                       </p>
                    )}
                
                </FormContainer>

            <CountdownContainer>
              <span>{minutes[0]}</span>
              <span>{minutes[1]}</span>
              <Separator>:</Separator>
              <span>{seconds[0]}</span>
              <span>{seconds[1]}</span>
            </CountdownContainer>

            <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                <Play size={24} />
                começar
            </StartCountdownButton>
         </form>
        </HomeContainer> 
    )
}