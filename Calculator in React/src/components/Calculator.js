import React, { useState } from 'react';
const Calculator=()=>{
    const[result,setResult]=useState("");   
    const buttons=[
    'AC', 'DEL', '%','/',
    '7', '8', '9', '+',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=',
    ];
    const handleButton=(button)=>{
    try{
        if(button==='AC'){
            setResult("");
        }
        else if(button==="DEL"){
            setResult((result.toString()).slice(0,-1));
        }
        else if(button==="="){
            setResult(eval(result).toString());
        }
        else if(result==='' && button==='0'){
            setResult("");   
        }
        else{
            setResult((previousResult)=> previousResult==="Syntax error"?button:result+button);   
        }
    }
    catch(error){
        setResult("Syntax error");
    }
    };

    const handleInputChange=(e)=>{  
        setResult(e.target.value);
    };

   return(
    <div className='outer'>
    <div className='container'>
    <div className='calculator'>
            <div className='screen'>
                <input className='result' placeholder='0' value={result} onChange={handleInputChange}></input>
            </div>
            <div className='button-box'>
                <div className='row'>
                {buttons.map((button,index)=>{
                    return(
                        <div className={`col-3 button${button === '=' ? ' col-6' : ''}`} key={index}>
                        <button onClick={()=>handleButton(button)}>{button}</button>
                        </div>
                    )
                })}
                </div>
            </div>
    </div>
    </div>
    </div>
   );
};
export default Calculator;


