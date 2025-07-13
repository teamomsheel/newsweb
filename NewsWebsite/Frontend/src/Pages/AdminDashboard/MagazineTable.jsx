import React, { useEffect, useState } from "react";
import { FiBookOpen, FiDownload, FiTrash2 } from "react-icons/fi";
import axios from "axios";

const MagazineTable = () => {
  const [magazines, setMagazines] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMagazines = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/magazine/all", { withCredentials: true });
      setMagazines(res.data.magazines || []);
    } catch (err) {
      console.error("Error fetching magazines", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteMagazine = async (id) => {
    if (!confirm("Are you sure to delete this magazine?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/magazine/delete/${id}`, { withCredentials: true });
      setMagazines((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  useEffect(() => {
    fetchMagazines();
  }, []);

  if (loading) return <p className="text-center p-4">Loading magazines...</p>;

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">All Uploaded Magazines</h2>
      <div className="overflow-auto rounded shadow">
        <table className="min-w-full text-sm text-center border-collapse border border-gray-200">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Uploaded By</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {magazines.map((magazine) => (
              <tr key={magazine._id} className="hover:bg-gray-50">
                <td className="p-3 border">{magazine.title}</td>
                <td className="p-3 border capitalize">{magazine.type}</td>
                <td className="p-3 border">{magazine.uploaderName || "Admin"}</td>
                <td className="p-3 border flex justify-around space-x-3">
                  <a href={magazine.fileUrl} target="_blank" rel="noopener noreferrer" title="Read" className="text-blue-600 hover:text-blue-800">
                    <FiBookOpen size={18} />
                  </a>
                  <a href={`http://localhost:5000/api/magazine/download/${magazine._id}`} title="Download" className="text-green-600 hover:text-green-800">
                    <FiDownload size={18} />
                  </a>
                  <button onClick={() => deleteMagazine(magazine._id)} title="Delete" className="text-red-600 hover:text-red-800">
                    <FiTrash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {magazines.length === 0 && (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No magazines uploaded yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MagazineTable;
