import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';

const UploadResume = () => {
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Resume uploaded successfully!');
    // Add backend logic here
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-16">
      <div className="bg-white rounded-xl shadow-2xl p-10 max-w-xl w-full text-center border border-[#B6F500]/30">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Upload Your Resume</h2>

        <form onSubmit={handleSubmit}>
          <label className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-[#B6F500] p-6 rounded-xl hover:bg-[#F7FFE5] transition">
            <UploadCloud className="w-10 h-10 text-[#B6F500] mb-2" />
            <span className="text-[#B6F500] font-semibold">Click to browse</span>
            <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />
          </label>

          {fileName && (
            <p className="mt-4 text-sm text-gray-600">
              Selected File: <span className="font-medium text-black">{fileName}</span>
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full bg-[#B6F500] text-black font-semibold py-3 rounded-lg hover:bg-lime-400 transition"
          >
            Upload Resume
          </button>
        </form>
      </div>
    </section>
  );
};

export default UploadResume;
