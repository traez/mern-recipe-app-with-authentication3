import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Navbar() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/create-recipe">Create Recipe</Link>

      {!cookies.access_token ? (
        <Link to="/auth">Login/Register</Link>
      ) : (
        <>
          <Link to="/saved-recipes">Saved Recipes</Link>
          <button onClick={logout}> Logout </button>
        </>
      )}
    </div>
  );
}
