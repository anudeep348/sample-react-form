import { useForm } from "react-hook-form";

function MyForm() {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(() => console.log("submitted"))}>
      <label>
        <input type="checkbox" {...register("agreeToTerms")} />
        Agree to Terms
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
