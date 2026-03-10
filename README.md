<div align="center">
<img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" width="90" height="90" alt="Notion Icon">  <h1 align="center">Restaurant Management System</h1>
  
  <p align="center">
A modern, responsive restaurant management application built with the MERN stack. It features order management, table tracking, receipt generation, and secure user authentication. <br />
  </p>

<img width="1280" height="720" alt="Screenshot 2026-03-10 212923" src="https://github.com/user-attachments/assets/314959a4-5af3-48d9-af8e-eea038febc6f" />

&nbsp;

<img width="1280" height="720" alt="Screenshot 2026-03-10 212859" src="https://github.com/user-attachments/assets/915660c7-70dd-4d53-b63e-03ddcd5e0545" />

  <p align="center">
    <br>
<img src="https://img.shields.io/badge/MongoDB-000000?style=for-the-badge&logo=mongodb&logoColor=00FF9D" />
  
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=00FF9D" />
  
  <img src="https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react&logoColor=00FF9D" />
  
  <img src="https://img.shields.io/badge/Node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=00FF9D" />
  </p>
</div>

---

## 🚀 Features
* **Order Management:** Create, update, and track customer orders efficiently.
* **Table Management:** Manage table availability, reservations, and current orders per table.
* **Receipt Generation:** Automatically generate receipts for completed orders.
* **Secure Authentication:** Register and login with protected routes.
* **Real-time Feedback:** Validation and notifications for actions.
* **Frontend Integration:** Connected frontend and backend for seamless operation.

---

## 🛠️ Tech Stack
### Frontend
* React (Vite)  
* Tailwind CSS & daisyUI  
* Axios (API Client)  
* React Router for dynamic routing  

### Backend
* Node.js & Express  
* MongoDB & Mongoose  
* JSON Web Tokens (JWT) for authentication  
* Environment variables handled with dotenv  

---

## 📁 Project Structure
```
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ └── routes/
├── frontend/
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── Metrics.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── RecentOrders.jsx
│   │   │
│   │   ├── home/
│   │   │   ├── Greetings.jsx
│   │   │   ├── MiniCard.jsx
│   │   │   ├── OrderList.jsx
│   │   │   ├── PopularDishes.jsx
│   │   │   └── RecentOrders.jsx
│   │   │
│   │   ├── menu/
│   │   │   ├── Bill.jsx
│   │   │   ├── CartDetails.jsx
│   │   │   ├── CustomerInfo.jsx
│   │   │   ├── MenuContainer.jsx
│   │   │   └── TinyModal.jsx
│   │   │
│   │   ├── orders/
│   │   │   └── OrderCard.jsx
│   │   │
│   │   ├── shared/
│   │   │   ├── BackButton.jsx
│   │   │   ├── BottomNav.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── Modal.jsx
│   │   │
│   │   └── tables/
│   │       └── TableCard.jsx
│   │
│   ├── constants/
│   │   └── index.jsx
│   │
│   ├── hooks/
│   │   └── useLoad.js
│   │
│   ├── https/
│   │   └── index.js
│   │
│   ├── receipt/
│   │   └── Invoice.jsx
│   │
│   ├── redux/
│   │   ├── store.js
│   │   └── slices/
│   │       ├── cartSlice.js
│   │       ├── customerSlice.js
│   │       └── userSlice.js
│   │
│   ├── utils/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env

```


---

## ⚙️ Getting Started

### 1. Prerequisites

```
* Node.js installed  
* MongoDB URI  
```

### 2. Environment Variables
Create a `.env` file in your backend folder:

```
 Create a .env file in your root directory:
MONGO_URI=your_mongodb_connection_string
PORT=5001
```
### 3. Installation
#### Backend
```bash
cd backend
npm install
### 4. Running the App
```
# Run backend
```
cd backend
npm start
```
# Run frontend (in a separate terminal)
```
cd frontend
npm install
```

## 📝 API Endpoints
| Method | Endpoint                  | Description                          |
| ------ | ------------------------- | ------------------------------------ |
| POST   | /api/user/register        | Register a new user                  |
| POST   | /api/user/login           | Login a user and return JWT          |
| POST   | /api/user/logout          | Logout user (clears session/cookie) |
| GET    | /api/tables               | Fetch all tables and their statuses |
| POST   | /api/tables               | Create a new table                   |
| PUT    | /api/tables/:id           | Update table status or details      |
| GET    | /api/orders               | Fetch all orders                     |
| POST   | /api/orders               | Create a new order                   |
| PUT    | /api/orders/:id           | Update order (e.g., mark completed) |
| DELETE | /api/orders/:id           | Delete an order                      |
| GET    | /api/orders/:id/receipt   | Generate a receipt for a specific order |


