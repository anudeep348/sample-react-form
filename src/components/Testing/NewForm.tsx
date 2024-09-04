import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormValues = {
  username: string;
  password: string;
  gender: string;
  email: string;
  interests: string[];
};

const NewForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="username">Name</Label>
        <Input {...register("username")} id="username" type="text" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input {...register("password")} id="password" type="password" />
      </div>
      <div>
        <div>
          <Label>Gender</Label>
          <div>
            <input
              {...register("gender")}
              id="male"
              type="radio"
              value="male"
            />
            <Label htmlFor="male">Male</Label>
          </div>
          <div>
            <input
              {...register("gender")}
              id="female"
              type="radio"
              value="female"
            />
            <Label htmlFor="female">Female</Label>
          </div>
          <div>
            <input
              {...register("gender")}
              id="other"
              type="radio"
              value="other"
            />
            <Label htmlFor="other">Other</Label>
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input {...register("email")} id="email" type="email" />
      </div>
      <div>
        <Label>Interests</Label>
        <div>
          <input
            {...register("interests")}
            id="coding"
            type="checkbox"
            value="coding"
          />
          <Label htmlFor="coding">Coding</Label>
        </div>
        <div>
          <input
            {...register("interests")}
            id="gaming"
            type="checkbox"
            value="gaming"
          />
          <Label htmlFor="gaming">Gaming</Label>
        </div>
        <div>
          <input
            {...register("interests")}
            id="reading"
            type="checkbox"
            value="reading"
          />
          <Label htmlFor="reading">Reading</Label>
        </div>
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default NewForm;
