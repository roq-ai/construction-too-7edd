import * as yup from 'yup';

export const salesAssociateValidationSchema = yup.object().shape({
  hire_date: yup.date().required(),
  salary: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  outlet_id: yup.string().nullable().required(),
});
