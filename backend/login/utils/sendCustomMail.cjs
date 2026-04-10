const sgMail = require('@sendgrid/mail');

require('dotenv').config({ path: '../.env' }); 
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: '2022pietcrsarthak049@poornima.org',
  from: `Comparitor <${process.env.FROM_EMAIL}>`,
  subject: '🎉 Welcome to Comparitor – Login Successful',

  text: 'Welcome to Comparito was successful.',

  html: `
  <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
    
    <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #4CAF50, #2E7D32); color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Comparitor</h1>
        <p style="margin: 5px 0 0;">Welcome Back 🚀</p>
      </div>

      <!-- Body -->
      <div style="padding: 25px; text-align: center;">
        <h2 style="color: #333;">Login Successful ✅</h2>
        <p style="color: #555; font-size: 16px;">
          Hi there,<br><br>
          We're happy to see you again! Your account has been successfully signed in.
        </p>

        <p style="margin-top: 20px; font-size: 15px; color: #666;">
          Explore features, compare smarter, and enjoy your experience with Comparitor.
        </p>

        <!-- Button -->
        <a href="#" style="display: inline-block; margin-top: 25px; padding: 12px 25px; background: #4CAF50; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
          Go to Dashboard
        </a>
      </div>

      <!-- Footer -->
      <div style="background: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #888;">
        © 2026 Comparitor. All rights reserved.
      </div>

    </div>
  </div>
  `,
};

const sendMail = async () => {
  try {
    await sgMail.send(msg);
        console.log('Email sent');
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
}

sendMail();