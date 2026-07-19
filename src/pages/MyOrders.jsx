import { useEffect, useState } from "react";
import { getMyOrders } from "@/api/checkoutApi";
import PageLoader from "@/components/common/PageLoader";

const MyOrders = () => {
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
      <PageLoader text="Loading your orders..." />
    );
  }

  return (
    <main className="min-h-screen bg-[#edf3f8] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* Page Header */}

        <div className="mb-10">
          <h1 className="text-4xl font-black text-[#020817]">
            My Orders
          </h1>

          <p className="mt-2 text-slate-500">
            View your recent purchases and stay updated on your order status.
          </p>
        </div>

        {orders.length === 0 ? (
          <div className="rounded-[32px] bg-white p-14 text-center shadow-sm">

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-4xl">
              📦
            </div>

            <h2 className="text-2xl font-bold text-[#020817]">
              No Orders Yet
            </h2>

            <p className="mt-3 text-slate-500">
              Your purchased products will appear here once you place your first order.
            </p>

          </div>
        ) : (
          <div className="space-y-8">

            {orders.map((order) => (
              <div
                key={order.id}
                className="
                  overflow-hidden
                  rounded-[32px]
                  bg-white
                  shadow-sm
                  border
                  border-slate-100
                "
              >

                {/* Header */}

                <div className="flex flex-col gap-5 border-b border-slate-100 p-6 md:flex-row md:items-center md:justify-between">

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Order Number
                    </p>

                    <h2 className="mt-1 text-lg font-bold text-[#020817]">
                      #{order.order_token.slice(0, 8).toUpperCase()}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      Placed on{" "}
                      {new Date(order.created_at).toLocaleDateString()}
                    </p>
                  </div>

                  <span
                    className="
                      inline-flex
                      w-fit
                      items-center
                      rounded-full
                      bg-green-100
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-green-700
                    "
                  >
                    {order.order_status}
                  </span>

                </div>

                {/* Products */}

                <div className="p-6 space-y-5">

                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="
                        flex
                        items-center
                        gap-5
                      "
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          h-20
                          w-20
                          rounded-2xl
                          border
                          border-slate-200
                          object-cover
                        "
                      />

                      <div className="flex-1">

                        <h3 className="font-semibold text-[#020817]">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                          Quantity : {item.quantity}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>

                {/* Information */}

                <div className="border-t border-slate-100 bg-slate-50 p-6">

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                      🚚
                    </div>

                    <div>

                      <h3 className="font-semibold text-[#020817]">
                        Thank you for shopping with LukaPods!
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Your order has been successfully placed and is being
                        processed by our team. Order tracking details and
                        delivery updates will be sent to your registered
                        email address and mobile number.
                      </p>

                    </div>

                  </div>

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