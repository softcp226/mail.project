
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


let create_mail_options = (email) => {
  console.log(process.env.company_mail,)
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: email,
    subject: `Unique Crypto Opportunity for you.`,
  //   dsn: {
  //     id: 'some random message specific id',
  //     return: 'headers',
  //     notify: 'success',
  //     recipient: process.env.mail
  // },

    html: `
   
<div class="mail_template"
    style="max-width: 600px; margin: auto; font-family: 'Poppins', sans-serif; background-color: #AA0000; color:"#fff; padding: 20px; border-radius: 10px; border: 1px solid #ccc;">
    
    <div style="text-align: center; margin-top: 20px;">
        <h3 style="font-size: 24px; font-weight: bold; color: #333;">Exciting Opportunity in crypto</h3>
    </div>
    <div style="margin-top: 30px;">
        <p style="font-size: 16px; color: #555;">Hi there,</p>

                    <p style="font-size: 18px; color: #555;">I hope you’re having a great day! I’m reaching out to share a potential opportunity in the cryptocurrency space that might interest you.</p>
                    <p style="font-size: 18px; color: #555;">We are currently looking for a reliable partner to assist with a transaction involving USDT (ERC20). Here are some key details:</p>
                                <h4 style="font-size: 20px; color: #555; font-weght:bold">Initial Transaction: $5,000,000</h4>
                                <h4 style="font-size: 20px; color: #555; font-weght:bold">Total Transaction Amount: $100,000,000</h4>
                               <h4 style="font-size: 20px; color: #555; font-weght:bold">ETH Gas Fee Required</h4>

                    <p style="font-size: 18px; color: #555;">If you are interested in participating as a receiver, we would love to chat. If you’re not in a position to engage directly, you can still earn a 10% referral fee by connecting us with someone who might be interested.</p>
                    <p style="font-size: 18px; color: #555;">If this sounds intriguing, please reply to this email or reach out to us at softcp226@gmail.com</p>
                    <p style="font-size: 18px; color: #555;">Thank you for your time, and I look forward to hearing from you!</p>
                    <p style="font-size: 16px; color: #555;">Best wishes,</p>
                     <p style="font-size: 16px; color: #555;">Lydia Merrick</p>


            <div style="margin-top: 40px;">
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




// const arrayOfEmails=["softcp226@gmail.com","stephanieshellaberger@yahoo.com", "salisannnn@gmail.com","aylendavis24@gmail.com","aylendavis37@gmail.com"]
const arrayOfEmails=require("./array")
// console.log(arrayOfEmails)

arrayOfEmails.forEach((email, index) => {
  setTimeout(() => {
    // Check if the email is not empty
    if (email) {
      // console.log(email);
      
      transporter.sendMail(
        create_mail_options(email),
        (err, info) => {
          if (err)return console.log(err.message);
          
          console.log(info.messageId, email,`number:${index}`);
        }
      );
    } else {
      console.log(`Skipping empty email at index ${index}`);
    }
  }, index * 5000); // Delay based on index (1 second per email)
});
