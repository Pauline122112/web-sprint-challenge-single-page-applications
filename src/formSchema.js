import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Name is required.')
        .min(2, 'Name must be at least 2 characters long'),
    size: yup.string()
        .required('Size is required'),
    chicken: yup.boolean(),
    cheese: yup.boolean(),
    pineapple: yup.boolean(),
    mushroom: yup.boolean(),
    instructions: yup.string()
})

export default formSchema