const nodemailer = require("nodemailer");

const  sendMail = async () => {
  const transport = await {
    host: "smtp.gmail.com",
    port: 993,
    secure: true,
    auth: { 
      user: "vaheshakhapzyan92@mail.com",
      pass: "vahe-3110"
    }
  };

  const transporter = await nodemailer.createTransport(transport);

//   await transporter.verify((error, success) => {
//     if (error) console.log(error);
//     else console.log(success);
//   });

  await transporter.sendMail({
    from: "vaheshakhapzyan92@mail.com",
    to: "vahe-9231@mail.com",
    message: 'contact'
  }).then( res => console.log(res))
  .catch(error => console.log(error))
  // console.log(transporter)
}

module.exports = sendMail;
