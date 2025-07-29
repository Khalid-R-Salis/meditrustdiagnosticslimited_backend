import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import AppLanguage from '../constants/app.language';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async (userMail: string, mailSubject: string, mailBody: string) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service : AppLanguage.gmail,
      auth: {
        type: AppLanguage.OAuth2,
        user: 'meditrust@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
      }
    } as SMTPTransport.Options);

    const mailOptions = {
      from: '"Meditrust ..." <medistrust@gmail.com>',
      to: userMail,
      subject: mailSubject,
      text: mailBody,
    }

    transporter.sendMail(mailOptions);
    console.log(AppLanguage.mailSentSuccessfully(userMail));
    return;
  } catch (err) {
    console.error('Error sending email:', err);
    return err;
  }
}

export default sendMail;