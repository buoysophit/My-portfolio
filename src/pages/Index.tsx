import React, { useState, useEffect } from 'react';
import { Sun, Moon, Mail, Phone, Github, Linkedin, ArrowUp, ChevronDown, Menu, X, Globe } from 'lucide-react';
import { SiProbot } from "react-icons/si";
import { IconCloudDemo } from "@/components/technology/technologyicon";



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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0 flex items-center space-x-2">
                {/* Logo */}
                <span className="text-2xl text-green-600 dark:text-green-400">
                <SiProbot />
                </span>
                <h1 className="text-xl font-bold text-white-600 dark:text-white-400">BUOYSOPHIT</h1>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <button onClick={() => scrollToSection('hero')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{lang === 'kh' ? 'ទំព័រដើម' : 'Home'}</button>
                  <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{lang === 'kh' ? 'អំពីខ្ញុំ' : 'About'}</button>
                  <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{lang === 'kh' ? 'ជំនាញ' : 'Experties'}</button>
                  <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{lang === 'kh' ? 'គម្រោង' : 'Projects'}</button>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{lang === 'kh' ? 'ទំនាក់ទំនង' : 'Contact'}</button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* Language Toggle */}
                <button
                  onClick={() => setLang(lang === 'kh' ? 'en' : 'kh')}
                  className="p-2 rounded-0xl transition-all duration-300 flex items-center space-x-2 hover:scale-110"
                  aria-label="Change Language"
                  title="Change Language"
                >
                  {lang === 'kh' ? (
                    <>
                      <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/gb.svg" alt="English" className="w-10 h-5 mr-1 rounded-0" />
                      <span>EN</span>
                    </>
                  ) : (
                    <>
                      <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/kh.svg" alt="Khmer" className="w-10 h-5 mr-1 rounded-0" />
                      <span>KH</span>
                    </>
                  )}
                </button>
                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-0xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                  aria-label="ប្តូររបៀបពន្លឺ/ងងឹត"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-0xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    {isMenuOpen ? <X className="h-5 w-5 mx-auto" /> : <Menu className="h-5 w-5 mx-auto" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="flex flex-col items-center"></div>
                  <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 rounded-0xl text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-center">{lang === 'kh' ? 'ទំព័រដើម' : 'Home'}</button>
                  <button onClick={() => scrollToSection('about')} className="block px-3 py-2 rounded-0xl text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-center">{lang === 'kh' ? 'អំពីខ្ញុំ' : 'About'}</button>
                  <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 rounded-0xl text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-center">{lang === 'kh' ? 'ជំនាញ' : 'Experties'}</button>
                  <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 rounded-0xl text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-center">{lang === 'kh' ? 'គម្រោង' : 'Projects'}</button>
                  <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 rounded-0xl text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-center">{lang === 'kh' ? 'ទំនាក់ទំនង' : 'Contact'}</button>
                </div>
                
              </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 pt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
              {/* Text Content */}
              <div className="w-full lg:w-2/3 text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-white">
                  <br />
                  សួស្តីខ្ញុំជា
                  <span className="ml-2 transition-colors duration-500">
                    {
                      (() => {
                        const words = [
                          { text: "សិស្សវិទ្យាសាស្ត្រកុំព្យូទ័រ", color: "text-blue-600 dark:text-blue-400" },
                          { text: "Web Developer", color: "text-green-600 dark:text-green-400" },
                          { text: "Mobile Application Developer", color: "text-purple-600 dark:text-purple-400" },
                          { text: "IT Support", color: "text-yellow-600 dark:text-yellow-400" },
                        ];
                        const [index, setIndex] = React.useState(0);
                        React.useEffect(() => {
                          const interval = setInterval(() => {
                            setIndex(i => (i + 1) % words.length);
                          }, 3000);
                          return () => clearInterval(interval);
                        }, []);
                        return (
                          <span className={words[index].color}>
                            {words[index].text}
                          </span>
                        );
                      })()
                    }
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
                  ខ្ញុំជានិស្សិតបរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ នៅសាកលវិទ្យាល័យភ្នំពេញ។ មានចំណង់ចំណូលចិត្តផ្នែក IT Teachnology Sport Game​ ការអភិវឌ្ឍកម្មវិធី និងបណ្តាញ។ មានបទពិសោធន៍គម្រោងសាលា និងការអនុវត្តការងារពាក់ព័ន្ធ computer science។
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                  onClick={() => scrollToSection('about')}
                  className="inline-flex items-center px-8 py-4 
                  bg-black text-white 
                  dark:bg-white dark:text-black
                  hover:bg-gray-900 hover:text-white
                  dark:hover:bg-gray-200 dark:hover:text-black
                  font-semibold rounded-0xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                  ស្វែងយល់បន្ថែម
                  <ChevronDown className="ml-2 h-5 w-5" />
                  </button>

                    <a
                      href="/assets/pdf/Buoysophit-CV-2025.pdf"
                      download
                      className="inline-flex items-center px-8 py-4 
                        bg-green-600 text-white 
                        dark:bg-green-400 dark:text-black
                        hover:bg-green-700 hover:text-white
                        dark:hover:bg-green-500 dark:hover:text-black
                        font-semibold rounded-0xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      ទាញយកប្រវិត្តិរូប PDF
                    </a>
                 
                </div>
              </div>
              {/* Image */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mb-8 lg:mb-0">
              <div className="relative group">
                <img
                  src="/assets/profile-pixel.jpg"
                  alt="Buoy Sophit"
                  className="w-100 h-100 lg:w-[35rem] lg:h-[35rem] rounded-[0rem] object-cover border-4 border-white-500 shadow-2xl bg-white transition-all duration-300 group-hover:opacity-0"
                />
                <img
                  src="/assets/profile.jpg"
                  alt="Buoy Sophit"
                  className="w-100 h-100 lg:w-[35rem] lg:h-[35rem] rounded-[0rem] object-cover border-4 border-white-500 shadow-2xl bg-white transition-all duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">អំពីខ្ញុំ</h2>
                <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                  ខ្ញុំឈ្មោះ បួយ សាភិត (Buoy Sophit) ជានិស្សិតបរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ នៅសាកលវិទ្យាល័យភ្នំពេញ។ មានចំណង់ចំណូលចិត្តផ្នែក IT, ការអភិវឌ្ឍកម្មវិធី និងបណ្តាញ។ មានបទពិសោធន៍គម្រោងសាលា និងការអនុវត្តការងារពាក់ព័ន្ធ。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-0xl">
                    <h3 className="font-semibold text-blue-600 dark:text-blue-400">អាសយដ្ឋាន</h3>
                    <p className="text-base">371 St. Thik Thla, Sen Sok, Phnom Penh Cambodia</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-0xl">
                    <h3 className="font-semibold text-green-600 dark:text-green-400">លេខទូរស័ព្ទ</h3>
                    <p className="text-base">088 622 4813 Telegram</p>
                    <p className="text-base">076 429 0073</p>
                  </div>
                </div>
              </div>
                <div className="bg-gradient-to-br from-blue-100 to-green-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-0xl">
                <h3 className="text-xl font-semibold mb-4">ការអប់រំ</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  Bachelor Degree of Computer Science at Royal University Of Phnom Penh (2021-2025)
                  </li>
                  <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  Graduated at Hun Sen Thmor Pouk High School (2018-2021)
                  </li>
                  <li className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  Graduated at Phum Thmey Secondary School
                  </li>
                  <li className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  Graduated at Rolom Chrey Primary School
                  </li>
                </ul>
                </div>
            </div>
          </div>
        </section>

<section id="technologies" className="py-20 bg-gray-50 dark:bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">បច្ចេកវិទ្យា (Technologies)</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">បច្ចេកវិទ្យាដែលខ្ញុំមានបទពិសោធន៍</p>
    </div>
    <div className="mb-12 flex justify-center">
      <IconCloudDemo />
    </div>
    {/* ...your existing grid of icons... */}
  </div>
</section>


        {/* Experience Section */}
        <section id="experience" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">បទពិសោធន៍ប្រើប្រព័ន្ធប្រតិបត្តិការ (OS Experience)</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                ប្រើប្រាស់ប្រព័ន្ធប្រតិបត្តិការផ្សេងៗសម្រាប់ការសិក្សា និងការងារ
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {/* Windows 11 */}
              <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 p-8 rounded-0xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="Windows 11" className="w-20 h-20 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Windows 11</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  បទពិសោធន៍ប្រើប្រាស់សម្រាប់ការសិក្សា ការអភិវឌ្ឍកម្មវិធី និងការងារការិយាល័យ។
                </p>
              </div>
              {/* Arch Linux */}
              <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 p-8 rounded-0xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg" alt="Arch Linux" className="w-20 h-20 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Arch Linux</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  ប្រើសម្រាប់ការសិក្សា Command Line, Server, និងការអភិវឌ្ឍកម្មវិធី។
                </p>
              </div>
              {/* Ubuntu */}
              <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 p-8 rounded-0xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" alt="Ubuntu" className="w-20 h-20 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ubuntu</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  ប្រើសម្រាប់ការសិក្សា Server, DevOps និងការអភិវឌ្ឍកម្មវិធីបន្ថែម។
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">What Can I Do?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Programming Skills */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-0xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">💻</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">ការសរសេរកម្មវិធី</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span>HTML/CSS/JS</span>
                <span>60%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>PHP, Laravel</span>
                <span>50%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '50%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>ReactJS, Flutter</span>
                <span>60%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '50%'}}></div>
              </div>
            </div>
          </div>
              </div>

              {/* Other Skills */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-0xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">🗄️</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">ឧបករណ៍ និងភាសា</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span>MySQL, PostgreSQL</span>
                <span>50%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{width: '50%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>English</span>
                <span>50%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{width: '50%'}}></div>
              </div>
            </div>
          </div>
              </div>

              {/* IT Support Skills */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-0xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">🛠️</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">IT Support</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span>Install Hardware</span>
                <span>9០%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Install Software</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Repair PC & Laptop</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
              </div>
            </div>
             <div>
              <div className="flex justify-between mb-1">
                <span>Install OS</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-0 h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '95%'}}></div>
              </div>
            </div>
          </div>
              </div>
            </div>
          </div>
        </section>

    {/* Non-Technical Skills Section */}
    <section id="non-technical-skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">ជំនាញមិនមែនបច្ចេកទេស (Non-Technical Skills)</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
        {/* Canva */}
        <div className="flex flex-col items-center group">
        <div className="w-32 h-32 bg-blue-50 dark:bg-gray-800 rounded-0xl shadow-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <img src="/assets/canva.webp" alt="Canva" className="w-20 h-20" />
        </div>
        <span className="font-semibold text-lg">Canva</span>
        </div>
        {/* CapCut */}
        <div className="flex flex-col items-center group">
        <div className="w-32 h-32 bg-blue-50 dark:bg-gray-800 rounded-0xl shadow-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <img src="/assets/capcut.jpg" alt="CapCut" className="w-20 h-20" />
        </div>
        <span className="font-semibold text-lg">CapCut</span>
        </div>
        {/* Microsoft Office */}
        <div className="flex flex-col items-center group">
        <div className="w-32 h-32 bg-blue-50 dark:bg-gray-800 rounded-0xl shadow-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <img src="/assets/office.webp" alt="Microsoft Office" className="w-20 h-20" />
        </div>
        <span className="font-semibold text-lg">Microsoft Office</span>
        </div>
        {/* Linux Ricing */}
        <div className="flex flex-col items-center group">
        <div className="w-32 h-32 bg-blue-50 dark:bg-gray-800 rounded-0xl shadow-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux Ricing" className="w-20 h-20" />
        </div>
        <span className="font-semibold text-lg">Linux Ricing</span>
        </div>
      </div>
      </div>
    </section>

  
        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Recent Projects School</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">គម្រោងសំខាន់ៗដែលបានធ្វើក្នុងសាលា</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-0xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-6xl">🛒</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Html CSS Javascript With PHP-Ecommerce</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    គម្រោងអ៊ី-ខមមើសសម្រាប់ហាងលក់ទំនិញប្រើ HTML, CSS, JS និង PHP។
                  </p>
                </div>
              </div>
              {/* Project 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-0xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-white text-6xl">📦</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Laravel API With ReactJS - Ecommerce</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    គម្រោង API និង Frontend ReactJS សម្រាប់ប្រព័ន្ធលក់ទំនិញ។
                  </p>
                </div>
              </div>
              {/* Project 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-0xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-6xl">📱</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Laravel API With Flutter - Ecommerce App</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    គម្រោងអភិវឌ្ឍកម្មវិធីទូរស័ព្ទប្រើ Flutter និង Laravel API។
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* Certificate Section */}
<section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Certificates</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">Certificateដែលខ្ញុំទទួលបាន</p>
    </div>
    {/* Auto Slider */}
    <div className="relative overflow-hidden">
      <div
      className="flex gap-4 animate-scroll-x"
      style={{
        animation: 'scroll-x 40s linear infinite',
      }}
      >
      {/* Certificate Images - duplicated for seamless loop */}
      {[1,2,3,4,5,6,7,1,2,3,4,5,6,7].map((num, idx) => (
        <img
        key={idx}
        src={`/assets/certificate/${num}.png`}
        alt={`Certificate ${num}`}
        className="h-64 w-auto rounded-0xl shadow-lg bg-white p-4"
        />
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
  </div>
</section>



        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ទំនាក់ទំនង</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">ចង់ធ្វើការជាមួយខ្ញុំ? សូមទាក់ទងមកខ្ញុំ!</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-0xl">
                <h3 className="text-2xl font-semibold mb-6">ផ្ញើសារមកខ្ញុំ</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">ឈ្មោះ</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-0lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                      placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">អ៊ីមែល</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-0lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                      placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">សារ</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-0lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                      placeholder="បញ្ចូលសាររបស់អ្នក"
                    ></textarea>
                  </div>
                    <button
                    onClick={handleFormSubmit}
                    className="w-full 
                      bg-black text-white 
                      dark:bg-white dark:text-black
                      font-semibold py-3 px-6 rounded-0xl 
                      transition-all duration-300 hover:scale-105
                      hover:bg-gray-900 hover:text-white
                      dark:hover:bg-gray-200 dark:hover:text-black"
                    >
                    ផ្ញើសារ
                    </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">ព័ត៌មានទំនាក់ទំនង</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-0xl flex items-center justify-center">
                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold">អ៊ីមែល</p>
                        <p className="text-gray-600 dark:text-gray-300">buoysophit11@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-0xl flex items-center justify-center">
                        <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold">លេខទូរស័ព្ទ</p>
                        <p className="text-gray-600 dark:text-gray-300">+855 886224813</p>
                        <p className="text-gray-600 dark:text-gray-300">+855 764290073</p>

                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">តាមដានខ្ញុំ</h4>
                  <div className="flex space-x-4">
                  <a
                    href="https://github.com/buoysophit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/buoy-sophit-06111a2b4/"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://t.me/buoysophitt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
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
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
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

                <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-0xl">
                  <h4 className="font-semibold mb-2">អាចរកឃើញខ្ញុំបាន</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    នៅទីក្រុងភ្នំពេញ។ សម្រាប់ការងារ និងការគាំទ្រពីចម្ងាយ ខ្ញុំនៅអាចជួយបាន។
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Buoysophit</h3>
                <p className="text-gray-400">computer science and engineering</p>
              </div>
              
              <div className="flex justify-center space-x-6 mb-8">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              
              <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-400">&copy; រក្សាសិទ្ធិ ២០២៥ Buoysophit។ រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
              </div>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        {showBackToTop && (
            <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 w-12 h-12 
              ${darkMode 
              ? 'bg-white text-black' 
              : 'bg-black text-white'
              } 
              rounded-0xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50`}
            aria-label="ត្រលប់ទៅកំពូល"
            >
            <ArrowUp className="h-6 w-6 mx-auto" />
            </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
