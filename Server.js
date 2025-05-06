const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve index.html and script.js directly
app.use(express.static(__dirname));

// Email API
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'abhighali79@gmail.com',
            pass: 'yygm afrr aptq erlw'
        }
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: 'your-email@gmail.com',
        subject: `Portfolio Contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
