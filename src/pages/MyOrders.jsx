import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyOrders } from "@/api/checkoutApi";

const MyOrders = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const data = await getMyOrders();
      setOrders(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#edf3f8] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-5">

        <h1 className="text-4xl font-black mb-8">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center shadow">
            <h2 className="text-2xl font-bold">
              No Orders Yet
            </h2>

            <p className="text-slate-500 mt-2">
              Start shopping to see your orders here.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-3xl shadow p-6"
              >
                <div className="flex justify-between items-center border-b pb-4">

                  <div>
                    <h2 className="font-bold text-lg">
                      Order #{order.order_token.slice(0, 8)}
                    </h2>

                    <p className="text-sm text-slate-500">
                      {new Date(order.created_at).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold">
                      ₹{order.total_amount}
                    </p>

                    <span className="inline-block mt-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                      {order.order_status}
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold">
                          {item.name}
                        </h3>

                        <p className="text-slate-500">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <p className="font-bold">
                        ₹{item.price}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    onClick={() =>
                      navigate(`/orders/${order.order_token}`)
                    }
                    className="px-6 py-3 rounded-full bg-slate-900 text-white"
                  >
                    View Order
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
};

export default MyOrders;