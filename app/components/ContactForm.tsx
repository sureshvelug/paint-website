export const ContactForm = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-black/5 text-black rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-black">
            Get a Free Quote
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Tell us a bit about your project. We'll get back within 1 business
            day with a personalized quote.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <form className="grid sm:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="relative">
              <label className="block text-sm font-semibold text-black mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 placeholder-gray-400 text-black focus:outline-none focus:border-black focus:bg-white transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <label className="block text-sm font-semibold text-black mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 placeholder-gray-400 text-black focus:outline-none focus:border-black focus:bg-white transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone Input */}
            <div className="relative sm:col-span-2">
              <label className="block text-sm font-semibold text-black mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 placeholder-gray-400 text-black focus:outline-none focus:border-black focus:bg-white transition-all duration-300"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Project Type Select */}
            {/* <div className="relative sm:col-span-2">
              <label className="block text-sm font-semibold text-black mb-2">
                Project Type *
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 text-black focus:outline-none focus:border-black focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="">Select project type</option>
                <option value="residential">Residential - Home</option>
                <option value="commercial">Commercial - Office/Retail</option>
                <option value="hospitality">
                  Hospitality - Hotel/Restaurant
                </option>
                <option value="custom">Custom/Other</option>
              </select>
              <svg
                className="absolute right-4 top-11 w-5 h-5 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div> */}

            {/* Message Textarea */}
            <div className="relative sm:col-span-2">
              <label className="block text-sm font-semibold text-black mb-2">
                Tell Us About Your Space *
              </label>
              <textarea
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 placeholder-gray-400 text-black focus:outline-none focus:border-black focus:bg-white transition-all duration-300 resize-none"
                placeholder="Describe your project, room dimensions, color preferences, and any specific requirements..."
                rows={5}
              />
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-black text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-base"
              >
                Send Your Request
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            {/* Privacy Note */}
            <div className="sm:col-span-2 text-center">
              <p className="text-sm text-gray-500">
                We respect your privacy. Your information will never be shared
                with third parties.
              </p>
            </div>
          </form>
        </div>

        {/* Contact Info Cards */}
        {/* <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 rounded-2xl bg-white border-2 border-gray-200">
            <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-black mb-1">Email Us</h3>
            <p className="text-sm text-gray-600">info@ecoluxurypaints.com</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white border-2 border-gray-200">
            <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-black mb-1">Call Us</h3>
            <p className="text-sm text-gray-600">+91 98765 43210</p>
          </div>

          {/* <div className="text-center p-6 rounded-2xl bg-white border-2 border-gray-200">
            <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-black mb-1">Visit Us</h3>
            <p className="text-sm text-gray-600">coimbatore, TamilNadu</p>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};
