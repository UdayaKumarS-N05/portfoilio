import { Link } from "react-router-dom";
function Button({ to, children }) {
  return (
    <button>
      <Link to={to}>{children}</Link>
    </button>
  );
}

export default Button;
