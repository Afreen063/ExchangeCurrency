
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
    }
    if((!email.match(mailformat))&&email!=='')
        {
            setError(true)
            setErrorMsg("Incorrect Email")
        }
   
      if((email.match(mailformat))&&name!="")
      {
        return navigate('/Exchange') 
      }
   }
    return (
        <div className='bg-blue-100'>
            
            <h1 className='text-xxl text-center '>Currency Exchange</h1>
            <div className='Card'>
<form className='flex flex-column card-container green-container'>

   <div className='flex flex-column align-items-center justify-content-center h-10rem bg-blue-500 font-bold text-white border-round m-2 '>

        <label htmlFor="in">First Name</label>
        <br/>
        <InputText id="in" value={name} onChange={(e) => {setName(e.target.value); setInputerr(false)}} required/>
        {inputerr?<div className='errormsg text-pink-300'>Require your Name</div>:null}
    </div>

    <div className='flex flex-column align-items-center justify-content-center h-10rem bg-blue-500 font-bold text-white border-round m-2'>
         
         <label htmlFor='email'>E-mail</label>
          <InputText id='email' value={email} onChange={(e)=>{setEmail(e.target.value);setError(false)}} required/>
        {error?<div className='errormsg text-pink-300'>{errorMsg}</div>:null}
    </div>
    <div className=' flex align-items-center justify-content-center h-4rem bg-lightblue-500 font-bold text-white border-round m-2'>
          <Button type="submit" label="Submit" onClick={handleClick}/>
    </div>
</form>
</div>
 
 
        </div>
    )
}