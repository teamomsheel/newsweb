import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  return (
    <div className='p-4 bg-white'>
      <div className='flex '>
        <div className='w-[calc(100%-45px)] h-[45px]'>
          <input type="text" className='w-full h-full p-2 border border-slate-300 outline-none bg-slate-100' />

        </div>
        <div className='w-[45px] h-[45px] flex justify-center items-center bg-red-600 hover:bg-red-700 text-white text-xl'>
          <AiOutlineSearch />
        </div>

      </div>

    </div>
  )
}

export default Search

// "use client";


// import React, { useState } from 'react';
// import { AiOutlineSearch } from 'react-icons/ai';
// import axios from 'axios';

// const Search = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     if (!query.trim()) return;

//     try {
//       const { data } = await axios.get(`http://localhost:5000/api/news/search?title=${query}`);
//       setResults(data.news);
//     } catch (err) {
//       console.error("Search failed:", err);
//     }
//   };

//   return (
//     <div className='p-4 bg-white'>
//       <div className='flex mb-4'>
//         <div className='w-[calc(100%-45px)] h-[45px]'>
//           <input
//             type="text"
//             className='w-full h-full p-2 border border-slate-300 outline-none bg-slate-100'
//             placeholder='Search News...'
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//         </div>
//         <div
//           onClick={handleSearch}
//           className='w-[45px] h-[45px] flex justify-center items-center bg-red-600 hover:bg-red-700 text-white text-xl cursor-pointer'
//         >
//           <AiOutlineSearch />
//         </div>
//       </div>

//       {/* Display Results */}
//       <div>
//         {results.length > 0 ? (
//           results.map((news, i) => (
//             <div key={i} className="mb-2 p-2 border border-slate-300 rounded">
//               <p className='font-semibold'>{news.title}</p>
//               <p className='text-sm text-slate-600'>{news.category} - {news.date}</p>
//             </div>
//           ))
//         ) : (
//           query && <p className='text-slate-500'>No results found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Search;
