import Logo from "@/app/boards/components/Logo";
import Navigation from "@/app/boards/components/Navigation";
import Profile from "@/app/boards/components/Profile";

const Header = () => {
  return (
    <div className="bg-white fixed top-0 left-0 w-screen h-[70px] border-b-gray-300 flex gap-4 justify-between  items-center px-4 py-2 ">
      <Logo />
      <Navigation />
      <Profile />
    </div>
  );
};

export default Header;
