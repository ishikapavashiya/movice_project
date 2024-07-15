let nodemailer = require("nodemailer");

//from
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 588,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "ishikapavasiya@gmail.com",
    pass: "123456",
  },
});

let sendEmail = (to, subject, data) => {
  return transporter.sendMail({
    from: '"test mail"<ishikapavasiya@gmail.com>', // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    // text: data, // plain text body
    html: data,
  });
};

module.exports = sendEmail;