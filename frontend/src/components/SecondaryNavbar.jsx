import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaGraduationCap, 
  FaHandHoldingUsd, 
  FaAward, 
  FaCreditCard, 
  FaGift, 
  FaBriefcase,
  FaChevronDown,
  FaChevronRight,
  FaTimes
} from "react-icons/fa";

const menuData = [
  {
    id: "academic",
    title: "Academic Dues",
    icon: FaGraduationCap,
    items: [
      { name: "Semester Tuition Fees", path: "/academic/tuition", desc: "Pay fees directly to partnered universities" },
      { name: "Hall & Hostel Rent", path: "/academic/hostel", desc: "Clear dormitory & campus living bills" },
      { name: "Exam & Registration Dues", path: "/academic/exam-fees", desc: "Admit card & semester exam fees" },
      { name: "Library & Lab Dues", path: "/academic/library", desc: "Clear institutional fines & dues" },
      { name: "Campus Meal Card", path: "/academic/cafeteria", desc: "Recharge campus cafeteria card" },
    ],
  },
  {
    id: "loans",
    title: "Loans & Tech EMI",
    icon: FaHandHoldingUsd,
    items: [
      { name: "Tuition Assistance Loan", path: "/loans/tuition", desc: "Low-interest loans for semester fees" },
      { name: "Laptop & Tech Financing", path: "/loans/tech-emi", desc: "0% EMI loans for laptops & lab gear" },
      { name: "Study Abroad Financing", path: "/loans/abroad", desc: "Visa proof of funds & abroad loans" },
      { name: "Loan EMI Calculator", path: "/loans/calculator", desc: "Estimate monthly student repayments" },
      { name: "Post-Grad Repayment", path: "/loans/post-grad", desc: "Deferred repayment starting post-graduation" },
    ],
  },
  {
    id: "scholarships",
    title: "Scholarships & Grants",
    icon: FaAward,
    items: [
      { name: "Merit Scholarship Schemes", path: "/grants/merit", desc: "Bank-sponsored academic rewards" },
      { name: "Need-Based Financial Aid", path: "/grants/hardship", desc: "One-time grants for emergency aid" },
      { name: "Research & Thesis Grants", path: "/grants/research", desc: "Funding for university research projects" },
      { name: "Application Status Tracker", path: "/grants/status", desc: "Check real-time status of applied aid" },
    ],
  },
  {
    id: "cards",
    title: "Cards & Forex",
    icon: FaCreditCard,
    items: [
      { name: "Student Virtual Card", path: "/cards/virtual", desc: "Instant online payments for Coursera/Udemy" },
      { name: "International Student Forex", path: "/cards/forex", desc: "Pay IELTS, GRE, or visa fees abroad" },
      { name: "Student Monthly DPS", path: "/cards/dps", desc: "Automated savings starting at ৳500/month" },
      { name: "Freelancer Student Account", path: "/cards/freelance", desc: "Receive earnings from Fiverr & Upwork" },
    ],
  },
  {
    id: "perks",
    title: "Campus Offers",
    icon: FaGift,
    items: [
      { name: "Partner Universities", path: "/perks/campuses", desc: "List of connected campus portals" },
      { name: "Bookstore & Tech Deals", path: "/perks/discounts", desc: "Deals on Apple, Dell, and bookshops" },
      { name: "Food & Cafe Cashback", path: "/perks/food-cashback", desc: "Exclusive student cashback near campus" },
    ],
  },
  {
    id: "career",
    title: "Career & Hub",
    icon: FaBriefcase,
    items: [
      { name: "Campus Ambassador", path: "/career/ambassador", desc: "Represent StudentBank at your university" },
      { name: "Bank Internship Portal", path: "/career/internships", desc: "Direct internships for top students" },
      { name: "Financial Literacy Hub", path: "/career/literacy", desc: "Free mini-courses on budgeting & tax" },
    ],
  },
];

export default function SecondaryNavbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const timeoutRef = useRef(null);

  // Handle click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveMenu(null);
        setMobileActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileActiveMenu(null);
    setIsMobileMenuOpen(false);
  }, [navigate]);

  const handleItemClick = (path) => {
    setActiveMenu(null);
    setMobileActiveMenu(null);
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const handleMouseEnter = (menuId) => {
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to prevent accidental closing
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setMobileActiveMenu(null);
    }
  };

  const toggleMobileSubMenu = (menuId) => {
    setMobileActiveMenu(mobileActiveMenu === menuId ? null : menuId);
  };

  return (
    <div ref={navbarRef} className="relative bg-slate-900 text-white border-b border-slate-800 shadow-md z-40">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center justify-between px-4 py-2">
        <button
          onClick={toggleMobileMenu}
          className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"
        >
          <span>Menu</span>
          <FaChevronDown className={`text-xs transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
        </button>
        <span className="text-xs text-slate-500">Student Banking</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block max-w-[1600px] mx-auto px-4 md:px-6">
        <ul className="flex items-center space-x-1 py-1">
          {menuData.map((category) => {
            const Icon = category.icon;
            const isOpen = activeMenu === category.id;

            return (
              <li 
                key={category.id} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(category.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Main Category Link */}
                <button
                  className={`flex items-center gap-2 py-3 px-3.5 text-xs md:text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
                    isOpen 
                      ? "text-blue-400 bg-slate-800/80" 
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <Icon className="text-blue-400 text-sm md:text-base shrink-0" />
                  <span>{category.title}</span>
                  <FaChevronDown 
                    className={`text-[10px] transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-400" : "text-slate-500"
                    }`} 
                  />
                </button>

                {/* Dropdown Mega Menu */}
                {isOpen && (
                  <div className="absolute left-0 top-full pt-1.5 w-72 md:w-80 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50">
                    {/* Header Strip */}
                    <div className="px-4 py-2.5 bg-gradient-to-r from-blue-50 to-slate-50 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Icon className="text-blue-600" /> {category.title}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">Quick Access</span>
                    </div>

                    {/* Sub Items List */}
                    <div className="py-1.5 max-h-[380px] overflow-y-auto">
                      {category.items.map((subItem, index) => (
                        <div
                          key={index}
                          onClick={() => handleItemClick(subItem.path)}
                          className="px-4 py-2.5 hover:bg-blue-50/70 transition-colors cursor-pointer group/item flex items-center justify-between gap-2 border-b border-slate-50 last:border-0"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-xs md:text-sm font-semibold text-slate-700 group-hover/item:text-blue-700 transition-colors">
                              {subItem.name}
                            </p>
                            <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                              {subItem.desc}
                            </p>
                          </div>
                          <FaChevronRight className="text-[10px] text-slate-300 group-hover/item:text-blue-600 group-hover/item:translate-x-0.5 transition-all shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800/95 border-t border-slate-700 max-h-[80vh] overflow-y-auto">
          <div className="py-2 px-4">
            {menuData.map((category) => {
              const Icon = category.icon;
              const isOpen = mobileActiveMenu === category.id;

              return (
                <div key={category.id} className="border-b border-slate-700/50 last:border-0">
                  {/* Mobile Category Header */}
                  <button
                    onClick={() => toggleMobileSubMenu(category.id)}
                    className="w-full flex items-center justify-between py-3 text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="text-blue-400 text-sm" />
                      <span>{category.title}</span>
                    </div>
                    <FaChevronDown 
                      className={`text-xs transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-400" : "text-slate-500"
                      }`} 
                    />
                  </button>

                  {/* Mobile Sub Items */}
                  {isOpen && (
                    <div className="pl-8 pb-3 space-y-1">
                      {category.items.map((subItem, index) => (
                        <div
                          key={index}
                          onClick={() => handleItemClick(subItem.path)}
                          className="py-2 px-3 hover:bg-slate-700/50 rounded-lg transition-colors cursor-pointer"
                        >
                          <p className="text-sm text-slate-300 hover:text-white transition-colors">
                            {subItem.name}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                            {subItem.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}