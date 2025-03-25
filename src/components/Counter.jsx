// import React, { useState } from 'react';

// function Counter() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <button onClick={() => setCount(count - 1)}>Decrement</button>
//         </div>
//     );
// }

// export default Counter;
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('Welcome Students');

  function Updatename(){
    setName('This is Class 2 of React');
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={Updatename}>Next</button>
    </div>
  );
}

export default App;