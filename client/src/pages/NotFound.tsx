import { useNavigate } from 'react-router';

// MAKE A better not found page later lol
export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404</h1>
      <p>Oops! This isn't a page... (or we haven't made it yet)</p>
      <div>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
}
