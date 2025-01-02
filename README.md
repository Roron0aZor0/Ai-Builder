
# **AI Builder**

AI Builder is a cutting-edge platform that allows users to create custom websites quickly and efficiently using AI technology. Designed for small businesses, startups, and freelancers, it provides an intuitive interface and robust tools to simplify website creation.

---

## **Features**
- AI-powered website generation.
- Customizable templates for different industries.
- Mobile-friendly designs with responsive layouts.
- SEO optimization tools for better visibility.
- Integration with analytics and third-party APIs.
- Real-time editing and preview capabilities.

---

## **Technologies Used**
- **Frontend**: React, Bootstrap, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: [Netlify](https://www.netlify.com/) (Frontend), [Render](https://render.com/) (Backend)

---

## **Installation and Setup**

### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- Git

---

### **Steps to Run Locally**

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/ai-builder.git
   cd ai-builder
   ```

2. Install dependencies:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Create a `.env` file in the `server` directory:
   ```bash
   touch .env
   ```

4. Add the following variables to the `.env` file:
   ```
   MONGODB_URI=<Your MongoDB connection string>
   JWT_SECRET=<Your JWT secret key>
   PORT=5000
   ```

5. Start the development servers:
   - Backend:
     ```bash
     cd server
     npm run dev
     ```
   - Frontend:
     ```bash
     cd client
     npm start
     ```

6. Access the application at `http://localhost:3000`.

---

## **Usage**

1. **Login/Signup**: Register or log in to your account.
2. **Select a Template**: Choose from various templates based on your needs.
3. **Customize**: Use the real-time editor to modify text, images, and layout.
4. **Deploy**: Publish your website or download it for manual hosting.

---

## **Folder Structure**

```plaintext
ai-builder/
├── client/               # Frontend code
│   ├── public/           # Static assets
│   ├── src/              # React components
│   ├── styles/           # CSS files
├── server/               # Backend code
│   ├── models/           # Database schemas
│   ├── routes/           # API endpoints
│   ├── middleware/       # Authentication and error handling
├── .gitignore            # Files to exclude from Git
├── README.md             # Project documentation
```

---

## **API Endpoints**

| Endpoint        | Method | Description               |
|-----------------|--------|---------------------------|
| `/api/auth`     | POST   | User authentication       |
| `/api/templates`| GET    | Fetch available templates |
| `/api/sites`    | POST   | Create a new website      |

---

## **Future Features**
- **Advanced AI customization**: Support for voice commands.
- **Additional templates**: Industry-specific options.
- **Team collaboration**: Share editing access with teammates.

---

## **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Contact**

For inquiries or feedback, please reach out to:
- **Name**: Nishnat Mourya
- **Email**: Mourya78645@gmail.com
- **GitHub**: https://github.com/Roron0aZor0

---