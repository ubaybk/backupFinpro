import { useContext, useState } from "react";
import NavbarFollow from "../../components/navbarFolow";
import { followersContext } from "../../context/FollowersContextProvider";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import usePhotoDefault from "../../hooks/usePhotoDefault";

const MyFollowers = () => {
  const dataMyFollowers = useContext(followersContext);
  const defaultPhoto = usePhotoDefault()

  // console.log("ini followers context", dataMyFollowers.dataMyfollowers);

  return (
    <>
    <Layout>
      <div className="px-2 md:w-[700px] md:ml-40">
        <NavbarFollow />

        <div className="mb-32 mt-5 flex flex-col gap-4">
          {dataMyFollowers?.dataMyfollowers?.data?.users?.map((item, index) => (
            <div key={index}>
              <div className="flex items-center gap-3">
                <img
                  src={item.profilePictureUrl || defaultPhoto}  onError={(e) => {
                    e.target.src = defaultPhoto;
                  }}
                  alt={item.username}
                  className="w-10 h-10 rounded-full"
                />
                <Link to={`/detailuser/${item.id}`}>
                <div>
                  <h1>{item.username}</h1>
                  <p className="text-[12px] text-slate-500">{item.email}</p>
                </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </Layout>
    </>
  );
};

export default MyFollowers;
