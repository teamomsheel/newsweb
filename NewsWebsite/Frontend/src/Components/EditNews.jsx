
import React, { useState ,useRef, useContext, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import {MdCloudUpload} from "react-icons/md";
import JoditEditor from "jodit-react";
import Gallary from "./Gallary";
import axios from "axios";
import StoreContext from "../Context/StoreContext.js";
import toast from "react-hot-toast";

const EditNews = () => {
  const {news_id}=useParams()
  const { store } = useContext(StoreContext);
  const [show, setShow] = useState(false);
  const editor = useRef(null);

  const [old_image,set_old_image]=useState("")
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState();
  const [loader, setLoader] = useState(false);

  const handleImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      setImg(URL.createObjectURL(files[0]));
      setImage(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("new_image", image);
    formData.append("old_image",old_image)

    try {
      setLoader(true);
      const { data } = await axios.put(`https://newsweb-k4pv.onrender.com/api/news/update/${news_id}`, formData, {
        headers: {
          Authorization: `Bearer ${store.token}`,
        },
      });
      setLoader(false);
      toast.success(data.message);
    } catch (error) {
      setLoader(false);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const [images, setImages] = useState([]);
  const [imagesLoader, setImagesLoader] = useState(false);

  const get_images = async () => {
    try {
      const { data } = await axios.get("https://newsweb-k4pv.onrender.com/api/images", {
        headers: {
          Authorization: `Bearer ${store.token}`,
        },
      });
      setImages(data.images);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_images();
  }, []);

  const imageHandle = async (e) => {
    const files = e.target.files;

    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
      setImagesLoader(true);

      const { data } = await axios.post("https://newsweb-k4pv.onrender.com/api/images/add", formData, {
        headers: {
          Authorization: `Bearer ${store.token}`,
        },
      });

      setImagesLoader(false);
      setImages([...images, ...data.images]);
      toast.success(data.message);
    } catch (error) {
      setImagesLoader(false);
      toast.error(error.response?.data?.message || "Upload failed");
    }
  };

  const get_news=async()=>{
    try {
        const {data}=await axios.get(`https://newsweb-k4pv.onrender.com/api/news/${news_id}`,{
            headers:{
                Authorization:`Barer ${store.token}`
            }

        })
        setTitle(data?.news?.title)
        setDescription(data?.news?.description)
        setImg(data?.news?.image)
        set_old_image(data?.news?.image)
    } catch (error) {
        console.log(error.message)
        
    }
  }

  useEffect(()=>{
    get_news()

  },[])

  return (
    <div className="bg-slate-200 rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">Add News</h2>
        <Link
          className="px-3 py-[6px] bg-white rounded-sm text-black hover:bg-purple-600 hover:text-white"
          to="/dashboard/news"
        >
          News
        </Link>
      </div>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-2 mb-6">
            <label className="text-md font-medium text-black" htmlFor="title">
              Headline
            </label>
            <input
              type="text"
              placeholder="News Title"
              name="title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="px-3 py-2 rounded-md outline-0 border border-black focus:border-green-500 h-10"
              id="title"
            />
          </div>
          <div className="mb-6">
            <div>
              <label
                htmlFor="mainImg"
                className="w-full h-[460px] outline outline-1 outline-dashed rounded text-slate-700 gap-2 justify-center flex items-center cursor-pointer border-2 border-dashed"
              >
                {img ? (
                  <img src={img} className="w-full h-full" alt="image" />
                ) : (
                  <div className="flex justify-center items-center flex-col gap-y-2">
                    <span className="text-2xl">
                      <MdCloudUpload />
                    </span>
                    <span>Select Image</span>
                  </div>
                )}
              </label>
              <input
                // required
                onChange={handleImage}
                className="hidden"
                type="file"
                id="mainImg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mb-6">
            <div className="flex justify-start items-center gap-x-2">
              <h2>Description</h2>
              <div onClick={() => setShow(true)}>
                <span className="text-2xl cursor-pointer">
                  <MdCloudUpload />
                </span>
              </div>
            </div>
            <div>
              <JoditEditor
                ref={editor}
                value={description}
                tabIndex={1}
                onBlur={(value) => setDescription(value)}
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              disabled={loader}
              className="px-3 py-[6px] bg-white rounded-sm text-black hover:bg-purple-800 hover:text-white"
            >
              {loader ? "Loading..." : "Update News"}
            </button>
          </div>
        </form>
      </div>
      <input onChange={imageHandle} type="file" multiple id="images" className="hidden" />
      {show && <Gallary setShow={setShow} images={images} imageHandle={imageHandle} />}
    </div>
  );
};

export default EditNews;
