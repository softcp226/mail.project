
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
require("dotenv").config();
// let transporter = nodemailer.createTransport({
//   service: "Gmail",
//   secure: false,

//   auth: {
//     user: process.env.company_mail,
//     pass: process.env.mail_password,
//   },
// });

// const transporter = nodemailer.createTransport(
//   smtpTransport({
//     host: process.env.host,
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 465,
//     auth: {
//       user: process.env.company_mail,
//       pass: process.env.mail_password,
//     },
//   }),
// );


let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});


let create_mail_options = (data) => {
  console.log(process.env.company_mail,)
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: data.email,
    subject: `Change Of Domain`,
  //   dsn: {
  //     id: 'some random message specific id',
  //     return: 'headers',
  //     notify: 'success',
  //     recipient: process.env.mail
  // },

    html: `
   
<div class="mail_template"
    style="max-width: 600px; margin: auto; font-family: 'Poppins', sans-serif; background-color: #AA0000; color:"#fff; padding: 20px; border-radius: 10px; border: 1px solid #ccc;">
     <div style="text-align: center;">
                <img src="https://softjovial.ltd/css/images/IMG-20220829-WA0004~4.jpg"   alt="Company Logo" style="width: 80px; border-radius: 50%;">
            </div>

    <div style="text-align: center; margin-top: 20px;">
        <h3 style="font-size: 24px; font-weight: bold; color: #333;">Change Of Domain TLDS</h3>
    </div>
    <div style="margin-top: 30px;">
        <p style="font-size: 16px; color: #555;">Dear ${data.full_name}</p>

                    <p style="font-size: 18px; color: #555;">We wanted to inform you of an update to our platform. To improve security and prevent DDoS attacks, we've changed our domain from softjovial.biz to softjovial.ltd, Please use the new domain https://softjovial.ltd for all future access.</p>
                    <p style="font-size: 18px; color: #555;">If you have any questions, feel free to contact our customer support.</p>
         

    
            <div style="margin-top: 40px;">
                <p style="font-size: 14px; color: #999;" >This message was generated via softjovial secured channel. Please do not take any action if you did not make this request.</p>
            </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
</style>
`,
  });
};









// const execute_mail = (mail) => {
//   try {



//   } catch (error) {
//     console.log("an error occurred:", error.message);
//     clearInterval(call_execute_mail);
//     setTimeout(() => {
//       call_execute_mail = setInterval(() => execute_mail(), 50000);
//       console.log("Restarted mail sending interval.");
//     }, 5000);
//   }
// };

// let call_execute_mail = setInterval(() => execute_mail(), 5000);


// const arrayOfEmails=["enwofe2020@gmail.com","katelynmullally@gmail.com","stephanieshellaberger@yahoo.com","",""]

// arrayOfEmails.forEach(email => {
// setTimeout(() => {
//   console.log(email)

//   transporter.sendMail(
//     create_mail_options(email),
//     (err, info) => {
//       if (err) throw new Error(err.message);
      
//       console.log(info.messageId, email);
//     },
//   );
  
  

// }, 1000);  
// });




// const arrayOfEmails=[{email:"softcp226@gmail.com", full_name:"john doe"},{email:"lydiamerrick6@gmail.com", full_name:"john doe"}]
const arrayOfEmails=require("./array2")
// console.log(arrayOfEmails)

arrayOfEmails.forEach((array, index) => {
  setTimeout(() => {
    // Check if the email is not empty
     if (array.email) {
      // console.log(email);
      
      transporter.sendMail(
        create_mail_options({email:array.email,full_name:array.full_name}),
        (err, info) => {
          if (err)return console.log(err.message);
          
          console.log(info.messageId, array.email,`number:${index}`);
        }
      );
    } else {
      console.log(`Skipping empty email at index ${index}`);
    }
  }, index * 6000); // Delay based on index (1 second per email)
});
