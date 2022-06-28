import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="flex" style={ {
    display:"flex",
    gap: "10px",
  justifyContent :"center",
  marginBottom:"20px"
    }}>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/new"}> New </Link>
      </div>
      <div>
        <Link to={"/edit"}>Todos </Link>
      </div>
      <div><Link to={"/summary"}>Summary</Link></div>
    </div>
  );
};
