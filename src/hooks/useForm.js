import { useState, useCallback } from 'react';

export const useForm = (initialState = {}, onSubmit = () => {}) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    validate(name, value);
  }, []);

  const validate = useCallback((name, value) => {
    let error = '';
    
    switch (name) {
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Email is invalid';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 6) {
          error = 'Password must be at least 6 characters';
        }
        break;
      // Add more validation cases as needed
      default:
        if (!value && value !== 0) {
          error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        }
    }

    setErrors(prev => ({ ...prev, [name]: error }));
    return !error;
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const fieldErrors = {};
    Object.keys(values).forEach(key => {
      const error = validate(key, values[key]);
      if (error) fieldErrors[key] = error;
    });

    if (Object.keys(fieldErrors).length === 0) {
      try {
        await onSubmit(values);
        // Reset form after successful submission if needed
        // setValues(initialState);
      } catch (error) {
        console.error('Form submission error:', error);
        setErrors(prev => ({
          ...prev,
          submit: error.message || 'Something went wrong'
        }));
      }
    }

    setIsSubmitting(false);
  }, [values, validate, onSubmit, initialState]);

  const resetForm = useCallback(() => {
    setValues(initialState);
    setErrors({});
    setIsSubmitting(false);
  }, [initialState]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setValues,
    setErrors
  };
};
