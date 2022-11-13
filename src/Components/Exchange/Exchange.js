import {useEffect, useState} from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Chart } from 'primereact/chart';


export default function Exchange()
{
    const navigate=useNavigate();
     const [amount,setAmount]=useState(0);
     const [base,setBase] = useState("");
     const [to,setTo] = useState("");
     const [showR, setShowR] =useState(false);
     const [oneRate , setOneRate]=useState(0);

     function addAmount(event)
     {
        setAmount(event.target.value);
     }

     function addBase(event)
     {
        setBase(event.target.value);
     }

     function addTo(event)
     {
        setTo(event.target.value);
     }



    const [result,setResult]=useState([])
    
       const showResult= async()=>{
        const res = await fetch(`/api/${to},${base},${amount}`);
        const json = await res.json();
        const rate=await fetch(`/api/${to},${base},1`);
        const ratejson=await rate.json();
        setOneRate(ratejson);
        console.log(json);
          setShowR(true);
          setResult(json);
       }
       //chart for currency exchange
       const  [label,setLabel]=useState([]);
       const [datacurrency,setDataCurrency]=useState([]);
       useEffect(()=>{
        async function chart()
        {
           const res=await fetch('/api');
           const json=await res.json();
           console.log(json);
           setLabel( Object.keys(json));
          // console.log(label);
          setDataCurrency(Object.values(json));
          console.log(datacurrency);
          setBasicData({ labels: label,
            datasets: [
                {
                    label: 'Base USD(Doller)',
                    backgroundColor: '#42A5F5',
                    data: [ 100, 100, 100, 100, 100]
                },
                {
                    label: 'other Currency',
                    backgroundColor: '#FFA726',
                    data: datacurrency
                }
            ]})
        }
        chart();
       },[])
        const [basicData, setBasicData] = useState({});

        const getLightTheme = () => {
            let basicOptions = {
                maintainAspectRatio: false,
                aspectRatio: .8,
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    }
                }
            };
            return {
                basicOptions,}
            }
        
        const { basicOptions} = getLightTheme();
    return (
        <div>
            <div className='bg-blue-200 '>
            <Button className='mt-3' onClick={()=>{
                return navigate('/') 
            }}>Home</Button>
                <h1 className='text-center'>Currency Conversion</h1>
                <div className='flex flex-column'>
                    <div className='flex flex-row justify-content-around'>
                    <label htmlFor="amt" className='flex align-items-center justify-content-center w-10rem h-4rem bg-white-500 font-bold text-gray-900 m-2' > Amount </label>
                    <label htmlFor="base" className='flex align-items-center justify-content-center w-10rem h-4rem bg-white-500 font-bold text-gray-900 m-2'> From </label>
                    <label htmlFor="to" className='flex align-items-center justify-content-center w-10rem h-4rem bg-white-500 font-bold text-gray-900 m-2'> To </label>
                    </div>
                    <div className='flex flex-row justify-content-around'>
                    <InputText id="amt" className='flex' value={amount} onChange={addAmount}  required/>
                    <InputText id="base" className='flex' value={base} onChange={addBase} required/>
                    <InputText id="to" className='flex' value={to} onChange={addTo} required />
                    </div>
                    <div className='flex flex-row justify-content-between mt-6'>
                    <div className='flex'>
                    {showR?<div>
                          <h3>1 {base} = {oneRate} {to}</h3>
                          <h2>Result = {result}</h2>
                    </div>:null}
                    </div>
                    <Button className='flex mr-8 ' onClick={showResult}>Convert</Button>
                    </div>
                </div>
            </div>
            <div className="card">
                <h5>Currency Comparision</h5>
                <Chart type="bar" data={basicData} options={basicOptions} />
            </div>
        </div>
    )
}