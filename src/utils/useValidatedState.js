import { useState } from 'react';

export default function useValidatedState(initialState) {
  const [inputState, setState] = useState({
    value: initialState,
    errorMessage: '',
    isValid: false,
  });

  const onChange = (e) => {
    setState({
      value: e.target.value,
      errorMessage: e.target.validationMessage,
      isValid: !e.target.validationMessage,
    });
  };

  const reset = (value, isValid = false) => {
    setState({
      value,
      errorMessage: '',
      isValid,
    });
  };

  return { inputState, onChange, reset };
}
