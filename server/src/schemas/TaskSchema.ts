import yup from 'yup'

export const taskSchema = yup.object().shape({
        description: yup.string().required('A descrição da tarefa é obrigatória').max(255),
        completed: yup.boolean()
})