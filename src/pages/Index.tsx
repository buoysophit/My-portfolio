import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Mail, Phone, Github, Linkedin, ArrowUp, ChevronDown, Menu, X, Globe, Home, Folder, BinaryIcon, FolderCheckIcon, Contact2Icon } from 'lucide-react';
import { SiProbot } from "react-icons/si";
import { IconCloudDemo } from "@/components/technology/technologyicon";
import { Iphone15ProDemo } from "@/components/iphone/iphone15";
import { AndroidDemo } from "@/components/iphone/android";
import { PersonIcon } from '@radix-ui/react-icons';
import { FiHome } from "react-icons/fi";
import { SlGraduation } from "react-icons/sl";





// Add a custom hook for intersection observer animation
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lang, setLang] = useState<'kh' | 'en'>('kh');

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  // Save dark mode preference and apply to document
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleFormSubmit = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    console.log('Form submitted:', { name, email, message });
    // Show styled alert using Tailwind classes
    const alertDiv = document.createElement('div');
    alertDiv.innerText = 'សារបានផ្ញើរួចរាល់!';
    alertDiv.className = `
      fixed top-8 left-1/2 -translate-x-1/2
      px-8 py-4 rounded-0xl shadow-2xl font-bold text-lg z-[9999]
      transition-opacity duration-300
      ${darkMode
        ? 'bg-gray-900 text-white border border-gray-700'
        : 'bg-white text-black border border-gray-200'
      }
    `;
    document.body.appendChild(alertDiv);
    setTimeout(() => {
      alertDiv.style.opacity = '0';
      setTimeout(() => document.body.removeChild(alertDiv), 300);
    }, 2000);

    // Clear form
    (document.getElementById('name') as HTMLInputElement).value = '';
    (document.getElementById('email') as HTMLInputElement).value = '';
    (document.getElementById('message') as HTMLTextAreaElement).value = '';
  };

  // Animation refs for sections
  const [aboutRef, aboutInView] = useInView();
  const [techRef, techInView] = useInView();
  const [expRef, expInView] = useInView();
  const [skillsRef, skillsInView] = useInView();
  const [nonTechRef, nonTechInView] = useInView();
  const [projectsRef, projectsInView] = useInView();
  const [certRef, certInView] = useInView();
  const [contactRef, contactInView] = useInView();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white">

        {/* Modern Dock-Style Navigation (Glassmorphism + Liquid Effect) */}
        <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[85vw] max-w-3xl">
          <div className="relative">
            {/* Liquid/Glass background blobs */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-200/40 dark:bg-blue-900/30 rounded-full blur-2xl opacity-60 pointer-events-none animate-pulse" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-200/40 dark:bg-green-900/30 rounded-full blur-2xl opacity-60 pointer-events-none animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[120%] bg-white/30 dark:bg-gray-900/30 rounded-3xl blur-3xl opacity-40 pointer-events-none" />
            <div
              className="flex items-center justify-between px-4 py-2 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 relative overflow-hidden"
              style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(200,230,255,0.45) 100%)',
          backdropFilter: 'blur(32px) saturate(180%)',
          WebkitBackdropFilter: 'blur(32px) saturate(180%)',
          boxShadow:
            '0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 1.5px 8px 0 rgba(0,0,0,0.06)',
          ...(darkMode && {
            background:
              'linear-gradient(135deg, rgba(30,41,59,0.85) 0%, rgba(17,24,39,0.85) 100%)',
            borderColor: 'rgba(51,65,85,0.6)',
          }),
              }}
            >
              {/* Logo */}
              <div className="flex items-center gap-2">
          <span className="text-2xl text-green-600 dark:text-green-400 hidden sm:inline">
            <SiProbot />
          </span>
          <span className="font-bold text-lg text-gray-900 dark:text-white tracking-wide"></span>
              </div>
              {/* Dock Navigation */}
              <div className="flex items-center gap-0.15 ">
          {[
            { id: 'hero', kh: '', en: 'Home', icon: <FiHome className="w-5 h-5" /> },
            { id: 'about', kh: '', en: 'About', icon: <SlGraduation className="w-5 h-5" /> },
            { id: 'skills', kh: '', en: 'Experties', icon: <BinaryIcon className="w-5 h-5" /> },
            { id: 'projects', kh: '', en: 'Projects', icon: <FolderCheckIcon className="w-5 h-5" /> },
            { id: 'contact', kh: '', en: 'Contact', icon: <Mail className="w-5 h-5" /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative flex flex-col items-center justify-center px-3 py-2 rounded-xl transition group"
            >
              {/* Icon always visible */}
              <span>{item.icon}</span>
              {/* Label: hidden by default, show on hover above icon */}
              <span className="
        absolute left-1/2 -translate-x-1/2 -top-8
        bg-white dark:bg-gray-900 text-gray-900 dark:text-white
        text-xs font-semibold px-3 py-1 rounded-xl shadow-lg
        opacity-0 pointer-events-none
        group-hover:opacity-100 group-hover:pointer-events-auto
        transition-all duration-200
        z-50
      ">
                {lang === 'kh' ? item.kh : item.en}
              </span>
            </button>
          ))}
              </div>
              {/* Dock Actions */}
              <div className="flex items-center gap-1">
          {/* Language Toggle */}
            <button
            onClick={() => setLang(lang === 'kh' ? 'en' : 'kh')}
            className="flex items-center px-2 py-1 rounded-xl transition "
            aria-label="Change Language"
            title="Change Language"
            >
            {lang === 'kh' ? (
              <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/gb.svg" alt="EN" className="w-6 h-6 " />
            ) : (
              <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/kh.svg" alt="KH" className="w-6 h-6 " />
            )}
            </button>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center px-1 py-1 rounded-xl hover:bg-blue-100/80 dark:hover:bg-blue-900/80 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-blue-500" />}
          </button>
              </div>
            </div>
            {/* Extra glass shine overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-1/2 h-1/3 bg-white/30 dark:bg-white/10 blur-lg opacity-40 rotate-6" />
              <div className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-blue-200/20 dark:bg-blue-900/10 blur-lg opacity-30 -rotate-12" />
            </div>
          </div>
        </nav>


        {/* Hero Section - Modern Portfolio Style */}
        <section
          id="hero"
          className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-20 pb-10"
        >
          <div className="absolute inset-0 pointer-events-none">
            {/* Decorative Blobs */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-[3rem] blur-3xl opacity-40"></div>
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-green-200 dark:bg-green-900 rounded-[3rem] blur-3xl opacity-40"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <div className="w-full lg:w-2/3 text-center lg:text-left">
          <div className="inline-block px-4 py-2 mb-4 rounded-[1.5rem] bg-gradient-to-r from-blue-100 via-green-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-sm font-medium text-gray-700 dark:text-gray-200 tracking-wide">
            {lang === 'kh'
              ? <>👋 សួស្តី ខ្ញុំឈ្មោះ <span className="ml-2 font-bold text-blue-700 dark:text-blue-400">បួយ សាភិត</span></>
              : <>👋 Hi, I'm <span className="ml-2 font-bold text-blue-700 dark:text-blue-400">Buoy Sophit</span></>
            }
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
            <span className="block">
              {lang === 'kh'
                ? 'និស្សិតវិទ្យាសាស្ត្រកុំព្យូទ័រ'
                : 'Computer Science Student'}
            </span>
            <span className="block mt-2">
              <span className="inline-block bg-gradient-to-r from-blue-600 via-green-500 to-teal-400 bg-clip-text text-transparent">
                {
            (() => {
              const words = lang === 'kh'
                ? [
              { text: "អ្នកអភិវឌ្ឍវេបសាយ", color: "text-green-600 dark:text-green-400" },
              { text: "អ្នកអភិវឌ្ឍកម្មវិធីទូរស័ព្ទ", color: "text-purple-600 dark:text-purple-400" },
              { text: "ជំនាញ IT Support", color: "text-yellow-600 dark:text-yellow-400" },
                  ]
                : [
              { text: "Web Developer", color: "text-green-600 dark:text-green-400" },
              { text: "Mobile App Developer", color: "text-purple-600 dark:text-purple-400" },
              { text: "IT Support", color: "text-yellow-600 dark:text-yellow-400" },
                  ];
              const [index, setIndex] = React.useState(0);
              React.useEffect(() => {
                const interval = setInterval(() => {
                  setIndex(i => (i + 1) % words.length);
                }, 2500);
                return () => clearInterval(interval);
              }, [lang]);
              return (
                <span className={words[index].color + " transition-colors duration-500"}>
                  {words[index].text}
                </span>
              );
            })()
                }
              </span>
            </span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
            {lang === 'kh'
              ? <>ចូលចិត្តបច្ចេកវិទ្យា <span className="font-semibold text-blue-600 dark:text-blue-400">បច្ចេកវិទ្យា</span> <span className="font-semibold text-green-600 dark:text-green-400">ការអភិវឌ្ឍកម្មវិធី</span> និង <span className="font-semibold text-purple-600 dark:text-purple-400">ដោះស្រាយបញ្ហា</span>។ មានបទពិសោធន៍ក្នុងការបង្កើតវេបសាយ កម្មវិធីទូរស័ព្ទ និងដេសក្តុប។</>
              : <>Passionate about <span className="font-semibold text-blue-600 dark:text-blue-400">technology</span>, <span className="font-semibold text-green-600 dark:text-green-400">software development</span>, and <span className="font-semibold text-purple-600 dark:text-purple-400">problem solving</span>. Experienced in building web, mobile, and desktop solutions.</>
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white dark:from-white dark:via-gray-200 dark:to-gray-300 dark:text-black font-semibold rounded-[1.5rem] shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              {lang === 'kh' ? 'អំពីខ្ញុំបន្ថែម' : 'Learn More'}
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <a
              href="/assets/pdf/Buoysophit-CV-2025.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-400 text-white dark:from-green-400 dark:to-teal-300 dark:text-black font-semibold rounded-[1.5rem] shadow-lg hover:scale-105 transition-all duration-300"
            >
              {lang === 'kh' ? 'ទាញយកប្រវត្តិរូប (PDF)' : 'Download CV (PDF)'}
            </a>
          </div>
          <div className="flex gap-4 mt-8 justify-center lg:justify-start">
            <a href="https://github.com/buoysophit" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-[1rem] bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/buoy-sophit-06111a2b4/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-[1rem] bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:buoysophit11@gmail.com" className="w-12 h-12 rounded-[1rem] bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://t.me/buoysophitt" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-[1rem] bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg" alt="Telegram" className="h-6 w-6" style={{ filter: "invert(1)" }} />
            </a>
          </div>
              </div>
              {/* Image */}
              <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mb-8 lg:mb-0">
          <div className="relative group">
            <div className="rounded-[0rem] overflow-hidden shadow-2xl bg-white dark:bg-gray-900 transition-all duration-300 hover:scale-105">
              <img
                src="/assets/profile.jpg"
                alt="Buoy Sophit"
                className="w-[25rem] h-[30rem] md:w-[30rem] md:h-[30rem] object-cover rounded-[0rem]"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-2 rounded-[3rem] pointer-events-none"></div>
          </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          ref={aboutRef}
          className={`py-24 bg-gradient-to-br from-white via-blue-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700
            ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Profile & Bio */}
              <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white">
            <span className="inline-block bg-gradient-to-r from-blue-600 via-green-500 to-teal-400 bg-clip-text text-transparent">
              {lang === 'kh' ? 'អំពីខ្ញុំ' : 'About Me'}
            </span>
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
            {lang === 'kh' ? (
              <>
                <span className="font-semibold text-blue-600 dark:text-blue-400">បួយ សាភិត (Buoy Sophit)</span>
                ជានិស្សិតបរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ នៅសាកលវិទ្យាល័យភ្នំពេញ។ មានចំណង់ចំណូលចិត្តផ្នែក <span className="font-semibold text-green-600 dark:text-green-400">IT, ការអភិវឌ្ឍកម្មវិធី និងបណ្តាញ</span>។ មានបទពិសោធន៍គម្រោងសាលា និងការអនុវត្តការងារពាក់ព័ន្ធ។
              </>
            ) : (
              <>
                <span className="font-semibold text-blue-600 dark:text-blue-400">Buoy Sophit</span>
                , a Bachelor of Computer Science student at Royal University of Phnom Penh. Passionate about <span className="font-semibold text-green-600 dark:text-green-400">IT, software development, and networking</span>. Experienced in school projects and practical related work.
              </>
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="flex-1 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-2">
                <Globe className="inline-block w-5 h-5" /> {lang === 'kh' ? 'អាសយដ្ឋាន' : 'Address'}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-200">
                {lang === 'kh'
            ? '371 ផ្លូវ ធិក ធ្លា សែនសុខ ភ្នំពេញ កម្ពុជា'
            : '371 St. Thik Thla, Sen Sok, Phnom Penh Cambodia'}
              </p>
            </div>
            <div className="flex-1 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-1 flex items-center gap-2">
                <Phone className="inline-block w-5 h-5" /> {lang === 'kh' ? 'លេខទូរស័ព្ទ' : 'Phone'}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-200">
                088 622 4813 <span className="text-xs text-blue-500">(Telegram)</span>
              </p>
              <p className="text-base text-gray-700 dark:text-gray-200">076 429 0073</p>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <a
              href="mailto:buoysophit11@gmail.com"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700 transition"
            >
              <Mail className="w-5 h-5 mr-2" /> {lang === 'kh' ? 'អ៊ីមែល' : 'Email'}
            </a>
            <a
              href="https://t.me/buoysophitt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-teal-500 text-white rounded-xl font-semibold shadow hover:bg-teal-600 transition"
            >
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg" alt="Telegram" className="w-5 h-5 mr-2" style={{ filter: "invert(1)" }} />
              Telegram
            </a>
          </div>
              </div>
              {/* Right: Education Timeline */}
              <div>
          <div className="bg-gradient-to-br from-blue-100/80 to-green-100/80 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
              {lang === 'kh' ? 'ការអប់រំ' : 'Education'}
            </h3>
            <ol className="relative border-l-2 border-blue-200 dark:border-blue-700 ml-2">
              <li className="mb-8 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-4 ring-white dark:ring-gray-900">
            <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
            {lang === 'kh'
              ? 'បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ'
              : 'Bachelor Degree of Computer Science'}
                </h4>
                <p className="text-gray-700 dark:text-gray-200">
            {lang === 'kh'
              ? <>សាកលវិទ្យាល័យភ្នំពេញ <span className="text-xs text-gray-500">(២០២១-២០២៥)</span></>
              : <>Royal University Of Phnom Penh <span className="text-xs text-gray-500">(2021-2025)</span></>
            }
                </p>
              </li>
              <li className="mb-8 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-500 rounded-full ring-4 ring-white dark:ring-gray-900">
            <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <h4 className="text-lg font-semibold text-green-700 dark:text-green-300">
            {lang === 'kh'
              ? 'វិទ្យាល័យ ហ៊ុន សែន ថ្មពួក'
              : 'Hun Sen Thmor Pouk High School'}
                </h4>
                <p className="text-gray-700 dark:text-gray-200">
            {lang === 'kh'
              ? <>បញ្ចប់ការសិក្សា <span className="text-xs text-gray-500">(២០១៨-២០២១)</span></>
              : <>Graduated <span className="text-xs text-gray-500">(2018-2021)</span></>
            }
                </p>
              </li>
              <li className="mb-8 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-yellow-500 rounded-full ring-4 ring-white dark:ring-gray-900">
            <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <h4 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300">
            {lang === 'kh'
              ? 'វិទ្យាល័យភូមិថ្មី'
              : 'Phum Thmey Secondary School'}
                </h4>
                <p className="text-gray-700 dark:text-gray-200">
            {lang === 'kh' ? 'បញ្ចប់ការសិក្សា' : 'Graduated'}
                </p>
              </li>
              <li className="ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full ring-4 ring-white dark:ring-gray-900">
            <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300">
            {lang === 'kh'
              ? 'សាលាបឋមសិក្សា រលំជ្រៃ'
              : 'Rolom Chrey Primary School'}
                </h4>
                <p className="text-gray-700 dark:text-gray-200">
            {lang === 'kh' ? 'បញ្ចប់ការសិក្សា' : 'Graduated'}
                </p>
              </li>
            </ol>
          </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section
          id="technologies"
          ref={techRef}
          className={`py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700
            ${techInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white">
                បច្ចេកវិទ្យា <span className="text-blue-600 dark:text-blue-400">(Technologies)</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
                បច្ចេកវិទ្យាដែលខ្ញុំមានបទពិសោធន៍ និងប្រើប្រាស់សម្រាប់ការងារ និងគម្រោង។
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full max-w-3xl p-0 md:p-0">
                <IconCloudDemo />
              </div>
            </div>
          </div>
        </section>


        {/* Experience Section - Modern Portfolio Style */}
 <section
          id="experience"
          ref={expRef}
          className={`py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-all duration-700
            ${expInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white">
          OS Experience <span className="text-blue-600 dark:text-blue-400">(ប្រព័ន្ធប្រតិបត្តិការ)</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
          I have hands-on experience with multiple operating systems for development, study, and work.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch">
              {/* Windows 11 */}
              <div className="flex-1 bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center p-10 group">
          <div className="relative mb-6">
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full blur-2xl opacity-40"></div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
              alt="Windows 11"
              className="w-20 h-20 z-10 relative drop-shadow-xl"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Windows 11</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
            Used for study, software development, and office work.
          </p>
          <span className="inline-block bg-blue-600/10 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
            Main OS
          </span>
              </div>
              {/* Arch Linux */}
              <div className="flex-1 bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center p-10 group">
          <div className="relative mb-6">
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-full blur-2xl opacity-40"></div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg"
              alt="Arch Linux"
              className="w-20 h-20 z-10 relative drop-shadow-xl"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Arch Linux</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
            Used for CLI, server, and advanced development tasks.
          </p>
          <span className="inline-block bg-cyan-600/10 text-cyan-700 dark:text-cyan-300 px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
            Custom Setup
          </span>
              </div>
              {/* Ubuntu */}
              <div className="flex-1 bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center p-10 group">
          <div className="relative mb-6">
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full blur-2xl opacity-40"></div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
              alt="Ubuntu"
              className="w-20 h-20 z-10 relative drop-shadow-xl"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Ubuntu</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
            Used for server, DevOps, and additional development.
          </p>
          <span className="inline-block bg-orange-600/10 text-orange-700 dark:text-orange-300 px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
            Server/DevOps
          </span>
              </div>
            </div>
          </div>
        </section>


        {/* Skills Section */}
        <section
          id="skills"
          ref={skillsRef}
          className={`py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700
            ${skillsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white">
                Skills & Expertise
              </h2>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
                My core technical skills and professional strengths.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Programming & Development */}
              <div className="relative bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center p-10 group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-200 dark:bg-blue-900 rounded-full blur-2xl opacity-40"></div>
                <div className="mb-6 z-10">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500 via-green-400 to-teal-400 text-white text-3xl shadow-lg">
                    💻
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Web & App Development</h3>
                <ul className="w-full space-y-4">
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-200">HTML/CSS/JS</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-green-400 h-2 rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-200">ReactJS, Flutter</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-400 h-2 rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-200">PHP, Laravel</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">50%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-pink-400 h-2 rounded-full transition-all duration-500" style={{ width: '50%' }}></div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Database & Languages */}
              <div className="relative bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center p-10 group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-purple-200 dark:bg-purple-900 rounded-full blur-2xl opacity-40"></div>
                <div className="mb-6 z-10">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-400 to-yellow-400 text-white text-3xl shadow-lg">
                    🗄️
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Database & Languages</h3>
                <ul className="w-full space-y-4">
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-200">MySQL, PostgreSQL</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">50%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-yellow-400 h-2 rounded-full transition-all duration-500" style={{ width: '50%' }}></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-200">English</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">50%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-400 h-2 rounded-full transition-all duration-500" style={{ width: '50%' }}></div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* IT Support */}
              <div className="relative bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center p-10 group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-green-200 dark:bg-green-900 rounded-full blur-2xl opacity-40"></div>
                <div className="mb-6 z-10">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-green-500 via-teal-400 to-blue-400 text-white text-3xl shadow-lg">
                    🛠️
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">IT Support</h3>
                <ul className="w-full space-y-4">
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-200">Install Hardware</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-400 h-2 rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-200">Install Software</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-teal-400 h-2 rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-200">Repair PC & Laptop</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-400 h-2 rounded-full transition-all duration-500" style={{ width: '80%' }}></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-200">Install OS</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-teal-400 h-2 rounded-full transition-all duration-500" style={{ width: '95%' }}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Non-Technical Skills Section */}
        <section
          id="non-technical-skills"
          ref={nonTechRef}
          className={`py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700
      ${nonTechInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white">
                ជំនាញមិនមែនបច្ចេកទេស <span className="text-blue-600 dark:text-blue-400">(Non-Technical Skills)</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Canva */}
              <div className="flex flex-col items-center group">
                <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img src="/assets/canva.webp" alt="Canva" className="w-20 h-20 object-contain drop-shadow-lg" />
                  <span className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full shadow">Design</span>
                </div>
                <span className="font-semibold text-lg mt-2 text-gray-800 dark:text-gray-100 tracking-wide">Canva</span>
              </div>
              {/* CapCut */}
              <div className="flex flex-col items-center group">
                <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-tr from-gray-100 via-white to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img src="/assets/capcut.jpg" alt="CapCut" className="w-20 h-20 object-contain drop-shadow-lg" />
                  <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-0.5 rounded-full shadow">Video</span>
                </div>
                <span className="font-semibold text-lg mt-2 text-gray-800 dark:text-gray-100 tracking-wide">CapCut</span>
              </div>
              {/* Microsoft Office */}
              <div className="flex flex-col items-center group">
                <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-tr from-orange-100 via-white to-yellow-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img src="/assets/office.webp" alt="Microsoft Office" className="w-20 h-20 object-contain drop-shadow-lg" />
                  <span className="absolute bottom-2 right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full shadow">Docs</span>
                </div>
                <span className="font-semibold text-lg mt-2 text-gray-800 dark:text-gray-100 tracking-wide">Microsoft Office</span>
              </div>
              {/* Linux Ricing */}
              <div className="flex flex-col items-center group">
                <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-tr from-gray-200 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux Ricing" className="w-20 h-20 object-contain drop-shadow-lg" />
                  <span className="absolute bottom-2 right-2 bg-gray-700 text-white text-xs px-2 py-0.5 rounded-full shadow">Tweak</span>
                </div>
                <span className="font-semibold text-lg mt-2 text-gray-800 dark:text-gray-100 tracking-wide">Linux Ricing</span>
              </div>
            </div>
          </div>
        </section>




        {/* Projects Section */}
        <section
          id="projects"
          ref={projectsRef}
          className={`py-20 bg-white dark:bg-gray-900 transition-all duration-700
            ${projectsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Recent Projects School</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">គម្រោងសំខាន់ៗដែលបានធ្វើក្នុងសាលា</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Project 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 flex flex-col overflow-hidden">
                <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
                  <img
                    src="/assets/imgpro/ecomp1.jpg"
                    alt="Ecommerce HTML CSS JS PHP"
                    className="h-40 w-auto rounded-xl shadow-lg object-cover border-4 border-white dark:border-gray-900"
                  />
                  <span className="absolute top-4 right-4 bg-white/80 dark:bg-gray-900/80 text-xs px-3 py-1 rounded-full font-semibold text-blue-700 dark:text-blue-300 shadow">Web</span>
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Html CSS Javascript With PHP-Ecommerce</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    Ecommerce សម្រាប់ហាងលក់ទំនិញប្រើ HTML, CSS, JS និង PHP។
                  </p>
                  <div className="flex-1 flex items-end">
                    <div className="w-full">
                      <div className="flex justify-center mb-6">
                        <AndroidDemo />
                      </div>
                      <a
                        href="https://github.com/buoysophit/nitastore.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white dark:bg-blue-500 dark:text-white rounded-xl font-semibold transition-all duration-200 hover:bg-blue-700 dark:hover:bg-blue-600 shadow"
                      >
                        View on GitHub
                        <Github className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 flex flex-col overflow-hidden">
                <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600">
                  <img
                    src="/assets/imgpro/ecomp2.jpg"
                    alt="Lravel API With ReactJS - Ecommerce"
                    className="h-40 w-auto rounded-xl shadow-lg object-cover border-4 border-white dark:border-gray-900"
                  />
                  <span className="absolute top-4 right-4 bg-white/80 dark:bg-gray-900/80 text-xs px-3 py-1 rounded-full font-semibold text-green-700 dark:text-green-300 shadow">API</span>
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Laravel API With ReactJS - Ecommerce</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    គម្រោង API និង Frontend ReactJS សម្រាប់ប្រព័ន្ធលក់ទំនិញ។
                  </p>
                  <div className="flex-1 flex items-end">
                    <div className="w-full">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-green-600 text-white dark:bg-green-500 dark:text-white rounded-xl font-semibold transition-all duration-200 hover:bg-green-700 dark:hover:bg-green-600 shadow cursor-not-allowed opacity-60"
                        tabIndex={-1}
                        aria-disabled="true"
                      >
                        Private Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 flex flex-col overflow-hidden">
                <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600">
                  <img
                    src="/assets/imgpro/flutter.webp"
                    alt="Lravel API With Flutter - Ecommerce"
                    className="h-40 w-auto rounded-xl shadow-lg object-cover border-4 border-white dark:border-gray-900"
                  />
                  <span className="absolute top-4 right-4 bg-white/80 dark:bg-gray-900/80 text-xs px-3 py-1 rounded-full font-semibold text-purple-700 dark:text-purple-300 shadow">Mobile</span>
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Laravel API With Flutter - Ecommerce App</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    គម្រោងអភិវឌ្ឍកម្មវិធីទូរស័ព្ទប្រើ Flutter និង Laravel API។
                  </p>
                  <div className="flex-1 flex items-end">
                    <div className="w-full">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-purple-600 text-white dark:bg-purple-500 dark:text-white rounded-xl font-semibold transition-all duration-200 hover:bg-purple-700 dark:hover:bg-purple-600 shadow cursor-not-allowed opacity-60"
                        tabIndex={-1}
                        aria-disabled="true"
                      >
                        Private Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 flex flex-col overflow-hidden">
                <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600">
                  <img
                    src="/assets/imgpro/inven.png"
                    alt="Inventory Management System"
                    className="h-40 w-auto rounded-xl shadow-lg object-cover border-4 border-white dark:border-gray-900"
                  />
                  <span className="absolute top-4 right-4 bg-white/80 dark:bg-gray-900/80 text-xs px-3 py-1 rounded-full font-semibold text-yellow-700 dark:text-yellow-300 shadow">Desktop</span>
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Inventory Management System (C#)</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    គម្រោងប្រព័ន្ធគ្រប់គ្រង Inventory C# និង MySQLសម្រាប់គ្រប់គ្រងទំនិញ។
                  </p>
                  <div className="flex-1 flex items-end">
                    <div className="w-full">
                      <a
                        href="https://github.com/buoysophit/Inventory-Management-System.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-yellow-500 text-white dark:bg-yellow-400 dark:text-black rounded-xl font-semibold transition-all duration-200 hover:bg-yellow-600 dark:hover:bg-yellow-500 shadow"
                      >
                        View on GitHub
                        <Github className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>





        {/* Certificate Section */}
        <section
          id="certificates"
          ref={certRef}
          className={`py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700
            ${certInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white uppercase">
          Certificates
              </h2>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
          សញ្ញាបត្រដែលខ្ញុំទទួលបាន (My Achievements & Certifications)
              </p>
            </div>
            {/* Modern Auto Slider */}
            <div className="relative">
              <div className="overflow-hidden rounded-0xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70">
          <div
            className="flex gap-1 animate-scroll-x"
            style={{
              animation: 'scroll-x 40s linear infinite',
            }}
          >
            {/* Certificate Images - duplicated for seamless loop */}
            {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map((num, idx) => (
              <div
          key={idx}
          className="flex flex-col items-center justify-center min-w-[22rem] px-4 py-6 rounded-0xl"
              >
          <div className="relative group">
            <img
              src={`/assets/certificate/${num}.png`}
              alt={`Certificate ${num}`}
              className="h-80 w-auto rounded-0xl shadow-lg border-2 border-gray-100 dark:border-gray-800 bg-white object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-0xl ring-2 ring-blue-400/10 group-hover:ring-blue-500/30 transition"></div>
          </div>
          {/* Optional: Add a label or badge */}
          <span className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-200 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-0 shadow">
            Certificate #{num}
          </span>
              </div>
            ))}
          </div>
          <style>
            {`
              @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
              }
              .animate-scroll-x {
          width: max-content;
              }
            `}
          </style>
              </div>
              {/* Gradient overlays for slider edges */}
              <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white/90 dark:from-gray-900/90 to-transparent z-10" />
              <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white/90 dark:from-gray-900/90 to-transparent z-10" />
            </div>
          </div>
        </section>





        {/* Contact Section */}
        <section
          id="contact"
          ref={contactRef}
          className={`py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700
            ${contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white">
                ទំនាក់ទំនង <span className="text-blue-600 dark:text-blue-400">(Contact)</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
                ចង់ធ្វើការជាមួយខ្ញុំ? សូមទាក់ទងមកខ្ញុំ!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Modern Contact Form */}
              <div className="relative bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl p-10 overflow-hidden">
                {/* Decorative Blobs */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-200 dark:bg-green-900 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
                <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" /> ផ្ញើសារមកខ្ញុំ
                </h3>
                <form
                  className="space-y-6"
                  onSubmit={e => {
                    e.preventDefault();
                    handleFormSubmit();
                  }}
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                      ឈ្មោះ
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                      placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                      អ៊ីមែល
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                      placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                      សារ
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                      placeholder="បញ្ចូលសាររបស់អ្នក"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-green-400 text-white dark:from-blue-400 dark:to-green-300 dark:text-black font-semibold py-3 px-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <span>ផ្ញើសារ</span>
                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                    </svg>
                  </button>
                </form>
              </div>
              {/* Contact Info Modern Card */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-100/80 to-green-100/80 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                    <Phone className="w-5 h-5 text-green-600 dark:text-green-400" /> ព័ត៌មានទំនាក់ទំនង
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-100">អ៊ីមែល</p>
                        <p className="text-gray-600 dark:text-gray-300">buoysophit11@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                        <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-100">លេខទូរស័ព្ទ</p>
                        <p className="text-gray-600 dark:text-gray-300">+855 886224813</p>
                        <p className="text-gray-600 dark:text-gray-300">+855 764290073</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">តាមដានខ្ញុំ</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/buoysophit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/buoy-sophit-06111a2b4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href="https://t.me/buoysophitt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                      aria-label="Telegram"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg"
                        alt="Telegram"
                        className="h-6 w-6"
                        style={{ filter: darkMode ? 'invert(1)' : 'none' }}
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/@phitterparker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                      aria-label="YouTube"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
                        alt="YouTube"
                        className="h-6 w-6"
                        style={{ filter: darkMode ? 'invert(1)' : 'none' }}
                      />
                    </a>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">អាចរកឃើញខ្ញុំបាន</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    នៅទីក្រុងភ្នំពេញ។ សម្រាប់ការងារ និងការគាំទ្រពីចម្ងាយ ខ្ញុំនៅអាចជួយបាន។
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Footer */}
        {/* Modern Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-14 mt-16 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              {/* Left: Logo & Tagline */}
              <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl text-green-400">
              <SiProbot />
            </span>
            <span className="font-extrabold text-2xl tracking-tight text-white">Buoy Sophit</span>
          </div>
          <span className="text-gray-400 text-base font-medium">Computer Science & Engineering</span>
              </div>
              {/* Center: Quick Links */}
              <div className="flex flex-wrap gap-6 justify-center text-gray-300 font-medium text-base">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#certificates" className="hover:text-blue-400 transition">Certificates</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
              </div>
              {/* Right: Socials */}
              <div className="flex gap-4">
          <a
            href="https://github.com/buoysophit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors shadow"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/buoy-sophit-06111a2b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors shadow"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:buoysophit11@gmail.com"
            className="w-11 h-11 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors shadow"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://t.me/buoysophitt"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors shadow"
            aria-label="Telegram"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg"
              alt="Telegram"
              className="h-5 w-5"
              style={{ filter: "invert(1)" }}
            />
          </a>
          <a
            href="https://www.youtube.com/@phitterparker"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors shadow"
            aria-label="YouTube"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
              alt="YouTube"
              className="h-5 w-5"
              style={{ filter: "invert(1)" }}
            />
          </a>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-10 pt-8 text-center">
              <p className="text-gray-500 text-sm">
          &copy; រក្សាសិទ្ធិ ២០២៥ Buoy Sophit. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

 
      </div>
    </div>
  );
};

export default Portfolio;
