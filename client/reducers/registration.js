import * as types from '../actions/actionTypes';

let updatedForm;

const initialForm = {
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  email: '',
  country: '',
  state: '',
  city: '',
  postalCode: '',
  street: '',
};

const registration = (state = initialForm, action) => {
  switch (action.type) {
    case types.REGISTRATION_INPUT:
      updatedForm = {
        ...state,
      };
      updatedForm[action.field] = action.value;
      return {
        ...state,
        ...updatedForm,
      };
    case types.SUCCESSFUL_REGISTER:
      return initialForm;
    case types.FAILED_REGISTER:
      return initialForm;
    default:
      return state;
  }
};

export default registration;
