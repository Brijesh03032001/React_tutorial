import { memo, useState } from 'react';

const EmployProfile = memo(function MemoExample({ name, email }) {
  return (<>
        <p>Name:{name}</p>
        <p>Email: {email}</p>
        </>);
});
function MemoExample() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <>
      <label>
        Name: <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Email: <input value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <hr/>
      <EmployeeProfile name={name}/>
    </>
  );
}

export default MemoExample;