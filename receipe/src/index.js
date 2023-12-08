import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function addSteps(stepArray, targetId) {
  let targetDiv = document.getElementById(targetId);
  for (let i = 0; i < stepArray.length; i++) {
    //retrieve step from array
    let step = stepArray[i];
    //create empty element node for step
    let stepNode = createElement("p");
    //create text node to hold text
    let stepText = document.createTextNode(step);
    //append name to empty element node
    stepNode.appendChild(stepText)
    targetDiv.appendChild(stepNode)
  }
}

function App(){

  const description = "Peculiar type of ration emerged from the depths of hell. Its appearance veiled in obscurity, its origins shrouded in mystery, its existence rumored to date back to the dawn of time itself."

  const disclaimer = "Not a meal for the faint-hearted. The creator of this recipe shall not be held liable for any harm or injuries, whether physical or emotional, incurred by those who attempt to try it."
  const step1 = 'Submerge instant noodle in hot water for 3 minutes (optional)'
  const step2 = 'Add a tomato, or some orange pigments into the mix'
  const step3 = 'Stir thoroughly'
  const step4 = 'Throw in a piece of dark chocolate'
  const step5 = '???'
  const step6 = 'success!'
  const steps = [step1, step2, step3, step4, step5, step6]

  var stepNum = steps.length
  // var renderedSteps = arr.map(item => <div> {item} <div/>)

  let deathCount = 0;
  function deathCountAdd() {
    deathCount = deathCount+1;
  }

  return (
    <>
    
      <div>
        <h2>My Receipe</h2>
        <h1>Yummy Chocolate Noodle *Cursed</h1>
      </div>

      <div>
        <img src="https://im.indiatimes.in/content/2020/Jun/Chocolate-maggi_5ef07e08bf5ab.jpg?w=1200&h=900&cc=1" style={{width:500}}></img>
      </div>

      <body>
        {description}
      </body>

      <div id="preface">
        <div>Disclaimer:</div>
        <div>{disclaimer}</div>
      </div>

      <div id="stepID"> 
        <h2>How to make it</h2>
        {/* {addSteps(steps, stepID)} */}
      </div>

        

      <div>
        Step 1: {step1}
      </div>
      <div>
        Step 2: {step2}
      </div>
      <div>
        Step 3: {step3}
      </div>
      <div>
        Step 4: {step4}
      </div>
      <div>
        Step 5: {step5}
      </div>
      <div>
        Step 6: {step6}
      </div>

      <div>
        the current puke count is {deathCount}
        <button onclick={deathCountAdd}>I puked</button>
      </div>
    </>
  )
}


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

