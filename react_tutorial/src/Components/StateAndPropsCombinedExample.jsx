import React , {useState} from 'react'

const ChildComp = ({name , email}) =>
{
    return(
        <>
        
          <h1>Name : {name}</h1>
          <h2>Email : {email}</h2>
          <hr/> 
        </>
    );
}
const StateAndPropsCombinedExample = () => {
  const [name, setName] = useState('');
  const [Email, setEmail] = useState('');


  
  return (
    <>

    <label>
        Name1 :
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </label>
    <label>
        Email1 :
        <input type="text" value={Email} onChange={e => setEmail(e.target.value)} />
    </label>

    <hr/>
    
    <ChildComp name= {name} email={Email}/>
    <ChildComp name= "Brijesh" email="123@gmail.com"/>
    </>
  )
}

export default StateAndPropsCombinedExample