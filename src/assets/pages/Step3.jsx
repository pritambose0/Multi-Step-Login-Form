import React from "react";
import { Logo, Ilus1, Ilus2, Ilus3 } from "../images/index";
import Card from "../components/Card";
import { Button } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Step3() {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/step2/step3/finalstep");
  };

  const handleClick = () => {
    navigate("/step2");
  };
  return (
    <>
      <form
        className="p-5 max-h-screen w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
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

        <div className="w-full md:w-[75%] lg:w-[60%] flex flex-col items-center justify-center gap-10 p-5 mx-auto">
          <div className="flex items-center flex-col gap-2 mb-10">
            <h1 className="text-3xl font-black">
              What brings you to Dribbble?
            </h1>
            <p className="text-base text-textLight">
              Select the options that best describe you. Don't worry, you can
              explore other options later.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:flex-nowrap gap-8 md:gap5">
            <Card
              imgSrc={Ilus1}
              label="I'm a designer looking to share my work"
              content="With over7 million shots from avast community of designers, Dribbble is the leading source for design inspiration"
            />

            <Card
              imgSrc={Ilus2}
              label="I'm looking to hire a designer"
              content="With over7 million shots from avast community of designers, Dribbble is the leading source for design inspiration"
            />

            <Card
              imgSrc={Ilus3}
              label="I'm looking for design inspiration"
              content="With over7 million shots from avast community of designers, Dribbble is the leading source for design inspiration"
            />
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-bold text-sm mb-4">
              Anything else? You can select multiple
            </h3>

            <Button children="Finish" type="submit" />

            <div className="flex justify-center items-center gap-1 mt-2">
              <p className="text-xs font-bold text-textLight">or Press</p>
              <Link to="/step2" className="text-xs font-bold text-textLight">
                RETURN
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Step3;
