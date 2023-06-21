
import Styles from '../styles/display.module.css'

const Display = ({input, result}) =>{

// jsx for input and result
    return(
        <div className={Styles.wrapper}>

            <div className={Styles.display}>
                {result? result : ''}
            </div>
            <div className={Styles.display}>    
                {input || '0'}
            </div>

            
        </div>

        
    )
}

export default Display;