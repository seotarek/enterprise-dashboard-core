import React from 'react';
import { LayoutDashboard, Users, ShieldAlert, Settings, DollarSign, Activity } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    { title: 'إجمالي الإيرادات (Revenue)', value: '$124,500', change: '+14.2%', icon: DollarSign },
    { title: 'المستخدمين النشطين (Active Users)', value: '18,420', change: '+8.1%', icon: Users },
    { title: 'طلبات الـ API (API Requests)', value: '1.2M', change: '+24.5%', icon: Activity },
    { title: 'تنبيهات الأمان (Security Alerts)', value: '0 Critical', change: '100% Safe', icon: ShieldAlert },
  ];

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto space-y-6">
      <header className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-bold">لوحة التحكم المؤسسية (Enterprise Overview)</h1>
          <p className="text-slate-500 text-sm">نظام إدارة العمليات السحابية والأمان متعدد المستأجرين</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            بدء تقرير جديد +
          </button>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, idx) => (
          <div key={idx} className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-medium">{s.title}</span>
              <s.icon className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl font-bold">{s.value}</div>
            <span className="text-xs text-emerald-500 font-semibold">{s.change}</span>
          </div>
        ))}
      </div>

      {/* Overview Box */}
      <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">نشاط النظام المتزامن (Realtime Telemetry)</h2>
        <div className="h-48 flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg text-slate-400 text-sm">
          جاهز لتوصيل خطوط البيانات والـ Webhooks التلقائية
        </div>
      </div>
    </div>
  );
}
