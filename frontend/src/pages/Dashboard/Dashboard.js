import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { BarChart, Bar } from 'recharts';

// Line Chart Component for Monthly Sales
function LineChartComponent() {
  const data = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4500 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 5500 },
    { month: 'Jul', sales: 7000 },
    { month: 'Aug', sales: 6500 },
    { month: 'Sep', sales: 8000 },
    { month: 'Oct', sales: 7500 },
    { month: 'Nov', sales: 9000 },
    { month: 'Dec', sales: 8500 },
  ];

  return (
    <div>
      <h2>Monthly Sales</h2>
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

// Bar Chart Component for Sales by Category
function BarChartComponent() {
  const data = [
    { category: 'Electronics', sales: 12000 },
    { category: 'Clothing', sales: 8000 },
    { category: 'Books', sales: 5000 },
    { category: 'Home', sales: 7000 },
  ];

  return (
    <div>
      <h2>Sales by Category</h2>
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Bar dataKey="sales" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

// Table Component for Top Products
function TableComponent() {
  const products = [
    { id: 1, name: 'Product A', sales: 1000 },
    { id: 2, name: 'Product B', sales: 800 },
    { id: 3, name: 'Product C', sales: 600 },
    { id: 4, name: 'Product D', sales: 400 },
    { id: 5, name: 'Product E', sales: 200 },
  ];

  return (
    <div>
      <h2>Top Products</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{product.id}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{product.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{product.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// KPI Card Component for Total Sales
function KPICard() {
  return (
    <div>
      <h2>Total Sales</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>$50,000</p>
    </div>
  );
}

// Main Dashboard Component
function Dashboard() {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    padding: '20px',
  };

  const gridItemStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Dashboard</h1>
      <div style={gridContainerStyle}>
        <div style={gridItemStyle}><LineChartComponent /></div>
        <div style={gridItemStyle}><BarChartComponent /></div>
        <div style={gridItemStyle}><TableComponent /></div>
        <div style={gridItemStyle}><KPICard /></div>
      </div>
    </div>
  );
}

export default Dashboard;