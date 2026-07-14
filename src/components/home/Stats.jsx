import { FaUsers, FaCalendarAlt, FaNewspaper, FaProjectDiagram } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaUsers size={35} />,
    number: "200+",
    title: "Members",
  },
  {
    id: 2,
    icon: <FaCalendarAlt size={35} />,
    number: "50+",
    title: "Events",
  },
  {
    id: 3,
    icon: <FaNewspaper size={35} />,
    number: "100+",
    title: "News Posts",
  },
  {
    id: 4,
    icon: <FaProjectDiagram size={35} />,
    number: "40+",
    title: "Projects",
  },
];

function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-gray-50 p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-4 flex justify-center text-[#0B3C6F]">
              {item.icon}
            </div>

            <h2 className="text-4xl font-bold text-[#0B3C6F]">
              {item.number}
            </h2>

            <p className="mt-2 text-gray-600">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
