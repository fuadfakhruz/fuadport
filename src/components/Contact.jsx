import { motion } from "framer-motion";

const Contact = () => {
  const phoneNumber = "6281392302787";
  const handleWhatsapp = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank");
  };

  const github = "fuadfakhruz";
  const handleGithub = () => {
    const url = `https://github.com/${github}`;
    window.open(url, "_blank");
  };

  const linkedin = "muhammad-fuad-fakhruzzaki";
  const handleLinkedin = () => {
    const url = `https://www.linkedin.com/in/${linkedin}`;
    window.open(url, "_blank");
  };

  const emailAddress = "mfuadfakhruzzaki@students.undip.ac.id";
  const handleEmail = () => {
    const url = `mailto:${emailAddress}`;
    window.location.href = url;
  };

  return (
    <div
      className="flex justify-center items-center pt-32 pb-12 bg-slate-950"
      id="contact"
    >
      <div className="w-full sm:w-[35rem] max-w-screen-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center sm:text-left"
        >
          <h1 className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white font-bold">
            Get in touch with me!<span className="text-white"></span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 items-center mt-10 sm:mt-16"
        >
          <img
            src="images/pasfoto.png"
            alt=""
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="flex flex-col gap-4 sm:gap-8">
            <p className="text-xl text-center sm:text-start text-transparent bg-clip-text bg-gradient-to-t from-sky-500 to-sky-200">
              Contact me via
            </p>
            <div className="text-lg">
              <div
                onClick={handleEmail}
                className="flex items-center gap-2 cursor-pointer text-sky-100"
              >
                <i className="fa-solid fa-envelope text-[12px]"></i>
                mfuadfakhruzzaki@students.undip.ac.id
              </div>
              <div
                onClick={handleWhatsapp}
                className="flex items-center gap-2 cursor-pointer text-sky-100"
              >
                <i className="fa-brands fa-whatsapp"></i>
                +6281392302787
              </div>
              <div
                onClick={handleGithub}
                className="flex items-center gap-2 cursor-pointer text-sky-100"
              >
                <i className="fa-brands fa-github"></i>
                fuadfakhruz
              </div>
              <div
                onClick={handleLinkedin}
                className="flex items-center gap-2 cursor-pointer text-sky-100"
              >
                <i className="fa-brands fa-linkedin"></i>
                Muhammad Fuad Fakhruzzaki
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-cyan-700 mt-10 sm:mt-20 text-center font-medium"
        >
          Built with Vite and Tailwind CSS by Fuad Fakhruz.
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
