import nodemailer from "nodemailer";

export const SendResetPasswordPin = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    secure: true,
    secureConnection: false,
    tls: {
      ciphers: "SSLv3",
    },
    requireTLS: true,
    port: 465,
    debug: true,
    connectionTimeout: 10000,
    auth: {
      user: process.env.HOSTINGER_EMAIL,
      pass: process.env.HOSTINGER_EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.HOSTINGER_EMAIL,
    to: options.email,
    subject: "Reset Password for Wright Finder Motors",
    text: `
    Your OTP to reset your Password is\n\n${options.OTP}
    `,
  };
  await transporter.sendMail(mailOptions);
};
