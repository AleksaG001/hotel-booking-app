import Image from "next/image";

const Aboutus = () => {
  return (
    <div className="p-8 flex flex-col items-center mt-7">
      <h1 className="text-4xl font-bold  font-primary">About Us</h1>
      <div className="relative w-[300px] h-[50px] mb-4">
        <Image
          src={"/assets/headingimg.png"}
          fill
          alt=""
          className="object-cover"
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p className="mb-4 text-center max-w-4xl text-lg ">
        Welcome to the Royal Luxury Hotel, where opulence meets exceptional
        hospitality. Nestled in the heart of the city, our hotel stands as a
        beacon of sophistication and elegance, offering our guests an
        unparalleled experience of luxury and comfort.
      </p>
      <hr className="my-8 w-1/2 border-t-4 border-accent" />
      <h1 className="text-4xl font-bold mb-4 font-primary">Our Story</h1>
      <p className="mb-4 text-center max-w-4xl text-lg">
        The Royal Luxury Hotel was born out of a dream to create an oasis of
        luxury in the bustling cityscape. Founded by Lady Eleanor Fitzgerald in
        1925, the hotel was originally a grand mansion that she inherited from
        her illustrious family. Lady Eleanor, an avid traveler and connoisseur
        of fine living, envisioned a sanctuary where the world s elite could
        experience the grandeur of a bygone era, coupled with modern comforts.
      </p>
      <hr className="my-8 w-1/2 border-t-4 border-accent" />
      <h1 className="text-4xl font-bold mb-4 font-primary">Our Vision</h1>
      <p className="mb-4 text-center max-w-4xl text-lg">
        As we look to the future, the Royal Luxury Hotel remains dedicated to
        upholding the legacy of Lady Eleanor Fitzgerald. We strive to blend
        timeless elegance with contemporary luxury, ensuring that every stay is
        a memorable one. Our passion for hospitality drives us to continually
        enhance our services, creating an environment where guests can relax,
        rejuvenate, and indulge in the finer things in life.
      </p>
      <hr className="my-8 w-1/2 border-t-4 border-accent" />

      <div className="mb-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-2 text-center font-primary">
          Contact Us
        </h2>
        <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 border-t-2 border-b-2 border-accent">
          <div className="mb-4">
            <label
              className="block text-accent text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-accent text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-accent text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-accent hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center font-primary mt-4">
            Our Location
          </h2>
          <div className="h-64 flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11323.110970400561!2d20.438217726827023!3d44.80571798713056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70003700d4c1%3A0x578f22ce21383eb0!2sBelgrade%20Waterfront%2C%20Belgrade!5e0!3m2!1sen!2srs!4v1718804993274!5m2!1sen!2srs"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
