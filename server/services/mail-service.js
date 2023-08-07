const nodmailer = require('nodemailer');
require('dotenv').config();

class MailService {
    constructor() {
        this.transporter = nodmailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            }
        });
    }

    async sendActivationMail(email, link) {
        await this.transporter.sendMail({
            from: `TOP ${process.env.SMTP_USER}`,
            to: email,
            subject: 'Активація аккаунту',
            text: '',
            html:
                `
                    <div>
                        <h1>Для активації акаунту перейдіть за посиланням</h1>
                        <a href="${link}">АКТИВУВАТИ</a>
                    </div>
                `
        });
    }
}

module.exports = new MailService();
