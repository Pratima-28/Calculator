import styles from '../styles/buttons.module.css'

const Buttons = ({clearInput, handleBackspace, handleOnClick, handleEquals, handlePlusMinus}) =>{
    
// JSX which contains all the number and operator buttons
    return(
        <div className={styles.button}>
            <div>
            <button onClick={clearInput} className={styles.btn}>
                Clear
            </button>
            <button onClick={handleBackspace} className={styles.btn}>
                Back
            </button>
            <button onClick={()=>handlePlusMinus('+/−')} className={styles.btn } >
                +/−
            </button>
            <button onClick={()=>handleOnClick('%')} className={styles.btn}>
                %
            </button>
            </div>

            <div>
            <button onClick={()=>handleOnClick('7')} className={styles.number} >
                7
            </button>
            <button onClick={()=>handleOnClick('8')} className={styles.number}>
                8
            </button>
            <button onClick={()=>handleOnClick('9')} className={styles.number}>
                9
            </button>
            <button onClick={()=>handleOnClick('+')} className={styles.number}>
                +
            </button>
            </div>

            <div>
            <button onClick={()=>handleOnClick('4')} className={styles.number}>
                4
            </button>
            <button onClick={()=>handleOnClick('5')} className={styles.number}>
                5
            </button>
            <button onClick={()=>handleOnClick('6')} className={styles.number}>
                6
            </button>
            <button onClick={()=>handleOnClick('-')} className={styles.number}>
                -
            </button>
            </div>

            <div>
            <button onClick={()=>handleOnClick('1')} className={styles.number}>
                1
            </button>
            <button onClick={()=>handleOnClick('2')} className={styles.number}>
                2
            </button>
            <button onClick={()=>handleOnClick('3')} className={styles.number}>
                3
            </button>
            <button onClick={()=>handleOnClick('*')} className={styles.number}>
                *
            </button>
            </div>


            <div>
            <button onClick={()=>handleOnClick('0')} className={styles.number}>
                0
            </button>
            <button onClick={()=>handleOnClick('.')} className={styles.number}>
                .
            </button>
            <button onClick={()=>handleEquals('=')} className={styles.number}>
                =
            </button>
            <button onClick={()=>handleOnClick('/')}className={styles.number} >
                ÷
            </button>
            </div>
        </div>
    )
}

export default Buttons;