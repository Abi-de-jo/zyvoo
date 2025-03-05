import React from "react";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto mt-22 px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Contact <span className="text-blue-600">Zyvoo</span></h1>
        <p className="mt-4 text-lg text-gray-600">
          Have questions or need assistance? Get in touch with us.
        </p>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">📍 Our Address</h3>
          <p className="text-gray-600 mt-2">123 Fashion Street, New York, NY 10001</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">📞 Contact</h3>
          <p className="text-gray-600 mt-2">Phone: +1 123-456-7890</p>
          <p className="text-gray-600">Email: support@zyvoo.com</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">⏰ Support Hours</h3>
          <p className="text-gray-600 mt-2">Mon-Fri: 9:00 AM - 6:00 PM</p>
          <p className="text-gray-600">Sat-Sun: 10:00 AM - 4:00 PM</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Send Us a Message</h2>
        <form className="mt-8 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Find Us Here</h2>
        <div className="mt-8">
          <iframe
            title="Google Map"
            className="w-full h-72 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=17.3834508, 78.4224473"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
