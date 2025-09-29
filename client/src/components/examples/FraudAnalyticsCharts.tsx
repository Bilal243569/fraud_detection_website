import FraudAnalyticsCharts from '../FraudAnalyticsCharts';

export default function FraudAnalyticsChartsExample() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Admin Analytics Dashboard</h3>
        <FraudAnalyticsCharts userType="admin" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">User Analytics Dashboard</h3>
        <FraudAnalyticsCharts userType="user" />
      </div>
    </div>
  );
}