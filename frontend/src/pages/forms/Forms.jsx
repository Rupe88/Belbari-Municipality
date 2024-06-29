import { Link } from "react-router-dom"
import clearanceFrom from "../../assets/clearance-form.png"
import CompanyType from "../../assets/company-type.png"
import AppForm from "../../assets/app-form.png"
import ContactPerson from "../../assets/contact-person.png"
import CompanyInfo from "../../assets/company-info.png"
import CompanyGroup from "../../assets/company-group.png"
import IncomeSource from "../../assets/income-source.png"
import Manpower from "../../assets/manpower.png"
import Machinary from "../../assets/machinery.png"
import WorkDetail from "../../assets/work-detail.png"
import IncomeTax from "../../assets/income-tax.png"
const Forms = () => {
  return (
    <div>
        

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
     
    </thead>
    <tbody>
      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        <Link to="/introduction-form" className="flex items-center">
        <img src={AppForm} alt="" className="md:w-7 h-7"/><p className="text-xl ml-4">परिचय</p>
        </Link>
     
        </th>
    
      </tr>
      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        <Link to="/app-form" className="flex items-center">
        <img src={AppForm} alt="" className="md:w-7 h-7"/><p className="text-xl ml-4">दरखास्त पेश</p>
        </Link>
        </th>
    
      </tr>
      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        <Link to="/company-type-form" className="flex items-center">
        <img src={CompanyType} alt="" className="md:w-7 h-7"/><p className="text-xl ml-4">कम्पनीको प्रकृति</p>
        </Link>
        </th>
    
      </tr>
 

      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        <Link to="/contact-person-form" className="flex items-center">
        <img src={ContactPerson} alt="" className="md:w-7 h-7"/><p className="text-xl ml-4">सम्पर्क विवरण</p>
        </Link>
        </th>
   
      </tr>

      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        <Link to="/company-info-form" className="flex items-center">
        <img src={CompanyInfo} alt="" className="md:w-7 h-7"/><p className="text-xl ml-4">कम्पनीको विवरण</p>
        </Link>
        </th>
   
      </tr>

      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        <Link to="/clearance-form" className="flex items-center">
        <img src={clearanceFrom} alt="" className="md:w-7 h-7"/><p className="text-xl ml-4">ईजाजतपत्र वर्ग</p>
        </Link>
        </th>
   
      </tr>

      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        <Link to="/company-group-form" className="flex items-center">
        <img src={CompanyGroup} alt="" className="md:w-7 h-7"/><p className="text-xl ml-4">समुहिकरण</p>
        </Link>
        </th>
   
      </tr>

      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        <Link to="/income-source-form" className="flex items-center">
        <img src={IncomeSource} alt="" className="md:w-7 h-7"/><p className="text-xl ml-4">आर्थिक विवरण</p>
        </Link>
        </th>
   
      </tr>

      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        <Link to="/manpower-form" className="flex items-center">
        <img src={Manpower} alt="" className="md:w-7 h-7"/><p className="text-xl ml-4">कामदारको विवरण</p>
        </Link>
        </th>
   
      </tr>
      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        <Link to="/machinary-form" className="flex items-center">
        <img src={Machinary} alt="" className="md:w-7 h-7"/><p className="text-xl ml-4">औजारको विवरण</p>
        </Link>
        </th>
   
      </tr>
      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        <Link to="/clearance-form" className="flex items-center">
        <img src={WorkDetail} alt="" className="md:w-7 h-7"/><p className="text-xl ml-4">कामको विवरण</p>
        </Link>
        </th>
   
      </tr>
      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        <Link to="/income-tax-form" className="flex items-center">
        <img src={IncomeTax} alt="" className="md:w-7 h-7"/><p className="text-xl ml-4">कर चुक्ता प्रमाण</p>
        </Link>
        </th>
   
      </tr>
    </tbody>
  </table>
</div>


    </div>
  )
}

export default Forms