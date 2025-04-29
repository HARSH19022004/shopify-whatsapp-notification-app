import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { AutoTable } from "@/components/auto";
import { api } from "../api";

export default function () {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 p-6">
      <Card className="w-full max-w-6xl rounded-3xl shadow-xl border border-slate-300 bg-white transition-all duration-300">
        <CardHeader className="border-b border-slate-200 pb-6">
          <CardTitle className="text-3xl font-extrabold text-blue-800 tracking-tight flex items-center gap-2">
            <span className="text-blue-600">📦</span> Orders Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-4">
          <AutoTable
            model={api.order}
            columns={["orderId", "customerName", "totalPrice", "createdAt", "updatedAt"]}
          />
        </CardContent>
      </Card>
    </div>
  );
}
