import React from 'react'
import "./ContactC.css"


export const ContactC = () => {
  return (
    <div className="Ccontainer">
        <div className="Cmain">
            <h1 className="ctext">Let's Start a Conversation</h1>
            <p className='ctext'>We'd love to hear from you! Whether you have a question about our services, pricing, need a demo, or anything else, our team is ready to answer all your questions.</p>
            <p>Contact to our support team.</p>
            <p className='ctext'>Let us know how we can best serve you. Use the email logo below to email us or select other social media logos to follow us and contact below that best fit your needs. It's an honor to support you in your journey towards better health.</p>
            <br />
            <div className="logos">
                <div className="Email">
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpcldpHxztGHDPSvCMpTpDQBvWKqZMTGvgrKJRNpNbBJzTMgVpvjtpqShrrhmkGLGwdDCl"><img src="./Dogs-images/gmail.png" alt="" />
                    <p>Gmail</p>
                    </a>
                </div>
                <div className="Twitter">
                    <a href="https://x.com/SauravS39495284"><img src="./Dogs-images/twitter.png" alt="" />
                    <p>Twitter</p>
                    </a>
                </div>
                <div className="Linkedin">
                    <a href="https://www.linkedin.com/in/saurav-shinde-b89558237/"><img src="./Dogs-images/linkedin.png" alt="" />
                    <p>Linkedin</p>
                    </a>
                </div>
                <div className="Instagram">
                    <a href="https://www.instagram.com/saurav_shindee/"><img src="./Dogs-images/instagram.png" alt="" />
                    <p>Instagram</p>
                    </a>
                </div>
            </div>
            <p className='termstext'>Your privacy is important to us. To learn more about how we handle your information, please read our Privacy Policy.</p>
        </div>
    </div>
  )
}
