import { useForm } from "react-hook-form";

function MyForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Will log the form data, including the checkbox value
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input type="checkbox" {...register("agreeToTerms")} />
        Agree to Terms
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
