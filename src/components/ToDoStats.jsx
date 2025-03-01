import { useTodoStore } from "../store/useTodoStore";
import { useThemeStore } from "../store/useThemeStore";

export const TodoStats = () => {
  const totalTodos = useTodoStore((state) => state.getTotalTodos());
  const completedTodos = useTodoStore((state) => state.getCompletedTodos());
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <div
      className={`flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm ${
        isDark ? "text-gray-200" : "text-gray-700"
      }`}
    >
      <p>Total tasks: {totalTodos}</p>
      <p>Completed: {completedTodos}</p>
      <p>Remaining: {totalTodos - completedTodos}</p>
    </div>
  );
};
