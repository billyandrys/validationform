import {Form, Label, GroupInput,
    LegendError, IconValidate,
    ContainerTerms, ContainerBottonCenter,
     Button, MesageError, MessageExit} from './elements/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import ComponentInput from './components/Input';
import { useState } from 'react'
function App() {
  const [user, setUser]= useState({fielf:'', value:null})
  const [name, setName]= useState({fielf:'', value:null})
  const [password, setPassword]= useState({fielf:'', value:null})
  const [phone, setPhone]= useState({fielf:'', value:null})
  const [email, setEmail]= useState({fielf:'', value:null})

  const expressions = {
		user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		phone: /^\d{7,14}$/ // 7 a 14 numeros.
	}

  return (
    <main>
      <Form>
         <ComponentInput
            state={user}
            setUser={setUser}
            name='user'
            type='text'
            label='user'
            placehoder='user name'
            legendError='the user must have between 4 and 16 digits'
            regExp={expressions.user}
              
            />
         
        
          <ContainerTerms>
                  <input type='checkbox' name='terms' id='terms'/>
                  I accept terms and conditions
          </ContainerTerms>
        
        
        
          { false && <MesageError>

            <b>Error: </b>
            please enter valid data
          </MesageError>}
        <ContainerBottonCenter>
          <Button type='submit'>Enviar</Button>
        <MessageExit>Form send exit!</MessageExit>
        </ContainerBottonCenter>
      </Form>      
     </main>
  );
}

export default App;
