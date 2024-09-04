import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

export const LoginValidator = z.object({
  name: z
    .string()
    .min(3, { message: "name nust have atleast 3 chars" })
    .max(255, { message: "name nust have atmost 255 chars" }),
  email: z.string().email({ message: "invalid email" }),
  password: z
    .string()
    .min(8, { message: "password must have atleast 8 chars" })
    .max(20, { message: "password must have atmost 20 chars" }),
});

export type TLoginType = z.infer<typeof LoginValidator>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginType>({
    resolver: zodResolver(LoginValidator),
  });
  const onSubmit = (data: TLoginType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}

      <input {...register("password")} />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
