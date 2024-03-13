import React, { useState } from 'react';

const CheckBoxTut = () => {
  const options = ["Hello", "Hi", "Bye" , "sddffsds"];
  const arr2 = ["lahore", "India" , "British"]
  const [selectedOption, setSelectedOption] = useState('');
  const [optionTwo, setoptiontwo] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
   function handleSubmit(){

    console.log(`The first option selected is ${selectedOption} and the second Option selected is ${optionTwo}`)
    setSubmitted((pre) => !pre);
   }
  
  return (
    <>
    
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={handleChange}
            />
            {option}
          </label>
        </div>
      ))}
      <div>Selected option: {selectedOption}</div>
    </div>

   <div>
       <h1>Checkbox 2</h1>
       {arr2.map((item , index) => (
          <div key={index}>
             <label>
                <input type="radio" value={item} onChange={(e) => setoptiontwo(e.target.value)}
                   checked = {optionTwo === item}
                />
                {item}
             </label>
          </div>
       ))}
       <h3>The second Option that is selected is {optionTwo}</h3>
   </div>
   
   <button onClick={handleSubmit}>Submit</button>
   {submitted && <h3> {optionTwo} and {selectedOption} </h3>}
    </>
  );
}

export default CheckBoxTut;
