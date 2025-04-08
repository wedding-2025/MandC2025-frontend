# M & C 2025 Wedding Website 🎉


![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-16.0.0-green?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-5.0.0-brightgreen?style=flat-square&logo=mongodb)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Image%20Storage-blue?style=flat-square&logo=cloudinary)

## Project Overview

**M & C 2025** is a fully functional wedding website built using the **MERN stack** (MongoDB, Express, React, Node.js) with **Cloudinary** for cloud-based image storage. The website is designed to provide an interactive and seamless experience for wedding guests, offering features such as RSVP functionality, a photo gallery, and event details.

### Key Features
- **RSVP Form**: Guests can RSVP directly on the website, with email notifications sent to the couple.
- **Photo Gallery**: A dynamic gallery showcasing wedding photos, categorized for easy navigation.
- **Image Upload**: Guests can upload photos, which are stored in Cloudinary and metadata is saved in MongoDB.
- **Event Details**: Comprehensive information about the wedding, including venue, timeline, and FAQs.
- **Optimized Performance**: JSON caching for faster image metadata retrieval and reduced database load.

## Live Demo
Visit the live site: [M & C 2025](https://mandc2025.org)

---

## Installation

Follow these steps to set up the project locally:

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud instance)
- **Cloudinary** account for image storage

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/wedding-2025/MandC2025-frontend.git
   cd mandc2025
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   VITE_RECAP_BACKEND_URL=http://localhost:4000
   VITE_CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```

5. **Backend Setup**
   Ensure the backend server is running. Refer to the backend repository for setup instructions.

6. **Access the Application**
   Open your browser and navigate to `http://localhost:5173`.

---

## Usage

### Uploading Images
1. Navigate to the **Recap** section.
2. Use the dropdown to select a category (e.g., "Church" or "Traditional").
3. Click the **Upload** button to add images. Images are stored in Cloudinary, and metadata is saved in MongoDB.

### Viewing the Gallery
- Browse categorized photos in the **Recap** section.
- Click on any image to view it in a carousel.

### RSVP
- Go to the **RSVP** page to confirm attendance.
- Fill out the form, and an email notification will be sent to the couple.

---

## Project Structure

```
src/
├── pages/               # Main pages (Home, RSVP, Recap, Details)
├── wed-components/      # Reusable components for each section
├── assets/              # Static assets (images, fonts, etc.)
├── App.jsx              # Main application entry point
└── main.jsx             # React DOM rendering
```

---

## Technologies Used

- **Frontend**: React, Vite, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Cloud Storage**: Cloudinary
- **Other Tools**: Axios, React Helmet, React Toastify

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes.
4. Open a pull request.

---

## Contact

For inquiries or support, contact the developer:
- **WhatsApp**: [Message Me](https://wa.me/message/CHA5YYYVU65EM1)
- **Email**: raphaelumeh21@gmail.com
- **X**: [Formally Twitter](https://x.com/dubem_umeh)
- **GitHub**: [Check out my repos](https://github.com/Dubem-Umeh-Raphael)

---

## License

This project is licensed under the [MIT License](LICENSE).