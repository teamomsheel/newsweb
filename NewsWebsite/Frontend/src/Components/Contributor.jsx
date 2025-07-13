import React, { useState } from 'react';

const ContributorForm = () => {
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <form className="p-1 bg-white rounded shadow-md">
      <label className=" font-semibold">Select Contributor Category</label>
      <select
        value={category}
        onChange={handleChange}
        className="border border-gray-300 rounded px-1  w-full"
      >
        <option value="">-- Select Category --</option>
        <option value="student journalist">Student Journalist</option>
        <option value="journalist">Journalist</option>
        <option value="thought">Thought</option>
        <option value="founder thoughts">Founder Thoughts</option>
      </select>
    </form>
  );
};

export default ContributorForm;
