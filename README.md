### The project is developed using the following technologies:

- React
- typescript
- React-hook-form
- shadcn-ui
- zod
- react-hot-toast

### The project is deployed on Netlify and can be accessed [here](https://form-validation-rose.vercel.app/)

# To use react hook form with zod follow the steps below:

1. Install the following packages:

- `pnpm install react-hook-form zod @hookform/resolvers`

2. create your zod schema in lib folder (for better file structure).

```typescript
import { z } from "zod";

export const LoginValidator = z.object({
  name: z
    .string()
    .min(3, { message: "name nust have atleast 3 chars" })
    .max(255, { message: "name nust have atmost 255 chars" })
  email: z.string().email({ message: "invalid email" }),
  password: z
    .string()
    .min(8, { message: "password must have atleast 8 chars" })
    .max(20, { message: "password must have atmost 20 chars" }),
});

export type TLoginType = z.infer<typeof LoginValidator>;
```

3. Firstly add the zod schema **resolver** in the **useForm** hook.

```typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginValidator } from "./lib/zodSchema";
import { useForm } from "react-hook-form";

const Form = () => {
  const form = useForm<TLoginType>({
    resolver: zodResolver(LoginValidator),
  });
};

export default Form;
```

3. then **register** all the form fields in the form component using **useForm** provided by react hook form.

```typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginValidator } from "./lib/zodSchema";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register } = useForm<TLoginType>({
  resolver: zodResolver(formValidators),
});

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      <input {...register("email")} />
      <input {...register("password")} />
      <button type="submit">Submit</button>
    </form>
  );
};

export defualt Form;
```

4. Now to handle the errors use the **formState: {errors}** provided by react hook form to check and display error messages. The message can be accessed using **errors.fieldName.message**. This message are the one we provided by zod schema.

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginValidator } from "./lib/zodSchema";

const Form = () => {
  const {
    register,
    formState: { errors },
  } = useForm<TLoginType>({
    resolver: zodResolver(LoginValidator),
  });
  return (
    <form>
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
```

5. To sucessfully submit the form use the **handleSubmit** function provided by react hook form. This function will validate the form and if the form is valid it will call the **onSubmit** function.

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginValidator } from "./lib/zodSchema";

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
```

You can see your data in the console when the form is submitted.

The above code can be found in the **src/components/testing/ReadmeExample.tsx**.
