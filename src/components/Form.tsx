import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { formValidator, FormValues } from "../lib/formValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "../lib/utils";
import { Label } from "@radix-ui/react-label";
import toast from "react-hot-toast";


const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formValidator),
  });

  const onSubmit = handleSubmit((data: FormValues) => {
    if (data.terms === false) {
      return toast.error("You should accept terms & conditions");
    }
    toast.success("Form submitted successfully");
    console.log(data);
  });

  return (
    <div className="w-11/12 md:w-3/4 xl:w-2/4 xl:max-w-4xl mx-auto xl:h-100 bg-gray-50 m-0 md:m-16 p-6 md:p-12 md:px-20 rounded-2xl border">
      <form onSubmit={onSubmit}>
        <h2 className="text-2xl font-bold mb-8">Contact Us</h2>

        <div className="lg:flex lg:flex-1 w-full gap-4">
          <div className="w-full mb-4">
            {/* First Name */}
            <Label
              className={cn(
                "text-sub-grey-2 font-normal tracking-wide text-sm"
              )}
              htmlFor="firstname"
            >
              First Name
              {"  "}
              <span className="-mt-3 text-base text-main-green-2">*</span>
            </Label>
            <Input
              id="firstname"
              type="text"
              className={cn(
                "w-full p-5 border-[1px] border-sub-grey-1 rounded-lg",
                {
                  "border-red-500 focus-visible:ring-0": errors.firstname,
                }
              )}
              {...register("firstname", { required: true })}
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm mt-2">
                {errors.firstname.message}
              </p>
            )}
          </div>

          <div className="w-full mb-4">
            {/* Last Name */}
            <Label
              className={cn(
                "text-sub-grey-2 font-normal tracking-wide text-sm"
              )}
              htmlFor="lastname"
            >
              Last Name
              {"  "}
              <span className="-mt-3 text-base text-main-green-2">*</span>
            </Label>

            <Input
              id="lastname"
              type="text"
              {...register("lastname", { required: true })}
              className={cn(
                "w-full p-5 border-[1px] border-sub-grey-1 rounded-lg",
                {
                  "border-red-500 focus-visible:ring-0": errors.lastname,
                }
              )}
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm mt-2">
                {errors.lastname.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <Label
            className={cn("text-sub-grey-2 font-normal tracking-wide text-sm")}
            htmlFor="email"
          >
            Email
            {"  "}
            <span className="-mt-3 text-base text-main-green-2">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email", { required: true })}
            className={cn(
              "w-full p-5 border-[1px] border-sub-grey-1 rounded-lg",
              {
                "border-red-500 focus-visible:ring-0": errors.email,
              }
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
          )}
        </div>

        {/* Radio Group */}
        <div className="mb-4">
          <Label
            className={cn("text-sub-grey-2 font-normal tracking-wide text-sm")}
          >
            Radio Group
            {"  "}
            <span className="-mt-3 text-base text-main-green-2">*</span>
          </Label>

          {/* Radio Group Options */}
          <div
            id="radiogroup"
            className="flex flex-col lg:w-full gap-4 md:flex-row"
          >
            <div className="flex w-full items-center border border-sub-grey-1 rounded-lg ">
              <Input
                type="radio"
                value="general"
                className={cn("w-6 bg-inherit outline-none border-none mx-4", {
                  "border-red-500 focus-visible:ring-0": errors.querytype,
                })}
                id="general"
                {...register("querytype")}
              />

              <Label
                className={cn(
                  "w-full block text-sm font-light tracking-wide p-3"
                )}
                htmlFor="general"
              >
                General Enquiry
              </Label>
            </div>

            <div className="flex w-full items-center border-[1px] border-sub-grey-1 rounded-lg">
              <Input
                className={cn(
                  "w-6 mx-4 bg-none border-[1px] border-main-green-2 rounded-lg",
                  {
                    "border-red-500 focus-visible:ring-0": errors.querytype,
                  }
                )}
                type="radio"
                value="support"
                id="support"
                {...register("querytype")}
              />
              <Label
                className={cn(
                  "w-full block text-sm font-light tracking-wide p-3"
                )}
                htmlFor="support"
              >
                Support Request
              </Label>
            </div>
          </div>
          {errors.querytype && (
            <p className="text-red-500 text-sm mt-2">
              {errors.querytype.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="mb-4">
          <Label
            className={cn("text-sub-grey-2 font-normal tracking-wide text-sm")}
            htmlFor="message"
          >
            Message
            {"  "}
            <span className="-mt-3 text-base text-main-green-2">*</span>
          </Label>

          <Textarea
            rows={5}
            id="message"
            className={cn("border-sub-grey-1", {
              "border-red-500 focus-visible:ring-0": errors.message,
            })}
            {...register("message", { required: true })}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-2">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Terms & conditions */}
        <div className="flex items-center gap-2 p-2 mb-4">
          <Input
            type="checkbox"
            {...register("terms", { required: true })}
            className={cn(
              "w-6 bg-none border-[1px] border-main-green-2 rounded-lg"
            )}
            id="terms"
          />
          <Label
            className={cn("text-sub-grey-2 font-normal tracking-wide text-sm")}
            htmlFor="terms"
          >
            I consent to being contacted by the team
            {"  "}
            <span className="-mt-3 text-base text-main-green-2">*</span>
          </Label>
        </div>

        {/* Submit button */}
        <div className="w-full mb-4">
          <Button
            type="submit"
            className="w-full p-6 bg-main-green-2 font-bold hover:bg-emerald-500 tracking-wide"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
