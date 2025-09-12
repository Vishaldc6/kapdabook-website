import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Users, FileText, Package, CreditCard, BarChart3, Shield, Smartphone, CheckCircle, Star, ArrowRight, Play } from 'lucide-react';

const KapdaBookWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'benefits', 'how-it-works', 'testimonials', 'download'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Buyer & Agent Management",
      description: "Store and manage all your buyers and dalals with GST details in one place"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Smart Billing System",
      description: "Create bills quickly with automatic calculations and due date reminders"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Material Tracking",
      description: "Organize and track all your textile materials and categories efficiently"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Management",
      description: "Flexible payment terms from cash to extended credit with easy tracking"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Analytics",
      description: "Get insights with dashboard overview of revenue, pending amounts and more"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Offline",
      description: "Works completely offline with secure data backup and restore options"
    }
  ];

  const benefits = [
    "No internet required - works completely offline",
    "Professional PDF invoices for customers",
    "Urgent bill alerts for payments due in 5 days",
    "Simple interface - no training required",
    "Designed specifically for textile businesses",
    "Secure data backup and restore"
  ];

  const steps = [
    {
      step: "1",
      title: "Add Your Business Data",
      description: "Set up buyers, agents, materials and payment terms"
    },
    {
      step: "2",
      title: "Create Bills",
      description: "Generate bills quickly with automatic calculations"
    },
    {
      step: "3",
      title: "Track & Get Paid",
      description: "Monitor payments and get alerts for due bills"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">KapdaBook</h1>
                <p className="text-xs text-gray-500">Textile Management</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Features', 'Benefits', 'How it Works', 'Download'].map((item) => {
                const sectionId = item.toLowerCase().replaceAll(' ', '-');
                const realSectionId = sectionId === 'home' ? 'home' : sectionId;
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(realSectionId)}
                    className={`text-sm font-medium transition-colors ${activeSection === realSectionId
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                      }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'Features', 'Benefits', 'How it Works', 'Download'].map((item) => {
                const sectionId = item.toLowerCase().replaceAll(' ', '-');
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  #1 Textile Management App
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Manage Your
                <span className="text-blue-600"> Textile Business</span>
                <br />In Your Pocket
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                KapdaBook makes running your textile business simple and stress-free. Manage buyers, agents, materials, bills, and payments - all in one easy-to-use offline app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('download')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Now</span>
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>See Features</span>
                </button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1+</div>
                  <div className="text-sm text-gray-600">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">4.0★</div>
                  <div className="text-sm text-gray-600">User Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-gray-600">Offline</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="data:image/svg+xml,%3Csvg width='300' height='600' viewBox='0 0 300 600' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='600' rx='25' fill='%23f8fafc'/%3E%3Crect x='20' y='60' width='260' height='40' rx='8' fill='%23e2e8f0'/%3E%3Crect x='30' y='70' width='80' height='20' rx='4' fill='%23475569'/%3E%3Crect x='20' y='120' width='80' height='60' rx='12' fill='%23dbeafe'/%3E%3Crect x='110' y='120' width='80' height='60' rx='12' fill='%23dcfce7'/%3E%3Crect x='200' y='120' width='80' height='60' rx='12' fill='%23fef3c7'/%3E%3Crect x='20' y='200' width='260' height='120' rx='12' fill='%23ffffff' stroke='%23e2e8f0'/%3E%3Crect x='30' y='220' width='100' height='15' rx='4' fill='%23f97316'/%3E%3Crect x='30' y='250' width='80' height='12' rx='4' fill='%23a3a3a3'/%3E%3Crect x='30' y='270' width='120' height='12' rx='4' fill='%23a3a3a3'/%3E%3Crect x='30' y='290' width='60' height='12' rx='4' fill='%23a3a3a3'/%3E%3Crect x='20' y='340' width='120' height='40' rx='8' fill='%2310b981'/%3E%3Crect x='150' y='340' width='130' height='40' rx='8' fill='%233b82f6'/%3E%3C/svg%3E"
                  alt="KapdaBook App Interface"
                  className="w-full max-w-sm mx-auto drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 rounded-3xl blur-3xl opacity-30 transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Run Your Textile Business
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From buyer management to bill generation, KapdaBook has all the features designed specifically for textile businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose KapdaBook?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Built specifically for textile businesses, KapdaBook understands your unique needs and challenges.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Works Completely Offline</h3>
                </div>
                <p className="text-gray-600">
                  No internet? No problem! KapdaBook works 100% offline, so you can manage your business anywhere, anytime.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Business Dashboard</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Total Revenue</span>
                    <span className="font-bold text-green-600">₹2,50,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Pending Amount</span>
                    <span className="font-bold text-orange-600">₹45,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Total Buyers</span>
                    <span className="font-bold text-blue-600">156</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-lg text-gray-600">
              Setting up KapdaBook is quick and easy. Start managing your business in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-8 h-8 text-gray-300 absolute top-8 -right-4 transform rotate-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of satisfied textile business owners across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Patel",
                business: "Patel Textiles, Surat",
                rating: 5,
                text: "KapdaBook has transformed how I manage my textile business. No more paper registers and missed payments!"
              },
              // {
              //   name: "Meera Shah",
              //   business: "Shah Fabrics, Mumbai",
              //   rating: 5,
              //   text: "The offline feature is amazing. I can create bills even when there's no internet. Perfect for textile markets."
              // },
              // {
              //   name: "Suresh Kumar",
              //   business: "Kumar Textiles, Delhi",
              //   rating: 5,
              //   text: "Professional PDF invoices and payment reminders have improved my cash flow significantly. Highly recommended!"
              // }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  {`"${testimonial.text}"`}
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Revolutionize Your Textile Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Download KapdaBook today and join thousands of successful textile businesses across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">

            <div className='max-w-64'>
              <a href='https://indusapp.store/orpcdf3g'>
                <img
                  alt='Get it on Indus Appstore'
                  src='https://docstore.indusappstore.com/public/external/developerdashboard-static/badge-black-background-english.png' />
              </a>
            </div>

            <div className="text-center">
              <div className="text-sm opacity-75 mb-2">App Size: 15MB | Version: 1.0.0</div>
              <div className="text-sm opacity-75">✓ Free Download ✓ No Subscription Required</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">₹0</div>
              <div className="opacity-75">Completely Free</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15MB</div>
              <div className="opacity-75">Small App Size</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="opacity-75">Works Offline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">KapdaBook</h3>
                  <p className="text-sm text-gray-400">Textile Management</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                The complete textile business management solution. Built by textile business owners, for textile business owners.
              </p>
              <div className="text-sm text-gray-400">
                Made with ❤️ for Indian Textile Industry
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Buyer Management</li>
                <li>Bill Generation</li>
                <li>Payment Tracking</li>
                <li>Material Management</li>
                <li>PDF Invoices</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact & Support</h4>
              <div className="space-y-4 text-gray-400">
                <div>
                  <p className="font-medium text-white mb-2">Get Help</p>
                  <p className="text-sm mb-1">📧 Email: vishalchaudharee8@gmail.com</p>
                  {/* <p className="text-sm mb-1">📱 WhatsApp: +91 98765 43210</p>
                  <p className="text-sm">⏰ Mon-Sat: 9 AM - 6 PM IST</p> */}
                </div>
                <div>
                  <p className="font-medium text-white mb-2">Legal</p>
                  <p className="text-sm mb-1"> <a href="https://www.termsfeed.com/live/50736cca-3b9b-4f87-b311-cdcb1112fd8a" >
                    Privacy Policy
                  </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} KapdaBook. All rights reserved. | Version 1.0.0</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KapdaBookWebsite;