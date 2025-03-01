### 🦷 Liberty Family Dentistry  

Welcome to [**Liberty Family Dentistry**](https://libertylanedentistry.com/), where we provide high-quality, patient-centered dental care in a comfortable environment. Our goal is to help patients achieve and maintain healthy, beautiful smiles through comprehensive dental services.  

### 🌟 Features  
✅ General & Preventive Dentistry (cleanings, exams, X-rays)  
✅ Cosmetic Dentistry (whitening, veneers, bonding)  
✅ Restorative Treatments (fillings, crowns, bridges)  
✅ Dental Implants & Extractions  
✅ Emergency Dental Services  

### 🛠️ Tech Stack  
- **Backend:** Django (Python)  
- **Database:** PostgreSQL  
- **Frontend:** HTML, CSS, JavaScript (if applicable)  
- **Hosting:** (Specify if deployed on AWS, Heroku, etc.)  

---

## 🚀 Getting Started  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/MartinaShenoda/LibertyFamilyDentistry.git
cd LibertyFamilyDentistry
```

### 2️⃣ Create & Activate a Virtual Environment  
```sh
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows
```

### 3️⃣ Install Dependencies  
```sh
pip install -r requirements.txt
```

### 4️⃣ Set Up Environment Variables  
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

### 5️⃣ Apply Migrations & Run Server  
```sh
python manage.py migrate
python manage.py runserver
```

Your app should now be running at: **http://127.0.0.1:8000/** 🎉  

---

## 🧪 Running Tests  
```sh
python manage.py test
```

---

## 📂 Project Structure  
```
LibertyFamilyDentistry/
│── liberty_dentistry/      # Main Django project settings
│── appointments/           # Appointment scheduling app
│── patients/               # Patient management app
│── static/                 # CSS, JS, images
│── templates/              # HTML templates
│── manage.py               # Django CLI tool
│── requirements.txt        # Dependencies
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

---

Let me know if you’d like any modifications! 🚀