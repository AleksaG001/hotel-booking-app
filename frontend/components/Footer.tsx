const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-black sm:text-center dark:text-black">
          © 2023 <a href="https://flowbite.com/" className="hover:underline">Royal Luxury Hotel</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-black sm:mt-0">
          <li>
            <a href="#" className="hover:underline hover:text-accent me-4 md:me-6">About Us</a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-accent me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:underline  hover:text-accent me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-accent">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

