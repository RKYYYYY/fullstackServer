import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendConfirmationEmail = async (token, email) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Confirmation d'inscription",
    html: `<p>Bienvenue sur notre site ! Cliquez sur le lien suivant pour valider vorote inscription : <a href=${
      process.env.MODE === "development"
        ? process.env.API_URL
        : process.env.DEPLOY_BACK_URL
    }/user/verifyMail/${token}>Confirmer mon inscription</a></p>`,
  };

  await transporter.sendMail(mailOptions);
};
