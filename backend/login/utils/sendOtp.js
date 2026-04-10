// import dotenv from 'dotenv';
// import nodemailer from 'nodemailer';
// import twilio from 'twilio';


// dotenv.config();

// // EMAIL OTP
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export const sendEmailOtp = async (email, otp) => {
//   try {
//     await transporter.sendMail({
//       from: process.env.EMAIL,
//       to: email,
//       subject: 'Your OTP Code',
//       text: `Your OTP is: ${otp}`,
//     });
//     console.log("✅ Email sent");
//   } catch (err) {
//     console.error("❌ Email error:", err);
//   }
// };

// // SMS OTP
// export const sendSmsOtp = async (phone, otp) => {
//   try {
//     const client = twilio(
//       process.env.TWILIO_SID,
//       process.env.TWILIO_AUTH_TOKEN
//     );
//     await client.messages.create({
//       body: `Your OTP is: ${otp}`,
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: phone,
//     });
//     console.log("✅ SMS sent");
//   } catch (err) {
//     console.error("❌ SMS error:", err);
//   }
// };








import dotenv from "dotenv";
import twilio from "twilio";
import sgMail from "@sendgrid/mail";

dotenv.config();

// ✅ SET SENDGRID API
sgMail.setApiKey(process.env.SENDGRID_API_KEY);



// 🔥 EMAIL OTP (SENDGRID)
export const sendEmailOtp = async (email, otp) => {
  try {
    const msg = {
      to: email,
      from: `Comparitor <${process.env.FROM_EMAIL}>`,
      subject: "Your OTP Code",

      text: `Your OTP is: ${otp}`,

      html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
        
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #4CAF50, #2E7D32); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Comparitor</h1>
            <p style="margin: 5px 0 0;">OTP Verification 🔐</p>
          </div>

          <!-- Body -->
          <div style="padding: 25px; text-align: center;">
            <h2 style="color: #333;">Your OTP Code</h2>
            
            <p style="font-size: 20px; font-weight: bold; letter-spacing: 3px; margin: 20px 0;">
              ${otp}
            </p>

            <p style="color: #555;">
              This OTP is valid for a few minutes. Do not share it with anyone.
            </p>
          </div>

          <!-- Footer -->
          <div style="background: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #888;">
            © 2026 Comparitor
          </div>

        </div>
      </div>
      `,
    };

    await sgMail.send(msg);
    console.log("✅ OTP Email sent");

  } catch (error) {
    console.error("❌ SendGrid Error:", error.response?.body || error);
  }
};



// 🔥 LOGIN SUCCESS EMAIL (YOUR UI SAME)
export const sendLoginSuccessEmail = async (email) => {
  try {
    const msg = {
      to: email,
      from: `Comparitor <${process.env.FROM_EMAIL}>`,
      subject: "🎉 Welcome to Comparitor – Login Successful",

      text: "Welcome to Comparitor! Your sign-in was successful.",

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
          }
    await sgMail.send(msg);
    console.log("✅ Login Email sent");

  } catch (error) {
    console.error("❌ Login Email Error:", error.response?.body || error);
  }
};



// 🔥 SMS OTP (UNCHANGED)
export const sendSmsOtp = async (phone, otp) => {
  try {
    const client = twilio(
      process.env.TWILIO_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });

    console.log("✅ SMS sent");

  } catch (err) {
    console.error("❌ SMS error:", err);
  }
};