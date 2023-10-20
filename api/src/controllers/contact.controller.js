var nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {

    res.status(200).json({ name: req.body.name,  email: req.body.email,  note: req.body.note,  subject: req.body.subject,  mail: req.body.mail,})
    /*var transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        }
    });

    var emailOptions = {
        from: `"${req.body.name}" <${req.body.email}>'`,
        to: process.env.EMAIL,
        subject: req.body.subject,
        text: `${req.body.note}\n ${req.body.mail}`,
    }

    transporter.sendMail(emailOptions, (error, info) => {
        if (error) { 
            return res.status(500).json({ error: "Error to send the email", error });
        } else {
            return res.status(200);
        }
    });*/
};

module.exports = {
    sendEmail
}