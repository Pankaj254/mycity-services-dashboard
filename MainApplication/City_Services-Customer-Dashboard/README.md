# 🏙️ MyCity Services Dashboard

A modern, responsive civic-tech dashboard built using **React**, **React Router**, and **Tailwind CSS**.  
The platform allows users to log in and access digital utility services like **Electricity**, **Water**, **Waste Management**, and **Reports** through a clean and intuitive interface.

This project is designed as a full front-end admin portal with nested routing, service dashboards, forms, and a reports summary section.

---

## 🚀 Features

### 🔐 Authentication
- Simple login screen  
- Redirects authenticated users to the main dashboard layout  
- Future-ready for API-based authentication  

### 🧭 Dashboard Layout (Post-Login)
- Fixed **Navbar** with theme toggle + profile icon  
- Collapsible **Sidebar** with active route indicators  
- Responsive layout (mobile/tablet/desktop)  
- Uses React Router `<Outlet />` for nested routing

### ⚡ Utility Services Modules
Each service has **two sections**:
- **Existing** – shows current dashboard data (cards, charts, summaries)
- **New** – lets the user choose:
  - New Connection
  - Service Modification / Upgrade
  - New Complaint / Report

### 📊 Reports Module
- Summary cards (Total, Approved, Pending, Rejected)
- Filter toolbar (status, service type)
- Data table of past applications/complaints
- Optional charts (Recharts)

---

## 🗂️ Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   └── Sidebar.jsx
│
├── layouts/
│   └── DashboardLayout.jsx
│
├── pages/
│   ├── Login/
│   │   └── Login.jsx
│   │
│   └── Dashboard/
│       ├── Dashboard.jsx
│       ├── Electricity/
│       │   ├── Existing.jsx
│       │   └── New.jsx
│       ├── Water/
│       │   ├── Existing.jsx
│       │   └── New.jsx
│       ├── Waste/
│       │   ├── Existing.jsx
│       │   └── New.jsx
│       ├── Reports/
│       │   ├── Existing.jsx
│       │   └── New.jsx
│       └── NotFound.jsx
│
└── routes/
    └── AppRouter.jsx
```
