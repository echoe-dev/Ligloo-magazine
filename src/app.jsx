import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GridSection from "./components/GridSection";

function App() {
  const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles = [
    {
      title: "Task Automation Services",
      snippet:
        "Automate repetitive tasks and boost efficiency with Ligloo’s intelligent automation services.",
      content: `At Ligloo, we specialize in designing custom automation workflows that save you time and reduce errors. From automating business reports to repetitive online processes, our solutions integrate seamlessly with your current systems. Using the latest Python scripts, bots, and cloud-based automation tools, we make your day-to-day operations effortless.\n\nFeatures:\n- Workflow automation for web and desktop tasks\n- Custom Python scripts for repetitive operations\n- Integration with Excel, Google Sheets, and email platforms\n- Smart scheduling and notifications\n\nImagine a world where repetitive tasks complete themselves, giving your team the freedom to innovate. That’s the Ligloo promise.`,
      img: "/assets/img1.png",
    },
    {
      title: "Robotics Systems & AI Design",
      snippet:
        "Cutting-edge robotics and AI solutions designed to elevate your operations.",
      content: `Our robotics and AI division builds advanced systems tailored for your business. From small-scale service robots to intelligent AI models, we provide full-cycle design, simulation, and deployment. Using AI-driven control systems, our robots can perform complex tasks efficiently and safely.\n\nHighlights:\n- Custom robotics for industrial and service applications\n- AI design: computer vision, machine learning, and predictive models\n- Simulation and testing environments\n- Scalable solutions adaptable to evolving needs\n\nWith a combination of robotics precision and AI intelligence, Ligloo transforms concepts into real-world solutions that feel almost alive.`,
      img: "/assets/img2.png",
    },
    {
      title: "Data Administration & Development",
      snippet:
        "Data management, Python programming, and full-stack solutions made simple.",
      content: `Ligloo’s data services ensure your information is structured, secure, and optimized. We specialize in MySQL database administration, Python programming, and VS Code development setups to streamline your projects. Our team develops scripts, dashboards, and applications to make data actionable and easy to understand.\n\nServices:\n- Database setup, optimization, and backups (MySQL)\n- Python-based applications and automation scripts\n- Full-stack support using modern development tools (VS Code, Git)\n- Data visualization dashboards for actionable insights\n\nWith Ligloo, your data is not just stored—it’s transformed into knowledge you can act on, efficiently and elegantly.`,
      img: "/assets/img3.png",
    },
  ];

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-slate-800 shadow-lg border-b-2 border-pink-500">
        <img src="/logo.png" alt="Ligloo Logo" className="h-16" />
        <nav>
          <ul className="flex gap-6 text-white font-bold">
            <li>
              <a
                href="#services"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-6xl font-extrabold mb-4 text-pink-400 drop-shadow-lg">
          Ligloo Magazine
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Welcome to the Cyberpunk Future of Innovation.
        </p>
      </section>

      {/* Grid Articles */}
      <GridSection articles={articles} openModal={openModal} />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-slate-900 text-white p-8 rounded-xl max-w-2xl w-full shadow-2xl relative border-2 border-pink-500">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-3xl font-bold hover:text-pink-400"
            >
              &times;
            </button>
            <pre className="whitespace-pre-wrap">{modalContent}</pre>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <footer
        id="contact"
        className="p-8 bg-slate-800 text-white text-center mt-16 border-t-2 border-pink-500"
      >
        <h3 className="text-2xl font-bold mb-2 text-pink-400">Contact Us</h3>
        <p>
          Email:{" "}
          <a
            href="mailto:Ligloo@outlook.com"
            className="text-pink-500 hover:underline"
          >
            Ligloo@outlook.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a
            href="tel:0833048257"
            className="text-pink-500 hover:underline"
          >
            0833048257
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
