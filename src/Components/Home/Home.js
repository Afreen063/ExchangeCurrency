
import { InputText } from 'primereact/inputtext';
import {Button} from 'primereact/button'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

 

export default function Home()
{
    const [name, setName]=useState('');
    const [email, setEmail]=useState("");
    const [error, setError]=useState(false);
    const [inputerr, setInputerr]=useState(false);
    const [errorMsg, setErrorMsg]=useState("")
    const navigate=useNavigate();
   function handleClick(event)
   {
    event.preventDefault();
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(name=="")
    {
        setInputerr(true);
    }
    if(email=='')
    {
        setError(true);
        setErrorMsg("Require Your E-Mail");
        if(!email.match(mailformat)&&email!='')
        {
            setErrorMsg("Incorrect Email")
        }
    }
   
      if(inputerr&&error)
      {
        return navigate('/Exchange') 
      }
   }
    return (
        <div >
            
            <h1 className='text-xl text-center '>Currency Exchange</h1>
<form className='Form'>
    <label htmlFor="in">First Name</label>
    <InputText id="in" value={name} onChange={(e) => setName(e.target.value)} required/>
    {inputerr?<div className='errormsg'>Require your Name</div>:null}
    <br/>
    <label htmlFor='email'>E-mail</label>
    <InputText id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
    
    {error?<div className='errormsg'>{errorMsg}</div>:null}
    <br/>
    <Button type="submit" label="Submit" onClick={handleClick}/>
</form>
 
        </div>
    )
}