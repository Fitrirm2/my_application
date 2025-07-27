import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="p-6">
      <h1 className="text-gray-600 text-2xl">Dashboard</h1>
      <p className="text-gray-600 mt-4">Welcome, {session?.user?.name} ({session?.user?.email})</p>
    </div>
  );
}
