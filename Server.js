// server.js (Node.js example)
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // For handling cross-origin requests

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Configure your email transporter (using Gmail, SendGrid, etc.)
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'abhighali79@gmail.com', // Replace with your Gmail address
            pass: '2JR21CS004@Abhi'        // Replace with your Gmail password or an App Password
        }
    });

    const mailOptions = {
        from: email,
        to: 'abhighali79@gmail.com', // Your recipient email address
        subject: `Portfolio Contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);
        res.status(200).send({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ message: 'Failed to send email' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});