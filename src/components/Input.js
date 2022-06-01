import React from "react";
import { Label, GroupInput, LegendError, Input, IconValidate } from './../elements/Form'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
export default function ComponentInput({ regExp, setUser, state, label, placeholder, type, name, legendError}) {
  const onChange = (e)=>{
    setUser({...state, fielf: e.target.value})
    console.log(state)
  }

  const validation =()=>{
    if(regExp){
      if(regExp.test(state.fielf)){
        setUser({...state, value:'true'})
          console.log('correct')
      }else{
        setUser({...state, value:'false'})
      }
    }
  }

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
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
        <IconValidate icon={faCheckCircle} />
      </GroupInput>
      <LegendError>Lorem upsum</LegendError>
    </div>
  );
}

/*
Sres Salud Total 
En tramite de la siguientes autorizaciones adjutas, en los posible en el mismo laboratorio
La repusta al email yuleysatencio@gmail.com .Ya que tengo inconvenientes con su plataforma.

Gracias*/
