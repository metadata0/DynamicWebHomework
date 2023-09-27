import {useState} from 'react'
import {ReactComponent as Heart} from '@material-design-icons/svg/filled/favorite.svg'
import styles from './RecipeCard.module.css'

export default function UserRating() {
    //array destructuring, this is a nice way to access a piece of state and its setting
    //count is our piece of state
    //setCount is our setter for count
    //useState(0) defines the initial count at 0, aka our default state for when the component 
    let[count, setCount] = useState(0)

    let[StateMinus, setMinusState] = useState(true)
    let[StatePlus, setPlusState] = useState(true)


    const handlePlusClick = () => {
        if (count < 5){
            setCount(count+1)
        }
        checkHidden()
        return
    }
        

    const handleMinusClick = () => {
        if (count > 0) {
            setCount(count-1)
        }
        checkHidden()
        return
    }

    const checkHidden = () => {
        if (count == 5) {
            setPlusState(false)
        }
        else {
            setPlusState(true)
        }

        if (count == 1) {
            setMinusState(false)
        } 
        
        else{
            setMinusState(true)
        }
        return
    }
    

    return (
        <div className={styles.ratings_wrapper}>
            {StateMinus && <button onClick={handleMinusClick}>[-]</button>}
            {/* mapping over an array with count num of slots and render a span with an html heart for each  */}
            <span className={styles.hearts_wrapper}>

                {/* <p>{count}</p> */}

            {
                [...Array(count)].map((heart, i) => {
                    return (
                            <span className={styles.heart} key={i}>
                                <Heart></Heart>
                                {/* &#9829; */}
                            </span>
                    )
                })
            }
            </span>
            {/* {count} */}
            {StatePlus && <button onClick={handlePlusClick}>[+]</button>}
        </div>
    )
}