import React from "react";
import "../../sass/4. CTA/_cta.scss";
import { useForm } from "react-hook-form";

function CTA() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    <p className="cta__submit-text-valid">Thanks! Please check your inbox</p>;
  };

  return (
    <div className="cta__section">
      <div className="cta">
        <h2>Get early access today</h2>
        <p>
          {" "}
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.{" "}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="email"
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            placeholder="Please enter an email address"
          />
          <div className="cta__submit">
            {errors.email && (
              <p className="cta__submit-text-error">
                Please enter a valid email address
              </p>
            )}
          </div>
          <button className="button" type="submit">
            <h4>Get Started For Free</h4>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CTA;
