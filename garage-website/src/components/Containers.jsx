const Containers = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of images for Container 1
    const images = [
        "https://res.cloudinary.com/dpktednrm/image/upload/v1734181735/garage%20website/jyfbqq9ck7tzp3qegtar.jpg",
        "https://res.cloudinary.com/dpktednrm/image/upload/v1734181735/garage%20website/jnnhiakn1kfblqu7wzd2.jpg",
        "https://res.cloudinary.com/dpktednrm/image/upload/v1734181735/garage%20website/tzldi5c1vuvyfoabaotn.jpg",
        "https://res.cloudinary.com/dpktednrm/image/upload/v1734181735/garage%20website/f32pkz86pkg3t3abgqxf.jpg",
    ];

    const teamMembers = [
        { name: "John Doe", role: "Lead Mechanic", image: "https://res.cloudinary.com/dpktednrm/image/upload/v1734182483/garage%20website/luqil1amvly38uasmbjb.png" },
        { name: "Jane Smith", role: "Service Advisor", image: "https://res.cloudinary.com/dpktednrm/image/upload/v1734182483/garage%20website/eku24bmu704nzb90megf.png" },
        { name: "Mike Brown", role: "Technician", image: "https://res.cloudinary.com/dpktednrm/image/upload/v1734182483/garage%20website/njnubw2pyy4bk537nb6e.png" },
    ];


    // Automatically scroll images using setTimeout
    useEffect(() => {
        const interval = setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearTimeout(interval); // Cleanup on unmount
    }, [currentImageIndex]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    const products = [
        {
            id: 1,
            name: "Product 1",
            image: "https://res.cloudinary.com/dpktednrm/image/upload/v1734182147/garage%20website/scc32kaczdpdgw1xa8oq.jpg",
            description: "This is a description for Product 1.",
        },
        {
            id: 2,
            name: "Product 2",
            image: "https://res.cloudinary.com/dpktednrm/image/upload/v1734182146/garage%20website/gbuyg5s8ywzeiktoecg9.jpg",
            description: "This is a description for Product 2.",
        },
        {
            id: 3,
            name: "Product 3",
            image: "https://res.cloudinary.com/dpktednrm/image/upload/v1734182146/garage%20website/mf2zyd0rznxsb9ipanxc.jpg",
            description: "This is a description for Product 3.",
        },
        {
            id: 4,
            name: "Product 4",
            image: "https://res.cloudinary.com/dpktednrm/image/upload/v1734182146/garage%20website/ggvz4nt32voq7czt80rn.jpg",
            description: "This is a description for Product 4.",
        },
    ];

    const [selectedPlan, setSelectedPlan] = useState("Basic");

    const membershipDetails = {
        Basic: [
            "Access to standard services",
            "Monthly vehicle checkup",
            "Discounted rates for repairs",
            "Priority customer support",
        ],
        Pro: [
            "All Basic features included",
            "Unlimited premium services",
            "Free vehicle wash every month",
            "24/7 roadside assistance",
            "Exclusive member-only discounts",
        ],
    };

    const testimonials = [
        {
            id: 1,
            image: "https://res.cloudinary.com/dpktednrm/image/upload/v1734182483/garage%20website/njnubw2pyy4bk537nb6e.png", // Replace with real image URL
            name: "John Doe",
            rating: 5,
            feedback: "Excellent service! My car feels brand new. Highly recommended.",
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/dpktednrm/image/upload/v1734182483/garage%20website/eku24bmu704nzb90megf.png",
            name: "Jane Smith",
            rating: 4,
            feedback: "Friendly staff and quick turnaround. Great experience!",
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/dpktednrm/image/upload/v1734182483/garage%20website/luqil1amvly38uasmbjb.png",
            name: "Michael Brown",
            rating: 5,
            feedback: "Affordable pricing and professional work. Very satisfied!",
        },
        {
            id: 4,
            image: "https://res.cloudinary.com/dpktednrm/image/upload/v1734182483/garage%20website/skdxlqkzsrmrajyknul3.png",
            name: "Tailor Brown",
            rating: 4,
            feedback: "Affordable pricing and professional work. Very satisfied!",
        },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setTimeout(() => {
            setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000); // Scroll every 3 seconds
        return () => clearTimeout(interval);
    }, [currentTestimonial]);

    return (
        <>
            {/* Main Content */}
            <main className="h-auto w-100% ml-80 p-8 mr-0 bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Container 1 */}
                <div className="bg-white p-4 border border-gray-300 shadow-md rounded-lg transform transition duration-500 hover:scale-105">
                    <h2 className="text-lg font-bold mb-4">Meet Our Team</h2>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src="https://res.cloudinary.com/dpktednrm/image/upload/v1734181347/garage%20website/y5curfgcr6bbp0td2qyn.jpg"
                            alt="Garage-Owner"
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-center text-lg font-semibold">John Smith</h3>
                        <p className="text-base text-gray-800">Owner</p>
                    </div>
                    <div className="flex space-x-4">
                        {teamMembers.map((member) => (
                            <div className="text-center space-y-2 mb-4">
                                <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-2" />
                                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Container 2 */}
                <div className="bg-white p-4 border border-gray-300 shadow-md rounded-lg transform transition duration-500 hover:scale-105">
                    <h2 className="text-lg font-bold mb-4">Who are we?</h2>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://res.cloudinary.com/dpktednrm/image/upload/v1734181735/garage%20website/imqntwtfwokrv8wwndar.jpg"
                            alt="Garage"
                            className="w-full h-60 object-cover rounded-md mb-4"
                        />
                        <p className="text-md text-gray-600 leading-relaxed">
                            Welcome to our state-of-the-art garage! We offer top-notch
                            services, maintenance, and high-quality products to keep your
                            vehicle in excellent condition.
                        </p>
                    </div>
                </div>

                {/* Container 3 */}
                <div className="bg-white p-4 border border-gray-300 shadow-md rounded-lg transform transition duration-500 hover:scale-105">
                    <h2 className="text-lg font-bold mb-4">Products</h2>
                    <div className="relative">
                        {/* Current Product Display */}
                        <div className="flex justify-center items-center">
                            <div className="w-64 h-96 border border-gray-300 p-4 rounded-md shadow-md text-center">
                                <img
                                    src={products[currentProductIndex].image}
                                    alt={products[currentProductIndex].name}
                                    className="w-full h-52 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-md font-semibold mb-2">
                                    {products[currentProductIndex].name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {products[currentProductIndex].description}
                                </p>
                                <div className="flex justify-center space-x-2">
                                    <button className="w-1/2 h-10 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                        Learn More
                                    </button>
                                    <button className="w-1/2 h-10 px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Navigation Buttons */}
                        <button
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white text-lg font-bold p-2 rounded-full hover:bg-blue-700"
                            onClick={() =>
                                setCurrentProductIndex(
                                    (prevIndex) => (prevIndex - 1 + products.length) % products.length
                                )
                            }
                        >
                            &#8249;
                        </button>
                        <button
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white text-lg font-bold p-2 rounded-full hover:bg-blue-700"
                            onClick={() =>
                                setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length)
                            }
                        >
                            &#8250;
                        </button>
                    </div>
                </div>

                {/* Container 4 */}
                <div className="bg-white p-4 border border-gray-300 shadow-md rounded-lg transform transition duration-500 hover:scale-105">
                    <h2 className="text-lg font-bold mb-4">Working Hours</h2>
                    <ul className="space-y-2">
                        <li className="flex justify-between">
                            <span className="text-gray-700 font-semibold">Monday:</span>
                            <span className="text-gray-600">9 AM - 6 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-700 font-semibold">Tuesday:</span>
                            <span className="text-gray-600">9 AM - 6 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-700 font-semibold">Wednesday:</span>
                            <span className="text-gray-600">9 AM - 6 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-700 font-semibold">Thursday:</span>
                            <span className="text-gray-600">9 AM - 6 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-700 font-semibold">Friday:</span>
                            <span className="text-gray-600">9 AM - 6 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-700 font-semibold">Saturday:</span>
                            <span className="text-gray-600">10 AM - 4 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-700 font-semibold">Sunday:</span>
                            <span className="text-gray-600 underline">Closed</span>
                        </li>
                    </ul>
                    <div className="mt-8 text-center">
                        <p className="text-gray-600">📞 Call Us: <span className="font-semibold">+123 456 7890</span></p>
                        <p className="text-gray-600">📍 Visit: 123 Garage Street, City</p>
                    </div>
                </div>

                {/* Container 5 */}
                <div className="bg-white p-4 border border-gray-300 shadow-md rounded-lg transform transition duration-500 hover:scale-105">
                    <h2 className="text-lg font-bold mb-4">Pricing</h2>
                    <div>
                        {/* Toggle Button */}
                        <div className="flex justify-center mb-6">
                            <button
                                className={`w-24 px-6 py-2 rounded-l-md ${selectedPlan === "Basic"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-800"
                                    }`}
                                onClick={() => setSelectedPlan("Basic")}
                            >
                                Basic
                            </button>
                            <button
                                className={`w-24 px-6 py-2 rounded-r-md ${selectedPlan === "Pro"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-800"
                                    }`}
                                onClick={() => setSelectedPlan("Pro")}
                            >
                                Pro
                            </button>
                        </div>

                        {/* Membership Details */}
                        <div className="border border-gray-300 rounded-md p-4">
                            <h3 className="text-md font-semibold mb-2">{selectedPlan} Plan</h3>
                            <ul className="space-y-2">
                                {membershipDetails[selectedPlan].map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="text-green-500 font-bold mr-2">✔</span>
                                        <p className="text-gray-800">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Buy Button */}
                        <div className="flex justify-center mt-6">
                            <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                                Buy {selectedPlan} Membership
                            </button>
                        </div>
                    </div>
                </div>

                {/* Container 6 */}
                <div className="bg-white p-4 border border-gray-300 shadow-md rounded-lg transform transition duration-500 hover:scale-105">
                    <h2 className="text-lg font-bold mb-4">What Our Clients Say</h2>
                    <div className="relative flex flex-col items-center text-center">
                        {/* User Image */}
                        <img
                            src={testimonials[currentTestimonial].image}
                            alt={testimonials[currentTestimonial].name}
                            className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 mb-3"
                        />
                        {/* User Name */}
                        <h3 className="text-base font-semibold text-gray-600 mt-2">
                            {testimonials[currentTestimonial].name}
                        </h3>
                        {/* Star Ratings */}
                        <div className="flex mb-2">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <span
                                    key={index}
                                    className={`text-lg ${index < testimonials[currentTestimonial].rating
                                        ? "text-yellow-400"
                                        : "text-gray-300"
                                        }`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        {/* Feedback Text */}
                        <p className="text-gray-700 font-semibold">
                            "{testimonials[currentTestimonial].feedback}"
                        </p>
                    </div>

                </div>

            </main>
        </>
    );
};

export default Containers