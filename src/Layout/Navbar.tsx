import { Link } from 'react-router-dom';

import { SiFalcon } from 'react-icons/si';
import SearchBar from '@/common/SearchBar';
import { IoCartOutline } from 'react-icons/io5';
import { CiUser } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Navbar: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items) || [];
  const cartQuantity = cartItems.reduce(
    (acc, item) =>
      acc + (typeof item.quantity === 'number' ? item.quantity : 0),
    0
  );
  // const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);

  // const dispatch = useAppDispatch();

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleLogout = () => {
  //   dispatch(logout());
  //   navigate('/login');
  // };

  return (
    <nav className="bg-[#0F172A] shadow-lg">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-white text-2xl font-bold flex flex-row items-center justify-center gap-x-2"
            >
              <SiFalcon />
              Falcon
            </Link>
          </div>
          <div className="pt-10">
            <SearchBar />
          </div>

          {/* Desktop Menu */}
          {/* <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-white hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-white hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>

            <Popover>
              <PopoverTrigger>
                <UserAvatar userName="Mahim" />
              </PopoverTrigger>
              <PopoverContent className="mr-3 bg-website-color-darkGray border-none text-white">
                <Button
                  onClick={handleLogout}
                  className="bg-website-color-lightGray text-black w-full"
                >
                  Logout
                </Button>
              </PopoverContent>
            </Popover>
          </div> */}

          {/* Mobile Menu Button */}
          {/* <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div> */}

          <div className="cursor-pointer text-white flex flex-row items-center justify-center gap-x-5 text-2xl pr-5">
            <div className="relative">
              <IoCartOutline />
              {cartQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartQuantity}
                </span>
              )}
            </div>
            <CiUser />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
