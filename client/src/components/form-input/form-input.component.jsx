import React from 'react';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './form-input.styles';
// import './form-input.styles.scss';

export const FormInput = ({ label, handleChange, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
  // <div className="group">
  //   <input
  //     className="form-input"
  //     onChange={handleChange}
  //     {...props}
  //   ></input>
  //   {label ? (
  //     <label
  //       className={`${
  //         props.value.length ? 'shrink' : ''
  //       } form-input-label`}
  //     >
  //       {label}
  //     </label>
  //   ) : null}
  // </div>
);

export default FormInput;
