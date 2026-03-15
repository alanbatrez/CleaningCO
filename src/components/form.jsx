import { useForm, ValidationError } from '@formspree/react';
import './form.css'; 

function Form() {
  const [state, handleSubmit] = useForm("mkoqvrlo");

  if (state.succeeded) {
    return (
      <section className="contact-section">
        <div className="contact-form-container">
          <p className="success-message">Thanks! We will contact you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section">
      <div className="contact-form-container">
        <h2>Request a Quote</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="form-control"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              placeholder="john@example.com"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              className="form-control"
              placeholder="(123) 456-7890"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Service Interest</label>
            <select
              id="service"
              name="service"
              className="form-control"
              defaultValue=""
              required
            >
              <option value="" disabled>Select a service</option>
              <option value="Residential cleaning">Residential cleaning</option>
              <option value="Commercial cleaning">Commercial cleaning</option>
              <option value="Post construction cleaning">Post construction cleaning</option>
              <option value="Carpet & upholstery">Carpet & upholstery</option>
              <option value="Pressure Washing">Pressure Washing</option>
              <option value="Add-Ons">Add-Ons</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder="How can we help you?"
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" className="submit-btn" disabled={state.submitting}>
            {state.submitting ? 'Sending...' : 'Submit Request'}
          </button>

        </form>
      </div>
    </section>
  );
}

export default Form;