import { textColor2 } from "@/utils/colors.utils";

export default function Stats() {
  const stats = [
    { id: 1, value: "500+", label: "Students Enrolled" },
    { id: 2, value: "30+", label: "Courses Available" },
    { id: 3, value: "40+", label: "Expert Instructors" },
    { id: 4, value: "96%", label: "Student Satisfaction" },
  ];
  return (
    <div className="mx-auto lg:w-3/4 md:h-30 sm:p-10 p-2 grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center my-10">
      {stats.map((stat) => {
        return (
          <div key={stat.id} className="w-full">
            <h4
              className={`font-extrabold ${textColor2} sm:text-4xl text-3xl text-center tracking-tighter`}
            >
              {stat.value}
            </h4>
            <p
              className={`font-semibold text-center sm:text-sm text-xs ${textColor2} tracking-tight`}
            >
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
