import {useState} from 'react'

export default function SearchBar(props) {

    const {onSubmit} = props
    // array destructuring
    const [term, setTerm] = useState('')

    const handleChange = (event) => {
        // document.querySelector('input').value << dont do this!!
        setTerm(event.target.value)
    }


    const handleFormSubmit = (event) => {
        event.preventDefault()
        //prevent from reloading
        onSubmit(term)
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleChange} value={term} />
                {/* value binds the piece of state to term */}
            </form>
        </div>
    )
}