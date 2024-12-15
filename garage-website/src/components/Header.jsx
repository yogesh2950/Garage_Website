const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    // const [currentImageIndex, setCurrentImageIndex] = useState(0);
    return (
        <>
            {/* Header */}
            <header className="w-full bg-gray-800 text-white flex justify-between items-center px-4 py-3 lg:col-span-2">
                {/* Left Section: Logo and Menu Button */}
                <div className="flex items-center">
                    {/* Menu Button: Visible only on Mobile/Tablet */}
                    <button
                        className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center lg:hidden"
                        onClick={toggleSidebar}
                        aria-label="Toggle Navigation Menu"
                    >
                        ☰
                    </button>
                    <img
                        // href="/home"
                        src="https://res.cloudinary.com/dpktednrm/image/upload/v1734181347/garage%20website/qfpkwppjmxbzwr1x1k7b.jpg"
                        alt="Garage Logo"
                        className="h-8 w-8 mr-2"
                    />
                    <h1 className="text-xl font-bold">VINTAGE CHARIOTS</h1>
                </div>

                {/* Desktop Navigation Links */}
                <nav
                    className="hidden lg:flex space-x-4"
                    role="navigation"
                    aria-label="Primary Navigation"
                >
                    <a
                        href="/contactUs"
                        className="px-4 py-2 text-gray-300 text-lg font-medium hover:text-white transition duration-200"
                    >
                        Contact Us
                    </a>
                    <a
                        href="/help"
                        className="px-4 py-2 text-gray-300 text-lg font-medium hover:text-white transition duration-200"
                    >
                        Help
                    </a>
                    <button className="w-24 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                        Login
                    </button>
                    <button className="w-24 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">
                        Sign Up
                    </button>

                </nav>

                {/* Sidebar for Mobile/Tablet */}
                {isSidebarOpen && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex flex-col items-start px-6 py-4">
                        <button
                            className="text-2xl text-white mb-6"
                            onClick={toggleSidebar}
                            aria-label="Close Sidebar"
                        >
                            ✕
                        </button>
                        <nav className="flex flex-col space-y-4" aria-label="Sidebar Navigation">
                            <ul className="space-y-4 p-4">
                                <li><button
                                    className="w-20 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                                    onClick={toggleSidebar}
                                >
                                    Login
                                </button></li>
                                <li><button
                                    className="w-20 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
                                    onClick={toggleSidebar}
                                >
                                    SignUp
                                </button></li>
                                <li>
                                    <a
                                        href="/contactUs"
                                        className="text-white text-lg font-medium hover:text-gray-400"
                                        onClick={toggleSidebar}
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li><a
                                    href="/help"
                                    className="text-white text-lg font-medium hover:text-gray-400"
                                    onClick={toggleSidebar}
                                >
                                    Help
                                </a></li>
                                <li><a href="/services"
                                    className="text-white text-lg font-medium hover:text-gray-400"
                                    onClick={toggleSidebar}>Services</a></li>
                                <li><a href="/maintenance"
                                    className="text-white text-lg font-medium hover:text-gray-400"
                                    onClick={toggleSidebar}>Maintenance</a></li>
                                <li><a href="/products"
                                    className="text-white text-lg font-medium hover:text-gray-400"
                                    onClick={toggleSidebar}>Products</a></li>
                                <li><a href="/aboutUs"
                                    className="text-white text-lg font-medium hover:text-gray-400"
                                    onClick={toggleSidebar}>Abouts Us</a></li>
                            </ul>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;