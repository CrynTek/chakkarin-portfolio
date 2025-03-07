import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="bg-gray-100 py-12 px-6 gap-8 content-around h-screen w-full flex justify-center items-center">
      <div className="text-center mb-10">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide">- Education -</h4>
        <h2 className="text-3xl font-bold text-gray-900">
          My <span className="text-purple-600">Education</span>
        </h2>
      </div>

        
        {/* Education Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
          <div className="flex items-center gap-3 mb-4">
            <FaGraduationCap className="text-purple-600 text-3xl" />
            <h3 className="text-xl font-semibold text-purple-600">Education</h3>
          </div>

          {/* Education List */}
          <div className="space-y-4 p-4 max-w-2xl md:max-w-3xl mx-auto">
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h4 className="font-bold text-gray-900">Maejo University</h4>
                <p className="text-gray-500 text-sm">Faculty of Science - Computer Science</p>
              </div>
              <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">GPA: 3.77</span>
            </div>

            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h4 className="font-bold text-gray-900">Maesariang Boripat Suksa School</h4>
                <p className="text-gray-500 text-sm">Math-Science Program</p>
              </div>
              <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">GPA: 2.97</span>
            </div>
          </div>

        

      </div>
    </section>
  );
}

export default Education;
