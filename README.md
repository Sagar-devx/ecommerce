# 🛍️ Cartora - Modern E-Commerce Web Application

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://ecommerce-opal-ten-92.vercel.app/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

A modern, fast, and fully responsive **E-Commerce Web Application** built using **React 19**, **Vite**, **React Router v7**, and **Context API**.

🌐 **Live Website:** [https://ecommerce-opal-ten-92.vercel.app/](https://ecommerce-opal-ten-92.vercel.app/)

---

## ✨ Features

- **🏠 Interactive Home Page**:
  - Hero banner with smooth call-to-action buttons
  - "Popular in Women" showcase
  - Exclusive Offers banner
  - "New Collections" showcase
  - Newsletter subscription box with validation

- **👗 Multi-Category Navigation**:
  - Dedicated catalog pages for **Men**, **Women**, and **Kids**
  - Category-based breadcrumb navigation
  - Responsive product display cards with hover effects

- **🔍 Rich Product Details Page**:
  - Multi-image gallery with high-resolution image viewing
  - Dynamic size selector (`S`, `M`, `L`, `XL`, `XXL`)
  - Product description and verified customer reviews tab
  - "Related Products" recommendation engine

- **🛒 Real-Time Shopping Cart (Context API)**:
  - Add to cart with instant **Toast Notification** popup
  - Dynamic quantity increment, decrement, and item removal
  - Real-time subtotal, shipping fee, and total amount calculation
  - Promo code input box & proceed to checkout button
  - Live item count badge in Navbar

- **🔐 User Authentication (Sign Up & Login)**:
  - Smooth toggle between **Sign Up** and **Login** modes
  - Fixed-height stable UX to prevent layout shifts
  - Personalized Navbar greeting (`Hi, <UserName>`) upon login
  - One-click **Logout** button

- **📱 100% Mobile & Tablet Responsive**:
  - Tailored CSS Grid and Flexbox layouts optimized for mobile, tablet, laptop, and desktop viewports
  - Zero horizontal overflow (`overflow-x: hidden`)

---

## 🛠️ Tech Stack

| Technology | Description |
| :--- | :--- |
| **React 19** | Modern UI components & hooks (`useState`, `useContext`, `useEffect`) |
| **Vite** | Fast frontend build tool and development server |
| **React Router v7** | Single Page Application (SPA) client-side routing |
| **Context API** | Centralized global state management for shopping cart |
| **Vanilla CSS3** | Custom responsive styling, animations, and media queries |
| **Vercel** | Production hosting & CI/CD deployment |

---

## 📂 Project Structure

```
ecommerce/
├── public/
├── src/
│   ├── assets/              # Images, icons, and product dataset files
│   ├── components/
│   │   ├── Breadcrumbs/     # Category navigation breadcrumbs
│   │   ├── CartItems/       # Shopping cart table & order summary
│   │   ├── Description/     # Product specs & customer reviews tabs
│   │   ├── Footer/          # Website footer with social links
│   │   ├── Hero/            # Main landing banner
│   │   ├── Item/            # Reusable product card component
│   │   ├── Navbar/          # Responsive navigation bar with cart badge
│   │   ├── NewCollections/  # New arrival showcase
│   │   ├── NewsLetter/      # Email subscription component
│   │   ├── Offers/          # Promotional banners
│   │   ├── Popular/         # Trending women products
│   │   ├── ProductDisplay/  # Product details, gallery & add to cart
│   │   └── RelatedProducts/ # Recommendation section
│   ├── context/
│   │   └── ShopContext.jsx  # Global Cart & Catalog State Management
│   ├── CSS/                 # Page-level stylesheets
│   ├── pages/
│   │   ├── Cart.jsx         # Cart page
│   │   ├── LoginSignup.jsx  # Authentication page
│   │   ├── Product.jsx      # Product details page
│   │   ├── Shop.jsx         # Home page
│   │   └── ShopCategory.jsx # Men/Women/Kids category page
│   ├── App.jsx              # App root & route definitions
│   ├── index.css            # Global CSS resets & typography
│   └── main.jsx             # React DOM entry point
├── package.json
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/Sagar-devx/ecommerce.git
cd ecommerce
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Build for production
```bash
npm run build
```

---

## 🌐 Live Deployment

The project is deployed and live on Vercel:
👉 **[https://ecommerce-opal-ten-92.vercel.app/](https://ecommerce-opal-ten-92.vercel.app/)**

---

## 👤 Author

- **Sagar** - [GitHub Profile](https://github.com/Sagar-devx)

---

## 📄 License

This project is licensed under the MIT License.
