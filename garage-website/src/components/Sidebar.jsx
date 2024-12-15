const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    return (
        <>
            {/* Sidebar */}
            <aside
                className={`bg-gray-800 text-white h-screen mt-16 fixed lg:relative transform transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0 w-64`}
            >

                <ul className="space-y-4 p-4">
                    <li><a href="/services"
                        className="text-white text-lg font-medium hover:text-gray-400"
                    >Services</a></li>
                    <li><a href="/maintenance"
                        className="text-white text-lg font-medium hover:text-gray-400"
                    >Maintenance</a></li>
                    <li><a href="/products"
                        className="text-white text-lg font-medium hover:text-gray-400"
                    >Products</a></li>
                    <li><a href="/aboutUs"
                        className="text-white text-lg font-medium hover:text-gray-400"
                    >Abouts Us</a></li>
                </ul>
            </aside>
        </>
    );
}

export default Sidebar;