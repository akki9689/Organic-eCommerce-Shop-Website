import React, { useState } from "react";
import { orderHistory } from "../../data/common/order-history"; // Ensure you have this data
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing arrow icons


const OrderHistory = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 10; // Show a maximum of 5 orders per page

    // Calculate total pages
    const totalPages = Math.ceil(orderHistory.length / ordersPerPage);

    // Get current orders based on pagination
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orderHistory.slice(indexOfFirstOrder, indexOfLastOrder);

    // Pagination handler
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Function to determine status color
    const getStatusColor = (status) => {
        switch (status) {
            case "Completed":
                return "text-green-600"; // Green for completed
            case "Pending":
                return "text-yellow-600"; // Yellow for pending
            case "Cancelled":
                return "text-red-600"; // Red for cancelled
            default:
                return "text-gray-600"; // Default color
        }
    };

    return (
        <div className="w-full px-4 mx-auto order-history max-w-7xl sm:px-6 lg:px-8 " data-aos="fade-left">
            <h2 className="mb-4 text-2xl font-semibold text-left">Order History</h2>


            <div className="flex flex-col justify-between gap-y-8">


                <div className="overflow-x-auto text-sm xmd:text-base">
                    {/* Responsive Table for Larger Screens */}
                    <div className="hidden md:block">
                        <table className="min-w-full border-collapse table-auto">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 text-left border">Order ID</th>
                                    <th className="px-4 py-2 text-left border">Date</th>
                                    <th className="px-4 py-2 text-left border">Total</th>
                                    <th className="px-4 py-2 text-left border">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentOrders.map((order) => (
                                    <tr key={order.id} className="">
                                        <td className="px-4 py-2 border">#{order.orderId}</td>
                                        <td className="px-4 py-2 border">{order.date}</td>
                                        <td className="px-4 py-2 border">
                                            ${order.totalPrice} ({order.NoOfProducts} Products)
                                        </td>
                                        <td className="px-4 py-2 border">
                                            <div className="flex items-center justify-between">
                                                <span className={getStatusColor(order.status)}>{order.status}</span>
                                                <Link
                                                    to={`/account/order-history/order-detail/${order.orderId}`}
                                                    state={{ id: true }}
                                                    className="ml-4 transition-all duration-300 text-primary hover:text-branding-success hover:underline"
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Card Layout for Smaller Screens */}
                    <div className="md:hidden">
                        {currentOrders.map((order) => (
                            <div key={order.id} className="flex flex-col p-4 mb-4 bg-white border rounded-lg shadow-md hover:shadow-lg gap-y-4 ">
                                <div className="flex justify-between">
                                    <h3 className="font-semibold">{order.orderId}</h3>
                                    <Link to={`/account/order-history/order-detail/${order.orderId}`} state={{ id: true }} className="text-primary">
                                        View Details
                                    </Link>
                                </div>
                                <p className="text-gray-600">Date: {order.date}</p>
                                <p className="text-gray-600">Total: ${order.totalPrice} ({order.NoOfProducts} Products)</p>
                                <p className={`font-semibold ${getStatusColor(order.status)}`}>
                                    Status: {order.status}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center mt-4">
                    <div className="flex items-center pagination">
                        <button
                            className={`mx-1 p-2 bg-gray-300 rounded-full hover:bg-primary ${currentPage === 1 ? "cursor-not-allowed" : ""} group`}
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <FaArrowLeft className={`w-4 h-4 ${currentPage < totalPages ? "text-black-900 group-hover:text-white-100" : "text-gray-600"}`} />
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                className={`mx-1 px-3 py-1 bg-gray-300 rounded-full ${currentPage === index + 1 ? "bg-primary text-white-100" : ""}`}
                                onClick={() => paginate(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            className={`mx-1 p-2 bg-gray-300 rounded-full hover:bg-primary ${currentPage === totalPages ? "cursor-not-allowed" : ""} group`}
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <FaArrowRight className={`w-4 h-4 ${currentPage < totalPages ? "text-black-900 group-hover:text-white-100" : "text-gray-600"}`} />
                        </button>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default OrderHistory;
