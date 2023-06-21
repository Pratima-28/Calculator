
import styles from '../styles/calculator.module.css' ;
import Display from "./Display";
import Buttons from './Buttons'
import { useState } from 'react';


const Calculator = () =>{
    // setting state
    const [input, setInput]= useState('');
    const [result, setResult]= useState('');
    const operators = ['/', '*', '+', '-', '.','%','='];
    const equals = false;

    // To handle clear input
    const clearInput = ()=>{
        setInput('');
        setResult('');
    }

    // to handle backspace
    const handleBackspace= ()=>{
        setInput(input.toString().slice(0,-1));
        setResult('');
    }

    //  to handle onClick on buttons
    const handleOnClick= (value)=>{
        if((operators.includes(value) && input === '') 

        ){return}
        setInput(input+value);
    }

    // to handle equals to get result
    const handleEquals=()=>{
        if(input===0 || input===''){
            return;
        }
        
        
        const value = input.toString().charAt(input.length-1);
        const curr = input.toString().charAt(input.length-2);
        const prev = input.toString().charAt(input.length-3)
          if(operators.includes(value) || operators.includes(curr) && operators.includes(prev)){
            return setInput(0);
          }

        setResult(eval(input).toString());
    }

    // to handle minus sign for negative number
    const handlePlusMinus = (value)=>{
        if(input===0 || input===''){
            return;
        }
        setInput(parseInt(input, 10)*-1);
    }

    
// JSX
    return(
        <div className={styles.container}>
        <div className={styles.calculator}>

        {/* display component which shows the input and result */}
        <Display 
        equals={equals}
        input={input}
        setInput={setInput}
        result={result}
        setResult={setResult}
        
        />

        {/* button component conatins all the buttons */}
        <Buttons 
        clearInput={clearInput}
        handleBackspace={handleBackspace}
        handleOnClick={handleOnClick}  
        handleEquals={handleEquals} 
        handlePlusMinus={handlePlusMinus}    
         />
        </div>
        </div>
    )
}

export default Calculator;