import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import categories from "../categories";

const taskSchema = z.object({
  title: z.string().min(3, {message: "Title must be at least 3 characters"}).max(50, {message: "Title must be at most 50 characters"}),
  // dueDate: z.preprocess( arg => typeof arg == 'string' ? new Date( arg ) : undefined, z.date() ),
  dueDate: z.string().pipe(z.coerce.date()),
  category: z.enum(categories, {errorMap: () => ({message: "Select a category", }),}),
});

type TaskFormData = z.infer<typeof taskSchema>;

interface TaskProps {
  onSumbit : (data : TaskFormData) => void;
}

const TaskForm = ({onSumbit}) => {
  const {register, handleSubmit, reset, formState:{errors, isValid}} = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
  });

  const handleFormSubmit = (data : TaskFormData) => {
    onSumbit(data);
    reset();
  }

  return (
    <div className="w-screen">
      <div className="flex justify-center">
        <form className="bg-white shadow-md rounded px-20 pt-6 pb-8 mb-4" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="flex flex-col mb-4">
            <label htmlFor="title">Title</label>
            <input 
              {...register("title")}
              type="text"
              id="title"
              placeholder="Title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            {errors.title && <p>{errors.title.message}</p>}
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="dueDate">Due Date</label>
            <input 
              {...register("dueDate")}
              type="date"
              id="dueDate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            {errors.dueDate && <p>{errors.dueDate.message}</p>}
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="category">Category</label>
            <select {...register("category")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value=""></option>
              {categories.map((category) => (
                <option value={category}> {category}</option>
                ))}
            </select>
            {errors.category && <p>{errors.category.message}</p>}
          </div>

          {/* <button disabled={!isValid} className="btn" type="submit"> */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm
