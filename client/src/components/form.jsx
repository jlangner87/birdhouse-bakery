// import '../styles/Form.css'

function Form() {
  return (
      <div className="container" id='form-container'>
      <div className="row">
        <div className="col-md-5 mr-auto">
          <h3 className="contact-message-header">A note from Robin</h3>
          <p className="contact-message-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sequi, ipsa hic alias officia facilis eveniet, neque laborum cumque maxime soluta. Neque atque necessitatibus ipsam sequi soluta magni, iste vero fuga inventore, explicabo totam quis quia nemo possimus cupiditate doloribus?</p>
        </div>

        <div className="col-md-6">
          <div className="box">
            <h3 className="form-welcome">Contact us Today</h3>
            <form className="mb-5" method="post" id="contactForm" name="contactForm">
              <div className="row">
                
                <div className="col-md-6 form-group">
                  <label for="name" className="col-form-label">First Name</label>
                  <input type="text" className="form-control" name="name" id="name" placeholder="First name"/>
                </div>
                <div className="col-md-6 form-group">
                  <label for="name" className="col-form-label">Last Name</label>
                  <input type="text" className="form-control" name="organization" id="organization" placeholder="Last Name"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <label for="email" className="col-form-label">Email *</label>
                  <input type="text" className="form-control" name="email" id="email" placeholder="Your email address"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <label for="email" className="col-form-label">Phone</label>
                  <input type="text" className="form-control" name="email" id="email" placeholder="Your phone number"/>
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
                  <input type="submit" value="Send Message" className="btn btn-block btn-primary rounded-0 py-2 px-4"/>
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