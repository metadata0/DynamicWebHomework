


import RECIPE_IMG from '../assets/Chocolate-maggi_5ef07e08bf5ab.jpg'

import {RECIPE} from './recipe-data'
import RecipeInfo from '../RecipeInfo'

import style from './recipecard.css'


export default function RecipeCard() {

    return (
        <Card>
            <img src={RECIPE.imgSrc} style={{width: '700px', height: '1198px', objectFit: 'cover', objectPosition:' 10% 0'}}/>

            <div>

                <RecipeInfo title={RECIPE.title} description={RECIPE.description} />

                <div className='info'>
                    <IngredientsList ingredients={RECIPE.ingredients} />
                    <InstructionsList instructions={RECIPE.instructions}  />
                </div>

            </div>
            {/* a jsx component */}
        </Card>
    )
}

function Card(props) {
    return <div className="card">{props.children}</div>
    //"{props.children}" means that whatever that is contained within this class is its children.
}

// a way to say that the JSX function takes the following parameters within the bracket
function InstructionsList(props) {
    //constants within a class 
    const {instructions} = props
    return (
        <div>
            <h3>Instructions</h3>
            <ol className='list'>
                {instructions.map((i, index) => (
                    <li key={index}>{i}</li>
                ))}
            </ol>
        </div>
    )
}

function IngredientsList(props) {
    const {ingredients} = props

    return (
        <div>
            <h3>Ingredients</h3>
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '98px'}}>

                <div>
                    {(ingredients).map((i, index) => (
                        <ul key={index} className='list'>{i.q}</ul>
                    ))}
                </div>

                <div>
                    {(ingredients).map((i, index) => (
                        <ul key={index} className='list'>{i.c}</ul>
                    ))}
                </div>

            </div>


            {/* <p>{ingredients}
            </p> */}
        </div>
    )
}
    
