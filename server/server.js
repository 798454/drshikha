import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log(
  "EMAIL_PASS:",
  process.env.EMAIL_PASS ? "Loaded" : "Missing"
);

const app = express();

app.use(cors());
app.use(express.json());

// Temporary storage for admin panel
let appointments = [];

// Home Route
app.get("/", (req, res) => {
  res.send("Dentist Backend Running");
});

// Get All Appointments (Admin Panel)
app.get("/api/appointments", (req, res) => {
  res.json(appointments);
});

// Create Appointment
app.post("/api/appointments", async (req, res) => {
  console.log("Appointment Received:", req.body);

  appointments.push({
    id: Date.now(),
    ...req.body,
  });

  res.status(200).json({
    success: true,
    message: "Appointment Saved",
  });
});

// Render Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});