const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
     sgMail.send({
        to: 'pavan21manju@gmail.com',
        from: 'pavan21manju@gmail.com',
        subject: 'Sending with sendgrid is Fun',
        text: 'Hi ${name}, Hope you are doing good and staying safe!!.  Happy Learning!!'
    }).then(() => {
        console.log('Status: User account created')
      }).catch((e) => {
        console.log('Status: ERROR', e)
      })
}

const sendCancellationEmail = async (email, name) => {
    await sgMail.send({
        to: email,
        from: 'pavan21manju@gmail.com',
        subject: 'Soory to see you go!',
        text: 'GoodBye, I hope to see you back some time soon',
    }).then(() => {
        console.log('Status: User account deleted')
      }).catch((e) => {
        console.log('Status: ERROR', e)
      })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}