# Information management for agrovida

## 📌 Description
This project was developed as part of the **SQL Databases Module - Performance Test** for the company **AgroData Solutions**.  

The solution stores this data in a **normalized SQL database**, provides a **CRUD API** for managing entities, and includes **advanced SQL queries** for financial analysis.

---

## 🛠 Technologies Used
- **MySQL** – Relational database, Database model
- **Node.js** – Backend runtime
- **Express.js** – API development
---

## 📂 Database Normalization
The original Excel file was analyzed and manually normalized following the **First Three Normal Forms (1NF, 2NF, 3NF)**:

1. **1NF** – Removed repeating groups and ensured atomic values.
2. **2NF** – Eliminated partial dependencies by creating separate tables for entities such as **Customers**, **Invoices**, **Transactions**, **Transaction Types**, **Transaction Status**, and **Platforms**.
3. **3NF** – Removed transitive dependencies, keeping only attributes directly related to the primary key in each table.

The final **relational model** ensures data integrity, avoids redundancy, and supports efficient queries.



## 💾 Database Creation (DDL)
The database is created with the script `bd_agrovida.sql` located in the `/docs` folder.
Run the following command to create the database:

```bash
mysql -u root -p < sql/database.sql
```

**Main Tables:**
- `farms`
- `organic_farm`
- `monitoring_farm`
- `sensors`
- `maintenance`
- `production_reports`
- `pryce_cultive`

---

**Validation:** Input is validated before insertion or update to prevent duplicate emails and ensure required fields.

## How to Run the Project
1. Clone the repository:
```bash

```
2. Install dependencies:
```bash
npm install
```
3. Import the database:
```bash
mysql -u root -p < sql/database.sql
```
4. Start the server:
```bash
node server/index.js

## Project Structure
```
├── docs
│   ├── bd_agrovida.sql
│   └── relational_diagram.png
├── package.json
├── package-lock.json
├── README.md
└── server
    ├── conexion_db.js
    ├── index.js
    └── routes
        ├── routes.js
```

---

##  Developer Info
**Name:** Santiago Andres Ortega Serrano  
**Clan:** Malecon
**Email:** santiago59782@gmail.com
