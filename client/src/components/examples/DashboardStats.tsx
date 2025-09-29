import DashboardStats from '../DashboardStats';

export default function DashboardStatsExample() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Admin Dashboard Stats</h3>
        <DashboardStats userType="admin" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">User Dashboard Stats</h3>
        <DashboardStats userType="user" />
      </div>
    </div>
  );
}