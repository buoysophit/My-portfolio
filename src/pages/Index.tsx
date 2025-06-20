
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Mail, Phone, Github, Linkedin, ArrowUp, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

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
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log('Form submitted:', { name, email, message });
    alert('សារបានផ្ញើរួចរាល់! (Message sent successfully!)');
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Portfolio</h1>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <button onClick={() => scrollToSection('hero')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">ទំព័រដើម</button>
                  <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">អំពីខ្ញុំ</button>
                  <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">ជំនាញ</button>
                  <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">គម្រោង</button>
                  <button onClick={() => scrollToSection('services')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">សេវាកម្ម</button>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">ទំនាក់ទំនង</button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                  aria-label="ប្តូររបៀបពន្លឺ/ងងឹត"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 rounded-xl text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left">ទំព័រដើម</button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 rounded-xl text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left">អំពីខ្ញុំ</button>
                <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 rounded-xl text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left">ជំនាញ</button>
                <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 rounded-xl text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left">គម្រោង</button>
                <button onClick={() => scrollToSection('services')} className="block px-3 py-2 rounded-xl text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left">សេវាកម្ម</button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 rounded-xl text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left">ទំនាក់ទំនង</button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center text-white text-4xl font-bold">
                  JD
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                ជំនាញផ្នែកសរសេរកម្មវិធី<br />និងគាំទ្រផ្នែករឹង
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
                បង្កើតដំណោះស្រាយបច្ចេកវិទ្យាដ៏ល្អបំផុតសម្រាប់អ្នក
              </p>
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                ស្វែងយល់បន្ថែម
                <ChevronDown className="ml-2 h-5 w-5" />
              </button>
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
                  ខ្ញុំជាអ្នកអភិវឌ្ឍន៍កម្មវិធី និងអ្នកជំនាញផ្នែករឹង ដែលមានបទពិសោធន៍ ៥ ឆ្នាំក្នុងការបង្កើតកម្មវិធី និងដោះស្រាយបញ្ហាបច្ចេកទេស។ ខ្ញុំស្រលាញ់ការរៀនហ្នឹកថ្មីៗ និងការដោះស្រាយបញ្ហាស្មុគស្មាញ។
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                    <h3 className="font-semibold text-blue-600 dark:text-blue-400">បទពិសោធន៍</h3>
                    <p className="text-2xl font-bold">៥+ ឆ្នាំ</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                    <h3 className="font-semibold text-green-600 dark:text-green-400">គម្រោង</h3>
                    <p className="text-2xl font-bold">២០+ គម្រោង</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-green-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">ការអប់រំ និងវិញ្ញាបនបត្រ</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    បរិញ្ញាបត្រវិស្វកម្មកុំព្យូទ័រ
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    វិញ្ញាបនបត្រ AWS Cloud Practitioner
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    វិញ្ញាបនបត្រ CompTIA A+
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ជំនាញ</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">ជំនាញបច្ចេកទេសដែលខ្ញុំត្រូវបានបង្រៀន</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Programming Skills */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">ការសរសេរកម្មវិធី</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Python</span>
                      <span>៩០%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>JavaScript</span>
                      <span>៨៥%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>React</span>
                      <span>៨០%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hardware Skills */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">ផ្នែករឹង</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>ជួសជុលកុំព្យូទ័រ</span>
                      <span>៩៥%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>ការដំឡើងបណ្តាញ</span>
                      <span>៨៥%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>ជួសជុលម៉ាស៊ីនកុំព្យូទ័រ</span>
                      <span>៩០%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Database & Tools */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🗄️</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">ឌាតាបេស & ឧបករណ៍</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>MySQL</span>
                      <span>៨៨%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Git</span>
                      <span>៩២%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Docker</span>
                      <span>៧៥%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">គម្រោង</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">គម្រោងសំខាន់ៗដែលខ្ញុំបានធ្វើ</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-6xl">🛒</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">កម្មវិធីគ្រប់គ្រងហាង</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    កម្មវិធីគ្រប់គ្រងស្តុក និងការលក់ដែលបង្កើតជាមួយ React និង Node.js។ អាចត្រួតពិនិត្យស្តុក ការលក់ និងរបាយការណ៍។
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">Node.js</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">MySQL</span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition-colors">មើលលម្អិត</button>
                    <button className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-xl transition-colors">បង្ហាញផ្ទាល់</button>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-white text-6xl">📊</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">ប្រព័ន្ធគ្រប់គ្រងបុគ្គលិក</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    ប្រព័ន្ធគ្រប់គ្រងបុគ្គលិក ដែលអាចត្រួតពិនិត្យការចូលធ្វើការ ការសុំច្បាប់ និងគ្រប់គ្រងប្រាក់ខែ។
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">Vue.js</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">Laravel</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">PostgreSQL</span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition-colors">មើលលម្អិត</button>
                    <button className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-xl transition-colors">បង្ហាញផ្ទាល់</button>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-6xl">🔧</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">ប្រព័ន្ធត្រួតពិនិត្យបណ្តាញ</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    ប្រព័ន្ធត្រួតពិនិត្យសុខភាពបណ្តាញ និងម៉ាស៊ីនស៊ីវ័រ ដែលអាចផ្ញើការព្រមានដោយស្វ័យប្រវត្តិ។
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">Python</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">Flask</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">MongoDB</span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition-colors">មើលលម្អិត</button>
                    <button className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-xl transition-colors">បង្ហាញផ្ទាល់</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">សេវាកម្ម</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">សេវាកម្មដែលខ្ញុំផ្តល់ជូន</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">ការអភិវឌ្ឍកម្មវិធី</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  បង្កើតកម្មវិធីបណ្តាញ និងកម្មវិធីទូរស័ព្ទដែលមានគុណភាពខ្ពស់
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Web Applications</li>
                  <li>• Mobile Apps</li>
                  <li>• Desktop Software</li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">ជួសជុលផ្នែករឹង</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  ជួសជុល និងដំឡើងផ្នែករឹងកុំព្យូទ័រ និងឧបករណ៍បច្ចេកវិទ្យា
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• PC Building</li>
                  <li>• Hardware Repair</li>
                  <li>• Diagnostics</li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">ការដំឡើងបណ្តាញ</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  ដំឡើង និងកំណត់រចនាសម្ព័ន្ធបណ្តាញសម្រាប់ការិយាល័យ
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Network Setup</li>
                  <li>• Wi-Fi Configuration</li>
                  <li>• Security Setup</li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">គាំទ្របច្ចេកវិទ្យា</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  ផ្តល់ការគាំទ្របច្ចេកវិទ្យា និងដោះស្រាយបញ្ហាកុំព្យូទ័រ
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Technical Support</li>
                  <li>• Troubleshooting</li>
                  <li>• System Maintenance</li>
                </ul>
              </div>
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
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6">ផ្ញើសារមកខ្ញុំ</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">ឈ្មោះ</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                      placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">អ៊ីមែល</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                      placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">សារ</label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                      placeholder="បញ្ចូលសាររបស់អ្នក"
                    ></textarea>
                  </div>
                  <button
                    onClick={handleFormSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105"
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
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold">អ៊ីមែល</p>
                        <p className="text-gray-600 dark:text-gray-300">john.doe@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                        <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold">លេខទូរស័ព្ទ</p>
                        <p className="text-gray-600 dark:text-gray-300">+855 12 345 678</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">តាមដានខ្ញុំ</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                      <Github className="h-6 w-6" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
                  <h4 className="font-semibold mb-2">អាចរកឃើញខ្ញុំបាន</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    ខ្ញុំធ្លាប់ធ្វើការនៅទីក្រុងភ្នំពេញ និងតំបន់ជុំវិញ។ សម្រាប់ការងារកុងត្រាក្ដោត និងការគាំទ្រពីចម្ងាយ ខ្ញុំនៅអាចជួយបាន។
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
                <h3 className="text-2xl font-bold mb-4">John Doe</h3>
                <p className="text-gray-400">អ្នកអភិវឌ្ឍន៍កម្មវិធី និងអ្នកជំនាញផ្នែករឹង</p>
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
                <p className="text-gray-400">&copy; រក្សាសិទ្ធិ ២០២៥ John Doe។ រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
              </div>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
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
