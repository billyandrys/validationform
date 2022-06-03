import React from "react";
import { Label, GroupInput, LegendError, Input, IconValidate } from './../elements/Form'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
export default function ComponentInput({ regExp, setChange, state, label, placeholder, type, name, legendError, funcction}) {
  const onChange = (e)=>{
    setChange({...state, fielf: e.target.value})
  }

  const validation =()=>{
    if(regExp){
      if(regExp.test(state.fielf)){
        setChange({...state, value:'true'})
         
      }else{
        setChange({...state, value:'false'})
        
      }
    }

    funcction()
  }

  return (
    <div>
      <Label htmlFor={name} valid={state.value}>{label}</Label>
      <GroupInput>
        <Input  type={type}
                placeholder={placeholder}
                id={name}
                legendError={legendError}
                value={state.fielf}
                onChange={onChange}
                onKeyUp={validation}
                onBlur={validation}
                valid={state.value}
                />
        <IconValidate icon={state.valid === 'true' ? faCheckCircle : faTimesCircle} valid={state.value}/>
      </GroupInput>
      <LegendError valid={state.value}>{legendError}</LegendError>
    </div>
  );
}

