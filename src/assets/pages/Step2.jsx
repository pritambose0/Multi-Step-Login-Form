import React, { useState } from "react";
import { Logo } from "../images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCamera,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Input, Button } from "../components/index";
import { Link, useNavigate } from "react-router-dom";
import { chooseAvatar, chooseLocation } from "../../feature/rootSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function Step2() {
  const [selectedImage, setSelectedImage] = useState(null);
  const avatar = useSelector((state) => state.avatar);
  const location = useSelector((state) => state.location);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: { avatar, location } });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file);
      dispatch(chooseAvatar(file));
    } else {
      setSelectedImage(null);
      alert("Please select an image file.");
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const onSubmit = (data) => {
    dispatch(chooseLocation(data.location));
    navigate("/step2/step3");
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <form className="p-5 max-h-screen" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex gap-3 items-center">
          <Link to="/">
            <img className="w-24 m-3 ml-5" src={Logo} alt="logo" />
          </Link>
          <button
            children={
              <FontAwesomeIcon
                className="text-textLight text-sm"
                icon={faAngleLeft}
              />
            }
            className="w-12 h-10 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200 ease-in-out"
            onClick={handleClick}
          />
        </div>

        <div className="w-full md:w-[75%] lg:w-[60%] flex flex-col items-center md:items-start justify-start gap-10 p-4 mx-auto">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-black">
              Welcome! Let's create your profile
            </h1>
            <p className="text-base text-textLight">
              Let others know you better! You can do these later
            </p>
          </div>

          <div className="flex flex-col justify-start items-center md:items-start gap-5">
            <h3 className="text-lg font-black">Add an avatar</h3>

            <div className="flex items-center md:items-start flex-col md:flex-row gap-10 relative">
              <div className="rounded-full h-36 w-36 border-dashed border-2 border-gray-300 flex items-center justify-center">
                {selectedImage && (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                    className="overflow-hidden h-36 w-36 rounded-full"
                  />
                )}
                {selectedImage && (
                  <button
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-0"
                  >
                    ❌
                  </button>
                )}
                {!selectedImage && (
                  <FontAwesomeIcon icon={faCamera} className="text-gray-200" />
                )}
              </div>

              <div className="flex flex-col gap-5 items-center md:items-start">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="cursor-pointer"
                  placeholder="Choose image"
                />

                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon
                    className="text-textLight text-sm"
                    icon={faAngleRight}
                  />
                  <p className="text-sm text-textLight font-semibold cursor-pointer">
                    Or choose one of our defaults
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-center md:items-start gap-10 w-[70%] md:w-full">
            <h3 className="text-lg font-black">Add your location</h3>
            <div className="w-full">
              <Input
                type="text"
                placeholder="Enter a location"
                className="w-full bg-white rounded-none border-b-2 border-gray-200"
                {...register("location", {
                  required: {
                    value: true,
                    message: "Location is required",
                  },
                })}
              />

              <label className="">
                {errors.location?.type === "required" && (
                  <span className="text-sm text-red-500">
                    {errors.location.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <Button children="Next" type="submit" />

              <div className="flex justify-center items-center gap-1 mt-2">
                <p className="text-xs font-bold text-textLight">or Press</p>
                <Link to="/" className="text-xs font-bold text-textLight">
                  RETURN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Step2;
