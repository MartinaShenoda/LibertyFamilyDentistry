### 🦷 Liberty Family Dentistry  

Welcome to [**Liberty Family Dentistry**](https://libertylanedentistry.com/), where we provide high-quality, patient-centered dental care in a comfortable environment. Our goal is to help patients achieve and maintain healthy, beautiful smiles through comprehensive dental services.  

### 🌟 Features  
✅ General & Preventive Dentistry (cleanings, exams, X-rays)  
✅ Cosmetic Dentistry (whitening, veneers, bonding)  
✅ Restorative Treatments (fillings, crowns, bridges)  
✅ Dental Implants & Extractions  
✅ Emergency Dental Services  

### 🛠️ Tech Stack  
- **Backend:** NodeJS (still in works) 
- **Database:** PostgreSQL  
- **Frontend:** Angular Framework
- **Hosting:** Hosted on Hostinger 

---

## 🚀 Getting Started  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/MartinaShenoda/LibertyFamilyDentistry.git
cd LibertyFamilyDentistry
```

### 2️⃣  Install Dependencies  
```sh
npm install
```

### 3️⃣  Set Up Environment Variables  
Create a `.env` file in the project root and add:  
```
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
DB_PORT=5432
SECRET_KEY=your_secret_key
DEBUG=True
```

### 4️⃣ Apply Migrations & Run Server  
```sh
npx sequelize-cli db:migrate  # Sequelize
npx prisma migrate dev        # Prisma

npm start
```

Your app should now be running at: **http://127.0.0.1:4200/** 🎉  

---

## 🧪 Running Tests  
```sh
npm test
```

---

## 📂 Project Structure  
```
LibertyFamilyDentistry/
├── src/                # Angular source code
│   ├── app
│   ├── assets             
├── package.json            # Dependencies
├── angular.json      
│── README.md               # Project documentation
│── .gitignore              # Ignored files
```

---

## 📢 Contributing  
We welcome contributions! To contribute:  
1. Fork the repo  
2. Create a feature branch (`git checkout -b feature-name`)  
3. Commit changes (`git commit -m "Added new feature"`)  
4. Push to GitHub (`git push origin feature-name`)  
5. Submit a pull request  

---

## 📞 Contact  
📧 **Email:** martina.f.shenoda@gmail.com
🌐 **Website:** [libertylanedentistry.com](https://libertylanedentistry.com)  

---

### 🚀 Future Enhancements  
- [ ] Online appointment booking  
- [ ] Automated appointment reminders  
- [ ] Patient portal for records & billing  
