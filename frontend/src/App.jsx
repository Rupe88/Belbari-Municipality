import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/home/Home"));
const Header = lazy(() => import("./components/header/Header"));
const About = lazy(() => import("./pages/about/About"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const Login = lazy(() => import("./pages/auth/Login"));
const Footer = lazy(() => import("./components/footer/Footer"));
const ContactUs = lazy(() => import("./pages/contact/ContactUs"));
const Forms = lazy(() => import("./pages/forms/Forms"));
const ClearanceFrom = lazy(() => import("./pages/forms/ClearanceFrom"));
const AppFrom = lazy(() => import("./pages/forms/AppFrom"));
const CompanyTypeFrom = lazy(() => import("./pages/forms/CompanyTypeFrom"));
const ContactPerson = lazy(() => import("./pages/forms/ContactPerson"));
const CompanyInfoForm = lazy(() => import("./pages/forms/CompanyInfoForm"));
const IntroductionFrom = lazy(() => import("./pages/forms/IntroductionFrom"));
const CompanyGroupForm=lazy(()=>{"./pages/forms/CompanyGroupForm"});
const IncomeSourceForm = lazy(() => import("./pages/forms/IncomeSourceForm"));
const ManPowerForm = lazy(() => import("./pages/forms/ManPowerForm"));
const MachinaryForm = lazy(() => import("./pages/forms/MachinaryForm"));
const IncomeTaxForm = lazy(() => import("./pages/forms/IncomeTaxForm"));
const JobDescription = lazy(() => import("./pages/forms/JobDescription"));
const AdminLoginForm = lazy(() => import("./admin/AdminLoginForm"));
import Loading from "./components/loader/Loading";
import "./index.css";



const App = () => {
  return (
    <div>
      <>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/forms" element={<Forms />} />

              {/* admin ko lagi */}
              <Route path="/admin" element={<AdminLoginForm />} />

              {/* forms ko lagi hai ta */}
              <Route path="/introduction-form" element={<IntroductionFrom />} />
              <Route path="/app-form" element={<AppFrom />} />
              <Route path="/company-type-form" element={<CompanyTypeFrom />} />
              <Route path="/contact-person-form" element={<ContactPerson />} />
              <Route path="/company-info-form" element={<CompanyInfoForm />} />
              <Route path="/clearance-form" element={<ClearanceFrom />} />
              <Route path="/company-group-form" element={<CompanyGroupForm/>} />  
              <Route
                path="/income-source-form"
                element={<IncomeSourceForm />}
              />
              <Route path="/manpower-form" element={<ManPowerForm />} />
              <Route path="/machinary-form" element={<MachinaryForm />} />
              <Route path="/income-tax-form" element={<IncomeTaxForm />} />
              <Route
                path="/job-description-form"
                element={<JobDescription />}
              />
            </Routes>
            <Footer />
          </Suspense>
        </BrowserRouter>
      </>
    </div>
  );
};

export default App;
