import emailjs from '@emailjs/browser'
import { useState } from 'react'

function Form() {

  const initialState = {
    fName: '',
    lName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    event.preventDefault()
    setFormState({ ...formState, [event.target.id]: event.target.value })
    if (event.target.value === '') {
      setFormState({ ...formState, [event.target.id]: '' })
    }
  }

  const handleMessage = (e) => {
    e.preventDefault()
    emailjs
      .send(
        'service_w47as1j',
        'template_jiovxxq',
        formState,
        '-g6CgSoAgcOI1wfb6'
      )
      .then(
        function (response) {
          alert(
            `${formState.name}, Thanks for sending a message! I will get back to you ASAP!`
          )
          window.location.reload(true)
        },
        function (error) {
          alert('Sorry!', error)
        }
      )

    
  }

  return (
      <div className="container" id='form-container'>
      <div className="row">
        <div className="col-md-5 mr-auto">
          <h3 className="contact-message-header">A note from Robin</h3>
          <p className="contact-message-content">Thank you from the bottom of my heart for taking the time to visit my website! Your interest and support mean the world to me. I am happy to have the opportunity to connect with each and every one of you. It is the wonderful people I bake for who inspire me to create and innovate my tasty treats. Please feel free to reach out to me anytime; I am eager to make your day a little sweeter.</p>
        </div>

        <div className="col-md-6">
          <div className="box">
            <h3 className="form-welcome">Contact us Today</h3>
            <form onSubmit={handleMessage} className="mb-5" method="post" id="contactForm" name="contactForm">
              <div className="row"> 
                <div className="col-md-6 form-group">
                  <label for="fName" className="col-form-label">First Name</label>
                  <input onChange={handleChange} type="text" className="form-control" name="fName" id="fName" placeholder="First name"/>
                </div>
                <div className="col-md-6 form-group">
                  <label for="lName" className="col-form-label">Last Name</label>
                  <input onChange={handleChange} type="text" className="form-control" name="lName" id="lName" placeholder="Last Name"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <label for="email" className="col-form-label">Email *</label>
                  <input onChange={handleChange} type="text" className="form-control" name="email" id="email" placeholder="Your email address"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <label for="email" className="col-form-label">Phone</label>
                  <input onChange={handleChange} type="text" className="form-control" name="phone" id="phone" placeholder="Your phone number"/>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 form-group">
                  <label for="message" className="col-form-label">Project Description *</label>
                  <textarea className="form-control" name="message" id="message" cols="30" rows="7"></textarea>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <input onChange={handleChange} type="submit" value="Send Message" className="btn btn-block btn-primary rounded-0 py-2 px-4"/>
                  <span className="submitting"></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form