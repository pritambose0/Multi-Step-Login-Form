import React from "react";
import { Input, Button } from "../components/index";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  chooseName,
  chooseUsername,
  chooseEmail,
  choosePassword,
} from "../../feature/rootSlice";

function Form({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.name);
  const username = useSelector((state) => state.username);
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: { username, name, email, password } });

  const onSubmit = (data) => {
    dispatch(chooseName(data.name));
    dispatch(chooseEmail(data.email));
    dispatch(chooseUsername(data.username));
    dispatch(choosePassword(data.password));
    navigate("/step2");
  };
  return (
    <>
      <form
        className="flex flex-col justify-start gap-7 w-[80%] lg:w-[50%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl font-extrabold text-gray-900">{children}</h1>

        <div className="flex gap-5">
          <div>
            <Input
              type="text"
              label="Name"
              placeholder="John"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />

            <label className="">
              {errors.name?.type === "required" && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div>
            <Input
              type="text"
              label="Username"
              placeholder="john123"
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is required",
                },
              })}
            />

            <label className="">
              {errors.username?.type === "required" && (
                <span className="text-sm text-red-500">
                  {errors.username.message}
                </span>
              )}
            </label>
          </div>
        </div>

        <div>
          <Input
            type="email"
            label="Email"
            placeholder="example@gmail.com"
            className="w-full"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
          />

          <label className="">
            {errors.email?.type === "required" && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        <div>
          <Input
            type="password"
            label="Password"
            placeholder="6+ characters"
            className="w-full"
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
              minLength: {
                value: 6,
                message: "Must be 6 characters or longer",
              },
            })}
          />

          <label className="">
            {errors.password?.type === "required" && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>

        <div className="flex justify-start items-start w-full gap-2">
          <input type="checkbox" className="mt-2 cursor-pointer" required />
          <p className="text-[13px] font-semibold text-textLight">
            Creating an account means you're okay with our{" "}
            <span className="text-textPrimary">
              Terms of service, Privacy Policy,
            </span>{" "}
            and our default{" "}
            <span className="text-textPrimary">Notification Settings.</span>
          </p>
        </div>

        <Button children="Create Account" type="submit" />

        <p className="text-[11px] text-textLight w-[70%]">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="text-textPrimary">Privacy Policy</span> and{" "}
          <span className="text-textPrimary">Terms of Service</span> apply.{" "}
        </p>
      </form>
    </>
  );
}

export default Form;
