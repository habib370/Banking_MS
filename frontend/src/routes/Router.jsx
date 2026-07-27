import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout.jsx";
import Home from "../pages/Home.jsx";
import { Login } from "../components/Login.jsx";
import { Register } from "../components/Register.jsx";
import Profile from "../pages/Profile.jsx";
import History from "../pages/History.jsx";
import SecondaryNavbar from "../components/SecondaryNavbar.jsx";

import TuitionFees from "../pages/Academic/TuitionFees.jsx";
import HostelRent from "../pages/Academic/HostelRent.jsx";
import ExamFees from "../pages/Academic/ExamFees.jsx";
import LibraryDues from "../pages/Academic/LibraryDues.jsx";
import CampusMeal from "../pages/Academic/CampusMeal.jsx";

// Import Loan Pages
import TuitionLoan from "../pages/Loans/TuitionLoan.jsx";
import TechEMI from "../pages/Loans/TechEMI.jsx";
import StudyAbroad from "../pages/Loans/StudyAbroad.jsx";
import LoanCalculator from "../pages/Loans/LoanCalculator.jsx";
import PostGrad from "../pages/Loans/PostGrad.jsx";

// Import Scholarship Pages
import MeritScholarship from "../pages/Scholarships/MeritScholarship.jsx";
import FinancialAid from "../pages/Scholarships/FinancialAid.jsx";
import ResearchGrants from "../pages/Scholarships/ResearchGrants.jsx";
import GrantStatus from "../pages/Scholarships/GrantStatus.jsx";

// Import Cards & Forex Pages
import VirtualCard from "../pages/Cards/VirtualCard.jsx";
import Forex from "../pages/Cards/Forex.jsx";
import StudentDPS from "../pages/Cards/StudentDPS.jsx";
import Freelance from "../pages/Cards/Freelance.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      // Public Routes (No authentication required)
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      // Protected Routes (Authentication required)
      { path: "home", element: <Home /> },
      { path: "dashboard", element: <Home /> }, // Alias for home
      { path: "profile", element: <Profile /> },
      { path: "history", element: <History /> },
      { path: "transactions", element: <History /> }, // Alias for history

      // Academic Routes
      { path: "academic/tuition", element: <TuitionFees /> },
      { path: "academic/hostel", element: <HostelRent /> },
      { path: "academic/exam-fees", element: <ExamFees /> },
      { path: "academic/library", element: <LibraryDues /> },
      { path: "academic/cafeteria", element: <CampusMeal /> },

      // Loan Routes
      { path: "loans/tuition", element: <TuitionLoan /> },
      { path: "loans/tech-emi", element: <TechEMI /> },
      { path: "loans/abroad", element: <StudyAbroad /> },
      { path: "loans/calculator", element: <LoanCalculator /> },
      { path: "loans/post-grad", element: <PostGrad /> },

      // Scholarship Routes
      { path: "grants/merit", element: <MeritScholarship /> },
      { path: "grants/hardship", element: <FinancialAid /> },
      { path: "grants/research", element: <ResearchGrants /> },
      { path: "grants/status", element: <GrantStatus /> },

      // Cards & Forex Routes
      { path: "cards/virtual", element: <VirtualCard /> },
      { path: "cards/forex", element: <Forex /> },
      { path: "cards/dps", element: <StudentDPS /> },
      { path: "cards/freelance", element: <Freelance /> },

      // Perks Routes
      { path: "perks/campuses", element: <Home /> },
      { path: "perks/discounts", element: <Home /> },
      { path: "perks/food-cashback", element: <Home /> },

      // Career Routes
      { path: "career/ambassador", element: <Home /> },
      { path: "career/internships", element: <Home /> },
      { path: "career/literacy", element: <Home /> },
    ],
  },
]);
