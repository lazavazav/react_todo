import React from 'react';


function Header() {
  return (
    <header style={headerStyle}>
      <h1>My To Do Check List</h1>
    </header>
  )
}

const headerStyle = {
  background: 'blue',
  color: 'white',
  padding: '10px'
}
export default Header;