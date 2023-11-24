import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={{
        background: '#fff'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link to="/" style={{
            color: '#333',
            textDecoration: 'none'
        }}>
          <h1>Recipe Buddy</h1>
        </Link>
      </div>
    </header>
  );
}
