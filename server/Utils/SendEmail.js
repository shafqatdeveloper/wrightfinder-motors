import nodemailer from "nodemailer";

export const sendMessage = async (options) => {
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
    to: "shadownix4@gmail.com",
    subject: options.subject,
    text: `
    My Name is : ${options.name}\n
    My Email is : ${options.email}\n
    My Message is : ${options.message}
    `,
  };
  await transporter.sendMail(mailOptions);
};
