import React from 'react';

const Form = () => {
  
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;
    
    // Use FormSubmit API for email
    fetch('https://formsubmit.co/ajax/salonijaiswal.7412@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Show alert if successfully sent
        if (data.success) {
          alert('Message sent successfully!');
          form.reset(); // Clear form inputs
        } else {
          alert('Failed to send the message. Please try again later.');
        }
      })
      .catch(() => alert('Failed to send the message. Please try again later.'));
  };

  return (
    <div className="contact-form-container bg-zinc-800 w-2/3 m-auto py-5 rounded-xl">
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        <div className="form-group mb-4">
          <label htmlFor="name" className="block text-lg text-white mx-5 font-semibold mt-4">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="form-input w-full bg-transparent text-zinc-400 border-[1px] border-[#facc15] px-3 py-2 rounded-full"
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="email" className="block text-lg text-white mx-5 font-semibold mt-4">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="form-input w-full bg-transparent text-zinc-400 border-[1px] border-[#facc15] px-3 py-2 rounded-full"
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="subject" className="block text-lg text-white mx-5 font-semibold mt-4">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter the subject"
            required
            className="form-input w-full bg-transparent text-zinc-400 border-[1px] border-[#facc15] px-3 py-2 rounded-full"
          />
        </div>

        <div className="form-group mb-6">
          <label htmlFor="message" className="block text-lg text-white mx-5 font-semibold mt-4">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here"
            required
            className="form-input w-full bg-transparent text-zinc-400 border-[1px] border-[#facc15] px-3 py-2 rounded-xl"
          ></textarea>
        </div>

        <button
          type="submit"
          className="submit-btn w-full py-2 px-4 font-semibold rounded-lg bg-[#facc15] text-white text-xl"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
