
const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-lg p-4 sm:p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">सम्पर्कको लागि</h1>
        <p className="mb-4 text-center">केहि समस्या भए इमेल गर्नु होला</p>
        <p className="mb-4 text-center">
          <strong>वेभसाईट खुल्ने समय:</strong> आइतबार देखि शुक्रबार - 10am to 5pm
        </p>

        <h2 className="text-xl font-semibold mb-2">सम्पर्कमा रहनुहोस्</h2>
        <div className="space-y-4">
          <p className="flex flex-col sm:flex-row sm:justify-between">
            <span><strong>इमेल:</strong></span>
            <span>spprojest@gmail.com</span>
          </p>
          <p className="flex flex-col sm:flex-row sm:justify-between">
            <span><strong>मोबिल न:</strong></span>
            <span>+9779812345678</span>
          </p>
          <p className="flex flex-col sm:flex-row sm:justify-between">
            <span><strong>ठेगाना:</strong></span>
            <span>बेलबारी, मोरंग, नेपाल</span>
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-2 mt-6">सम्पर्क ठेगानाः</h2>
        <div className="space-y-4">
          <p className="flex flex-col sm:flex-row sm:justify-between">
            <span><strong>नगरकार्यपालिकाकाे कार्यालय:</strong></span>
            <span>बेलबारी, मोरङ</span>
          </p>
          <p className="flex flex-col sm:flex-row sm:justify-between">
            <span><strong>फोन/Fax:</strong></span>
            <span>०२१- ४३४२५९, ०२१- ४३४२१३</span>
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-2 mt-6">शिक्षा शाखा:</h2>
        <div className="space-y-4">
          <p className="flex flex-col sm:flex-row sm:justify-between">
            <span><strong>फोन:</strong></span>
            <span>०२१- ४३४३९०</span>
          </p>
          <p className="flex flex-col sm:flex-row sm:justify-between">
            <span><strong>ईमेल:</strong></span>
            <span>info@belbarimun.gov.np</span>
          </p>
          <p className="flex flex-col sm:flex-row sm:justify-between">
            <span><strong>फेसबुक:</strong></span>
            <span>
              <a href="https://www.facebook.com/belbarimunicpality/" className="text-blue-500">https://www.facebook.com/belbarimunicpality/</a>
            </span>
          </p>
          <p className="flex flex-col sm:flex-row sm:justify-between">
            <span><strong>वेभसाईट:</strong></span>
            <span>
              <a href="http://belbarimun.gov.np" className="text-blue-500">belbarimun.gov.np</a>
            </span>
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-2 mt-6">Office Code:</h2>
        <p className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <span>801011304</span>
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">बेलबारी नगरपालिकाको आन्तरिक राजस्वा खाताः</h2>
        <p className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <span>Belbari NA.PA.(GA-1-1)-AANTARIK RAJ</span>
          <span>2430100301010002</span>
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">बेलबारी नगरपालिका धरौटी शाखा:</h2>
        <p className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <span>Belbari NA.PA.(GA-3)-DHARAUTI ACCOUNT</span>
          <span>2430100303000002</span>
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">प्रमुख:</h2>
        <p className="flex flex-col sm:flex-row sm:justify-between">
          <span>०२१-४३४२५९/९८५२०६४१११</span>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
