import { object, string, boolean, number } from 'yup'

export const validateTaskSchema = object().shape({
        description: string().required('A descrição da tarefa é obrigatória').max(255),
        completed: boolean()
});

export const validateIdSchema = number().integer().required('Informe um ID');