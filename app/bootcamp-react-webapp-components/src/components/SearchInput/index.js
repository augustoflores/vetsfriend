import React, { useState } from 'react';
// on change event_=>setate(event.target.value)

function SearchInput (props){
  const [state,setState] = useState('')

  return (
    <input
      value={state}
      onChange={(event)=>setState(event.target.value)}
      {...props}
    />
  )
}

export default SearchInput;
