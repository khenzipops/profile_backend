const nodemailer = require("nodemailer");

const sendContactEmail = async (req, res) => {
  const { fullname, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail", // Use Gmail service
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: "kpopera123@gmail.com",
    subject: `Contact Form Submission from ${fullname}`,
    text: `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
};

module.exports = { sendContactEmail };
