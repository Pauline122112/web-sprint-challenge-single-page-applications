import * as yup from 'yup'

export default yup.object().shape({
    username: yup.string()
        .required('Username is required')
        .min(5, 'Username must be 5 characters or longer'),
    email: yup.string()
        .email('Must be a valid email')
        .required('Email is required'),
    pizza: yup.string()
        .oneOf(['hawaiian','pepperoni', 'sausage', 'cheese', 'chicken', 'ham', 'vegetarian'], 'Role is required'),
    gluten: yup.string()
        .oneOf(['yes', 'no'],'gluten status is required' ),
    //WE ARE DONE WITH CHECKBOXES
    mushroom: yup.boolean(),
    tomatoes: yup.boolean(),
    pineapple: yup.boolean(),
})
