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
  try {
    console.log("Appointment Received:", req.body);

    const { name, email, phone, date, time, message } = req.body;

    // Save appointment in memory
    const appointment = {
      id: Date.now(),
      name,
      email,
      phone,
      date,
      time,
      message,
      status: "Pending",
      createdAt: new Date(),
    };

    appointments.push(appointment);

    // Gmail Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify SMTP Connection
    await transporter.verify();
    console.log("SMTP Connected");

    // Send Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Dental Appointment Request",
      html: `
        <h2>New Appointment Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Appointment Submitted Successfully",
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Render Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});