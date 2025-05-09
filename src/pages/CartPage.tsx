import React from "react";
import { useAppContext } from "../context/appContext";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";

const CartPage: React.FC = () => {
  const { cart, movies, removeFromCart, updateCartItemQuantity, getCartTotal } =
    useAppContext();

  const cartItems = cart.map((item) => {
    const movie = movies.find((m) => m.id === item.movieId);
    return {
      ...item,
      movie,
      total: movie ? movie.price * item.quantity : 0,
    };
  });

  const handleCheckout = () => {
    alert("Checkout functionality would be implemented here!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <ShoppingCart size={24} className="text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold">Your Cart</h2>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg mb-2">Your cart is empty</p>
          <p className="text-gray-400">
            Add movies to your cart to see them here
          </p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Movie
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.map(
                    (item) =>
                      item.movie && (
                        <tr key={item.movieId}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-16 w-12 flex-shrink-0">
                                <img
                                  className="h-16 w-12 object-cover rounded"
                                  src={item.movie.posterUrl}
                                  alt={item.movie.title}
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {item.movie.title}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              ${item.movie.price.toFixed(2)}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <button
                                onClick={() =>
                                  updateCartItemQuantity(
                                    item.movieId,
                                    item.quantity - 1
                                  )
                                }
                                className="bg-gray-200 p-1 rounded-l-md"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-3 py-1 bg-gray-100">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateCartItemQuantity(
                                    item.movieId,
                                    item.quantity + 1
                                  )
                                }
                                className="bg-gray-200 p-1 rounded-r-md"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              ${item.total.toFixed(2)}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => removeFromCart(item.movieId)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax</span>
                <span>${(getCartTotal() * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 my-4"></div>
              <div className="flex justify-between font-semibold text-lg mb-6">
                <span>Total</span>
                <span>${(getCartTotal() * 1.1).toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
