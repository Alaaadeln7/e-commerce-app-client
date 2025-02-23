import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { User, Package, ShoppingCart, TrendingUp } from "lucide-react";
import Card from "./Card";
import { useState } from "react";
export default function Dashboard() {
  const [stats, setStats] = useState({
    users: 1200,
    sellers: 150,
    products: 5000,
    orders: 3200,
    revenue: 85000,
  });

  const data = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 7000 },
    { name: "May", sales: 6000 },
    { name: "Jun", sales: 8000 },
  ];

  return (
    <div className="p-6 flex flex-col gap-6 mt-40">
      <div className="flex flex-wrap gap-3">
        <Card
          titel={"users"}
          desc={stats.users}
          icon={<User className="w-10 h-10 text-blue-500" />}
        />
        <Card
          titel={"Sellers"}
          desc={stats.sellers}
          icon={<TrendingUp className="w-10 h-10 text-green-500" />}
        />

        <Card
          titel={"Products"}
          desc={stats.products}
          icon={<Package className="w-10 h-10 text-purple-500" />}
        />

        <Card
          titel={"Orders"}
          desc={stats.orders}
          icon={<ShoppingCart className="w-10 h-10 text-orange-500" />}
        />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
