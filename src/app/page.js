"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { League_Spartan } from "next/font/google";
import ScrollToTop from "../components/ScrollToTop";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const languages = [
  "java",
  "python",
  "javascript",
  "c",
  "cplus2",
  "html1",
  "matlab",
  "linux",
  "nodejs",
  "spring",
  "sql",
  "verilog",
];

const projects = [
  { title: "JS 8 Ball Pool", image: "/8ball.jpg" },
  { title: "Automated Plant Waterer", image: "/plant.jpg" },
  { title: "CPU in Verilog", image: "/CPU.jpg" },
  { title: "Personal Portfolio in JS", image: "/website.png" },
  { title: "Digital Clock W/ DE10-Lite", image: "/de10.png" },
];

export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className={`relative min-h-screen bg-[#0B1120] ${leagueSpartan.className}`}>
      <ScrollToTop />

      {/* Navbar */}
      <div className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-[#0F172A]/80 px-4 sm:px-6 lg:px-10 backdrop-blur-md">
        <a
          href="mailto:ahmadkarimi9219@gmail.com"
          className="text-white text-lg sm:text-xl hover:text-[#93C5FD] transition"
        >
          Contact
        </a>

        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-white text-lg lg:text-2xl">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#93C5FD] transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("languages")}
            className="hover:text-[#93C5FD] transition"
          >
            Technical Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-[#93C5FD] transition"
          >
            Featured Projects
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="hover:text-[#93C5FD] transition"
          >
            Experience
          </button>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <a
            href="https://github.com/AhmadK005"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Githubicon.png"
              alt="GitHub"
              width={36}
              height={36}
              className="hover:opacity-50 transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmadkarimi47/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Linkedinicon.png"
              alt="LinkedIn"
              width={36}
              height={36}
              className="hover:opacity-50 transition"
            />
          </a>
          <a
            href="https://www.instagram.com/ahmadk_43/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Instagramicon.png"
              alt="Instagram"
              width={36}
              height={36}
              className="hover:opacity-50 transition"
            />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-b from-transparent to-[#111827]" />
        <div className="grid h-full w-full grid-cols-1 md:grid-cols-2">
          {/* Left Image */}
          <div className="relative hidden md:block h-full w-full">
            <Image
              src="/fish.gif"
              alt="Hero visual"
              fill
              priority
              className="object-cover object-left"
            />
          </div>

          {/* Right Content */}
          <div className="flex h-full items-center justify-center bg-[#0B1120] px-6 sm:px-10 lg:px-16">
            <div className="w-full max-w-3xl text-center md:text-left">
              <motion.h1
                className="text-white font-bold text-5xl sm:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1 }}
              >
                Ahmad Karimi
              </motion.h1>

              <motion.p
                className="mt-4 text-[#CBD5E1] text-lg sm:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.9 }}
              >
                Welcome to my Portfolio
              </motion.p>

              <motion.div
                className="mt-10 text-[#CBD5E1] text-base sm:text-lg leading-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <p className="mb-4 text-lg sm:text-xl font-medium text-white">
                  👋 Hi, I&apos;m Ahmad Karimi!
                </p>

                <p>
                  I&apos;m a Computer Engineering student who enjoys building systems
                  from the ground up, whether that&apos;s designing digital hardware
                  or developing full-stack applications. My work ranges from FPGA
                  and CPU design to cloud-based platforms, giving me a broad
                  understanding of how software and hardware interact.
                </p>
              </motion.div>

              <motion.button
                onClick={() => scrollToSection("languages")}
                className="mt-8 inline-block rounded-lg bg-[#E2E8F0] px-6 py-3 text-lg sm:text-xl font-semibold text-black shadow-md transition hover:text-[#2563EB]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                Explore
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section
  id="languages"
  className="relative scroll-mt-16 min-h-screen bg-[#111827] px-6 py-20 sm:px-10"
>
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-white text-4xl sm:text-5xl font-semibold">
            Technical Skills
          </h1>

          <p className="mx-auto mt-6 mb-14 max-w-4xl text-center text-[#CBD5E1] text-base sm:text-lg leading-8">
            A snapshot of the languages, tools, and platforms I use across hardware design,
            software development, and cloud-based systems.
          </p>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Languages */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
              <h2 className="mb-6 text-3xl font-semibold text-white">Languages</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Java",
                  "Python",
                  "JavaScript",
                  "C",
                  "C++",
                  "Verilog",
                  "SQL",
                  "HTML/CSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-2xl bg-[#1E293B] px-4 py-2 text-lg text-[#E2E8F0] shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Tools */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
              <h2 className="mb-6 text-3xl font-semibold text-white">Frameworks &amp; Tools</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "FastAPI",
                  "Node.js",
                  "Docker",
                  "Git",
                  "PostgreSQL",
                  "Redis",
                  "Spring",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-2xl bg-[#1E293B] px-4 py-2 text-lg text-[#E2E8F0] shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hardware / Systems */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
              <h2 className="mb-6 text-3xl font-semibold text-white">Hardware / Systems</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "FPGA",
                  "Quartus",
                  "ModelSim",
                  "Embedded Systems",
                  "CPU Design",
                  "DE10-Lite",
                  "Digital Logic",
                  "Computer Architecture",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-2xl bg-[#1E293B] px-4 py-2 text-lg text-[#E2E8F0] shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud / DevOps */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
              <h2 className="mb-6 text-3xl font-semibold text-white">Cloud / DevOps</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "AWS",
                  "Terraform",
                  "GitHub Actions",
                  "CI/CD",
                  "EC2",
                  "S3",
                  "IAM",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-2xl bg-[#1E293B] px-4 py-2 text-lg text-[#E2E8F0] shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="scroll-mt-16 min-h-screen bg-[#1F2937] px-6 py-20 sm:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-white text-4xl sm:text-5xl font-semibold">
            Featured Projects
          </h1>

          <p className="mx-auto mt-6 mb-14 max-w-4xl text-center text-[#CBD5E1] text-base sm:text-lg leading-8">
            A selection of projects across cloud systems, FPGA design, digital logic,
            embedded systems, and web development.
          </p>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Natural Language Communicator */}
            <motion.a
              href="https://github.com/AhmadK005/Natural-Language-Communicator-"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-sm transition"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Natural Language Communicator
              </h2>
              <p className="mt-4 text-[#CBD5E1] leading-8 text-base sm:text-lg">
                Architected and deployed a scalable cloud platform that enables policy
                analysts to interact with large language models through a Docker-based
                microservices stack and AWS-hosted inference.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["AWS", "Docker", "Terraform", "PostgreSQL", "Redis", "FastAPI"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-2xl bg-[#1E293B] px-4 py-2 text-sm sm:text-base text-[#E2E8F0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center text-[#E2E8F0] font-medium">
                View on GitHub →
              </div>
            </motion.a>

            {/* FPGA Dino Runner */}
            <motion.a
              href="https://github.com/AhmadK005/FPGA-Bluetooth-Dino-Game"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-sm transition"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                FPGA Bluetooth Dino Runner
              </h2>
              <p className="mt-4 text-[#CBD5E1] leading-8 text-base sm:text-lg">
                Built a complete FPGA game system with VGA rendering, Bluetooth UART
                input, FSM-based gameplay, collision detection, LFSR-driven obstacle
                spawning, and 7-segment scoring on the DE10-Lite board.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Verilog", "FPGA", "UART", "VGA", "Quartus", "DE10-Lite"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-2xl bg-[#1E293B] px-4 py-2 text-sm sm:text-base text-[#E2E8F0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center text-[#E2E8F0] font-medium">
                View on GitHub →
              </div>
            </motion.a>

            {/* 32-bit CPU */}
            <motion.a
              href="https://github.com/AhmadK005/Pipelined-CPU-Design-in-Verilog-ModelSim-DE10-Lite-FPGA-"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-sm transition"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                32-Bit Pipelined CPU Design
              </h2>
              <p className="mt-4 text-[#CBD5E1] leading-8 text-base sm:text-lg">
                Designed and verified a custom 32-bit pipelined CPU in Verilog with
                modular ALU, control logic, branch handling, and 100+ simulation test
                cases, then synthesized and validated it on FPGA hardware.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Verilog", "ModelSim", "FPGA", "CPU Design", "Digital Logic"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-2xl bg-[#1E293B] px-4 py-2 text-sm sm:text-base text-[#E2E8F0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center text-[#E2E8F0] font-medium">
                View on GitHub →
              </div>
            </motion.a>

            {/* Portfolio Website */}
            <motion.a
              href="https://github.com/AhmadK005/JavaScript-Portfolio-Website-Node.js-JavaScript-TailwindCSS-"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-sm transition"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Portfolio Website
              </h2>
              <p className="mt-4 text-[#CBD5E1] leading-8 text-base sm:text-lg">
                Developed a responsive multi-page portfolio website to present
                projects, technical skills, and resume content through a clean,
                structured interface with modern styling and smooth navigation.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Next.js", "JavaScript", "TailwindCSS", "Responsive Design"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-2xl bg-[#1E293B] px-4 py-2 text-sm sm:text-base text-[#E2E8F0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center text-[#E2E8F0] font-medium">
                View on GitHub →
              </div>
            </motion.a>

            {/* Plant Watering System */}
            <motion.a
              href="https://github.com/AhmadK005/Automated-Plant-Watering-System-Integration-of-Arduino-Java-Programming-"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-sm transition lg:col-span-2"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Automated Plant Watering System
              </h2>
              <p className="mt-4 text-[#CBD5E1] leading-8 text-base sm:text-lg">
                Designed and implemented an automated plant watering system using Java
                and Arduino-compatible devices, integrating a water pump, tubing, and
                soil moisture sensing with event-driven control logic.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Java", "Arduino", "Embedded Systems", "Sensors", "MATLAB"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-2xl bg-[#1E293B] px-4 py-2 text-sm sm:text-base text-[#E2E8F0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center text-[#E2E8F0] font-medium">
                View on GitHub →
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="scroll-mt-16 min-h-screen bg-[#334155] px-6 py-20 sm:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <h1 className="text-center text-white text-4xl sm:text-5xl font-semibold">
            Experience
          </h1>

          <p className="mx-auto mt-6 mb-14 max-w-3xl text-center text-white/80 text-base sm:text-lg leading-8">
            My professional and technical experience, combining hands-on engineering
            work with real-world problem solving.
          </p>

          {/* Experience Card */}
          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm border border-white/20 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Inventory Clerk — Reliance Home Comfort
            </h2>

            <p className="mt-2 text-white/70 text-sm">
              May 2023 – Present · Whitby, ON
            </p>

            <ul className="mt-6 space-y-4 text-white/90 text-base leading-7">
              <li>
                • Managed and reorganized $7,000+ in tools and inventory, improving
                tracking accuracy and reducing operational inefficiencies.
              </li>
              <li>
                • Used CRM systems and Excel to track inventory, generate reports,
                and support decision-making.
              </li>
              <li>
                • Collaborated with technicians and contractors to streamline workflow
                and improve coordination.
              </li>
              <li>
                • Trained new employees and maintained responsibilities post co-op,
                demonstrating reliability and leadership.
              </li>
            </ul>
          </div>

          {/* What I'm Looking For */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              What I’m Looking For
            </h2>

            <p className="mt-6 text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-8">
              I’m currently seeking internships in software engineering, embedded systems,
              or hardware design where I can apply my experience building real systems
              across both hardware and software.
            </p>
          </div>

          {/* Resume Button */}
          <div className="mt-14 flex flex-col items-center justify-center">
            <a
              href="/AhmadKResume2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#E2E8F0] px-8 py-4 text-lg font-semibold text-black shadow-md transition hover:scale-105 hover:text-[#2563EB]"
            >
              View Full Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
