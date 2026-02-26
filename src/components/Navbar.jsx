import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <img src="../images/shield.png" alt="" />
        <h1 className='logo'>Bomb Detection Application</h1>
        <p className='status'>Simulation Active</p>
    </nav>
  )
}

export default Navbar