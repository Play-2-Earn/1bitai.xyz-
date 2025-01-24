import React, { useState } from "react";
import {
  Layers,
  Orbit,
  Share2,
  Cpu,
  Lock,
  Zap,
  Telescope,
  Network,
} from "lucide-react";

const TechNexusLanding = () => {
  const [activeSection, setActiveSection] = useState("innovation");

  const sectionDetails = {
    innovation: {
      icon: <Orbit className="w-16 h-16 text-teal-400" />,
      title: "Exponential Innovation Ecosystem",
      description:
        "Pioneering transformative technologies through convergent research, adaptive machine learning, and breakthrough computational paradigms.",
      details: [
        "Advanced AI-driven research methodologies",
        "Cross-disciplinary technological integration",
        "Quantum computing acceleration frameworks",
      ],
    },
    security: {
      icon: <Lock className="w-16 h-16 text-purple-500" />,
      title: "Cryptographic Intelligence Protocol",
      description:
        "Next-generation security architectures leveraging blockchain, zero-knowledge proofs, and adaptive threat detection algorithms.",
      details: [
        "Decentralized identity verification systems",
        "Quantum-resistant encryption technologies",
        "Self-evolving cybersecurity frameworks",
      ],
    },
    network: {
      icon: <Network className="w-16 h-16 text-cyan-500" />,
      title: "Distributed Intelligence Network",
      description:
        "Global computational mesh creating autonomous, self-optimizing intelligent systems across interconnected technological domains.",
      details: [
        "Peer-to-peer cognitive computing",
        "Collaborative AI research platforms",
        "Decentralized knowledge propagation",
      ],
    },
  };
  const handleRedirect = () => {
    window.location.href = "https://www.b1tcoin.ai/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-tr from-blue-900/10 via-purple-900/10 to-black/20 opacity-50"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Telescope className="w-16 h-16 text-emerald-400 mr-4" />
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-600">
              1BitAI.XYZ
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging Quantum Intelligence, Blockchain Technologies, and
            Decentralized Computing Ecosystems
          </p>
        </header>

        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {Object.keys(sectionDetails).map((key) => (
              <div
                key={key}
                onClick={() => setActiveSection(key)}
                className={`p-6 rounded-2xl cursor-pointer transition-all transform hover:scale-105 ${
                  activeSection === key
                    ? "bg-gradient-to-br from-emerald-600/50 to-cyan-600/50 scale-105 shadow-2xl"
                    : "bg-gray-800/50 hover:bg-gray-800/70"
                }`}
              >
                {sectionDetails[key].icon}
                <h3 className="text-2xl font-bold mt-4 mb-2">
                  {sectionDetails[key].title}
                </h3>
                <p className="text-gray-200">
                  {sectionDetails[key].description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-800/40 p-8 rounded-2xl">
            <h4 className="text-3xl font-bold mb-6 text-center">
              {sectionDetails[activeSection].title} Details
            </h4>
            <ul className="grid md:grid-cols-3 gap-4">
              {sectionDetails[activeSection].details.map((detail, index) => (
                <li
                  key={index}
                  className="bg-gray-900/50 p-4 rounded-xl flex items-center space-x-3"
                >
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-200">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="text-center space-y-8">
          <div className="flex justify-center space-x-8">
            <Cpu className="w-12 h-12 text-blue-400 animate-pulse" />
            <Share2 className="w-12 h-12 text-green-400 animate-spin" />
            <Layers className="w-12 h-12 text-purple-400 animate-bounce" />
          </div>

          <button
            class="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold py-4 px-8 rounded-full text-xl flex items-center justify-center mx-auto space-x-3 group hover:from-emerald-700 hover:to-cyan-700 transition-all"
            onClick={handleRedirect}
          >
            <span>Enter Technological Realm</span>
            <Zap className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <footer className="text-center text-gray-500 mt-16 text-sm opacity-50">
          © 2024 1BitAI.XYZ Technological Nexus. Quantum Innovations Reserved.
        </footer>
      </div>
    </div>
  );
};

export default TechNexusLanding;
