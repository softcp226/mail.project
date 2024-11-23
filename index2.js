
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
require("dotenv").config();
let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});

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


// let transporter = nodemailer.createTransport(
//   {
//   service: "Zoho",
//   secure: false,

//   auth: {
//     user: process.env.company_mail,
//     pass: process.env.mail_password,
//   },
// }





// );


let create_mail_options = (email) => {
  console.log(process.env.company_mail,)
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: email,
    subject: `Partnership Opportunity in Cryptocurrency`,
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
        <h3 style="font-size: 24px; font-weight: bold; color: #333;">Partnership Opportunity in Cryptocurrency</h3>
    </div>
    <div style="margin-top: 30px;">
        <p style="font-size: 16px; color: #555;">Hi ...,</p>

                    <p style="font-size: 18px; color: #555;">I hope this message finds you well. I’m reaching out because I believe there may be a potential opportunity in the cryptocurrency space that could be of interest to you or someone in your network.</p>
                    <p style="font-size: 18px; color: #555;">We are looking for a trusted partner to collaborate with on a transaction involving USDT (ERC20). Here are the basic details:</p>
                                <h4 style="font-size: 20px; color: #555; font-weght:bold">Initial Transaction: $5,000,000</h4>
                                <h4 style="font-size: 20px; color: #555; font-weght:bold">Total Transaction Amount: $100,000,000</h4>
                               <h4 style="font-size: 20px; color: #555; font-weght:bold">ETH Gas Fee Required</h4>

                    <p style="font-size: 18px; color: #555;">If you’re open to discussing this opportunity, we’d be happy to provide more information and see if it’s a fit. Additionally, if you are not personally able to participate but know someone who might be interested, you can earn a referral fee for connecting us.</p>
                    <p style="font-size: 18px; color: #555;">Please feel free to reach out to me directly at [ softcp226@gmail.com ] or reply to this email if you would like to learn more.</p>
                    <p style="font-size: 18px; color: #555;">I look forward to hearing from you!</p>
                    <p style="font-size: 16px; color: #555;">Best Regards,</p>
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




// const arrayOfEmails=[ "softcp226@gmail.com", "salisannnn@gmail.com","aylendavis24@gmail.com","aylendavis37@gmail.com", "salisanann79@gmail.com"]
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

