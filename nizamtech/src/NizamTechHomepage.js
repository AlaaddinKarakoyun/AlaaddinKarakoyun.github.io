import React from "react";
import { motion } from "framer-motion";

export default function NizamTechHomepage() {
  const team = [
    { name: "Alaaddin Talha Karakoyun", role: "Founder", bio: "no bio yet" },
    { name: "Coming soon", role: "", bio: "More people with different roles will hopefully join the nizamtech group." },
    
  ];

  const projects = [
    {
      title: "BabaOrder - Solution for a community in St. Gallen",
      summary:
        "BabaOrder is a solution which is still being developed. BabaOrder will make the catering in a community easier.",
      tags: ["Alaaddin Karakoyun", "C#", "Blazor", "ASP.NET", "MSSQL"],
    },
    {
      title: "Java 2D-Game",
      summary:
        "A 2D Game with Java. The game needs few fixes like player-character, collisions and ingame goals and will be released soon.",
      tags: ["Alaaddin Karakoyun", "Java", "JPanel", "needs fixing"],
    },
    {
      title: "GreenFahren.ch",
      summary:
        "This project is specifically for switzerland. More infos will be coming soon.",
      tags: ["Alaaddin Karakoyun", "2 anonym friends", "React", "Spring Boot"],
    },
    {
      title: "C# Console-Quiz-App ",
      summary:
        "A simple quiz-app with questions from a JSON-File.",
      tags: ["Alaaddin Karakoyun", "C#", ".NET", "Json"],
    },
    {
      title: "More projects",
      summary:
        "More projects have been made. Unfortunately, those weren't as professional, so we wouldn't backup those and they would be gone forever.",
      tags: ["Alaaddin Karakoyun", "simple 3D Game with Unity", "React Portfolio project in School"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 antialiased">
      <header className="bg-zinc-900/90 backdrop-blur sticky top-0 z-50 border-b border-zinc-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">N</div>
            <div>
              <h1 className="text-lg font-semibold tracking-wide">NizamTech</h1>
              <p className="text-xs text-gray-400">Foundation for Tech & Order</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#team" className="hover:text-white transition">Team</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="mx-auto  py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-5xl font-extrabold leading-tight text-white">Technology with Purpose</h2>
            <p className="mt-6 text-gray-400 text-lg max-w-xl">
              NizamTech is in the moment just a name, which is used by Alaaddin Karakoyun to assign it's projects to it. 
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-500 transition">View Projects</a>
              <a href="#contact" className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-zinc-800 transition">Contact Us</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="p-6 bg-zinc-900 rounded-2xl shadow-xl">
            <h3 className="text-lg font-semibold text-white">Quick Overview</h3>
            <p className="mt-3 text-gray-400">Our first goal is to do as many projects as possible with different technologies.</p>
          </motion.div>
        </section>

        <section id="projects" className="border-t border-zinc-800 bg-zinc-950 py-16">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-white">Projects</h3>
            <p className="mt-2 text-gray-400">Our current initiatives and impact-driven programs.</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((proj, idx) => (
                <motion.article key={idx} className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-indigo-500 transition-all" whileHover={{ y: -5 }}>
                  <h4 className="font-semibold text-white text-lg">{proj.title}</h4>
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">{proj.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {proj.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-zinc-800 text-gray-300 rounded-full">{t}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="container mx-auto px-6 py-16">
          <h3 className="text-3xl font-bold text-white">Team</h3>
          <p className="mt-2 text-gray-400">People behind NizamTech’s mission.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((p, i) => (
              <motion.div key={i} className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-indigo-500 transition-all" whileHover={{ y: -4 }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold shadow-lg">{p.name.split(" ")[0][0]}</div>
                  <div>
                    <div className="font-semibold text-white">{p.name}</div>
                    <div className="text-sm text-gray-400">{p.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">{p.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-zinc-800 bg-zinc-950 py-16">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white">Contact</h3>
              <p className="mt-3 text-gray-400 max-w-md">No response is guaranteed.</p>

              <div className="mt-8 space-y-4 text-gray-300">
                <p><strong>Email:</strong> alaaddin.krkyn03@gmail.com</p>
                
              </div>
            </div>

            <form
              action="https://formspree.io/f/xwprylnk"
              method="POST"
              className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-lg"
            >
              <label className="block">
                <span className="text-sm text-gray-300">Name</span>
                <input
                  name="name"
                  required
                  className="mt-2 block w-full rounded-md bg-zinc-800 border border-zinc-700 px-3 py-2 text-gray-100"
                  placeholder="Your name"
                />
              </label>

              <label className="block mt-4">
                <span className="text-sm text-gray-300">E-Mail</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 block w-full rounded-md bg-zinc-800 border border-zinc-700 px-3 py-2 text-gray-100"
                  placeholder="name@domain.com"
                />
              </label>

              <label className="block mt-4">
                <span className="text-sm text-gray-300">Message</span>
                <textarea
                  name="message"
                  required
                  className="mt-2 block w-full rounded-md bg-zinc-800 border border-zinc-700 px-3 py-2 text-gray-100"
                  rows={4}
                  placeholder="Your message"
                ></textarea>
              </label>

              <button
                type="submit"
                className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md text-white font-medium hover:opacity-90 transition"
              >
                Send
              </button>
            </form>
          </div>
        </section>

        
      </main>

      <footer className="border-t border-zinc-800 bg-black py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <div>© {new Date().getFullYear()} NizamTech — Everything in a order</div>
          <div className="flex gap-4">
            
          </div>
        </div>
      </footer>
    </div>
  );
}
