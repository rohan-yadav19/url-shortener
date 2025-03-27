# url-shortener
Short URL is a URL shortening service built using Node.js, Express.js, and MongoDB. It allows users to generate short, shareable URLs from long ones. The system stores the original URL in a database and redirects users when they visit the short link.

## 📌 Features

- ✅ Shorten long URLs into compact, unique links
- 
- ✅ Redirect short URLs to the original long URL
- 
- ✅ Store and retrieve URLs from MongoDB
- 
- ✅ Validation for valid URLs before shortening
- 
- ✅ Error handling for invalid or non-existent URLs

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- 
- **Database:** MongoDB
- 
- **Package Manager:** npm
- 
- **Other Dependencies:** Mongoose, dotenv, shortid, cors

---


## 📌 Installation & Setup


### **1. Clone the Repository**

```bash

--git clone https://github.com/rohan-yadav19/url-shortener.git

2. Install Dependencies

--npm install

3. Set Up Environment Variables


Create a .env file in the root directory and add the following:

MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
PORT=5000


4. Run the Server

--npm start






