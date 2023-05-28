import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="bg-neutral-950 w-screen flex justify-between">
    <div className="flex items-center ml-2">
      <Link to="/">
        <div className="flex items-center">
          <img
            src="https://media.discordapp.net/attachments/1112407805668884570/1112407856705192078/image.png"
            alt="Logo"
            className="h-12 w-16 mr-2"
          />
          <span className="text-white text-2xl ">Herssen</span>
        </div>
      </Link>
    </div>
    </nav>
  );
};

export default Navbar;
