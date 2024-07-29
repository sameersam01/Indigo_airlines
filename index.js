const nodemailer = require('nodemailer');

// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'test-recipient@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email.'
};

transporter.sendMail(mailOptions)
  .then(() => console.log('Test email sent successfully'))
  .catch((error) => console.error('Error sending test email:', error));
