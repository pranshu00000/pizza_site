const NavBar = () => {
  return (
    <div className="flex bg-red-400 justify-between nv w-full pl-12 pr-20 ">
      <div className="flex">
        <img className="h-11" src="./images/logo.jpg" alt="" />
        <p className="pl-8  text-3xl">Lo Pizza</p>
      </div>
      <div>
        <ul className="flex list-none mt-2">
          
          <li>Home</li>
          <li>Menu</li>
          <li>Outlet</li>
          <li>Contact</li>
        </ul>
      </div>
      <button className="text-lg hover:bg-red-300 hover:border-red-500  w-20 border-2 border-red-300 rounded-lg">Sign-in</button>
    </div>
  );
};

export default NavBar;
