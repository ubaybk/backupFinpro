import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import Logout from "../../components/logout";
import { getLoginUserContext } from "../../context/GetLoginUserContextProvider";
import Layout from "../../components/layout";
import usePhotoDefault from "../../hooks/usePhotoDefault";

const Dashboard = () => {
  // const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const apiKey = import.meta.env.VITE_API_KEY;
  const defaultPhoto = usePhotoDefault();

  const { dataUserLogin } = useContext(getLoginUserContext);
  const userId = dataUserLogin.id
  console.log("ini buat dashboar data login", dataUserLogin.id);

  const [post, setPost] = useState([]);
  const [totalPost, setTotalPost] = useState([]);

  const [dataUser, setDataUser] = useState([]);

  const [logOut, setLogOut] = useState(false);

  const [idDataUser, setIdDataUser] = useState('')

  const handleLogout = () => {
    setLogOut(!logOut);
  };

  const getUser = () => {
    axios
      .get(
        `https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/user`,
        {
          headers: {
            "Content-Type": "application/json",
            apiKey: apiKey,
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log('ini GETUSER ERIK',res.data.data)
        setIdDataUser(res.data.data)

      })
      .catch((err) => console.log(err));
  };

  const getPost = () => {
    console.log('ini post erikson', post)
    axios
      .get(
        `https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/users-post/${idDataUser.id}?size=100&page=1`,
        {
          headers: {
            "Content-Type": "application/json",
            apiKey: apiKey,
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setPost(res.data.data.posts);
        setTotalPost(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  

  const getUserById = () => {
    axios
      .get(
        `https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/user/${idDataUser.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            apiKey: apiKey,
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setDataUser(res.data.data);
      })
      .catch((err) => console.error(err));
  };
  console.log("ini post", post);
  console.log("ini total", totalPost);
  console.log("ini user", dataUser);

  

  useEffect(() => {
    if (idDataUser.id) {
      getPost();
      getUserById();
      

    }
    getUser()
  }, [idDataUser.id]);

  return (
    <>
      <Layout>
        <div className="flex flex-col md:ml-40  min-h-screen">
          <div className="p-3">
            <div className="gap-2 mb-1 flex items-center md:hidden">
              <img
                src="./img/ubaypix-logo.png"
                alt="UbayPix Logo"
                className=" w-[150px] md:w-[300px]" // Sesuaikan ukuran gambar
              />
              <FaAngleDown
                onClick={handleLogout}
                className="text-green-500 md:hidden cursor-pointer"
              />
              {logOut && <Logout />}
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-center">
                  <div>
                    {idDataUser && idDataUser.profilePictureUrl && (
                      <img
                        src={idDataUser.profilePictureUrl || defaultPhoto} onError={(e) => {
                          e.target.src = defaultPhoto;
                        }}
                        className="w-[70px] h-[70px] object-cover rounded-full"
                        alt=""
                      />
                    )}
                  </div>
                  <div className="flex gap-5">
                    <div>
                      <h1>{totalPost.totalItems}</h1>
                      <p>postingan</p>
                    </div>
                    <Link to={"/myfollowers"}>
                      <div>
                        <h1>{idDataUser.totalFollowers}</h1>
                        <p>pengikut</p>
                      </div>
                    </Link>
                    <Link to={"/myfollowing"}>
                      <div>
                        <h1>{idDataUser.totalFollowing}</h1>
                        <p>mengikuti</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="">
                  <h1>{idDataUser.name}</h1>
                  <p className="text-gray-400">@{idDataUser.username}</p>
                  <p>{idDataUser.bio}</p>

                  <p>
                    <a
                      href={idDataUser.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {idDataUser.website}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-1 mb-36">
              {post.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Link to={`/detailpost/${idDataUser.id}`}>
                    <img
                      src={item.imageUrl || defaultPhoto}
                      onError={(e) => {
                        e.target.src = defaultPhoto;
                      }}
                      className="w-56 h-60 object-cover"
                      alt=""
                    />
                    {/* <h1>{item.caption}</h1> */}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Dashboard;
