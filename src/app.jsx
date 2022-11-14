import "./app.css";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const CONTACTS = [
  {
    Icon: FaFacebookF,
    color: "#0F92F3",
    link: "https://www.facebook.com/pqhuy2312/",
  },
  {
    Icon: FaYoutube,
    color: "#FF0000",
    link: "https://www.facebook.com/pqhuy2312/",
  },
  {
    Icon: IoMailSharp,
    color: "#1DB0F4",
    link: "mailto:pqhuy2312@gmail.com",
  },
  {
    Icon: AiFillGithub,
    color: "#24292F",
    link: "https://github.com/pqhuy2312",
  },
  {
    Icon: AiFillInstagram,
    color: "#CC145A",
    link: "https://github.com/pqhuy2312",
  },
  {
    Icon: FaTwitter,
    color: "#1C96E8",
    link: "https://github.com/pqhuy2312",
  },
];

export function App() {
  return (
    <div className="flex justify-center items-center shadown-md p-12 rounded border border-gray-500 shadow-md">
      <ul className="grid grid-cols-3 gap-4">
        {CONTACTS.map(({ Icon, color, link }, index) => (
          <li
            style={{ "--color": color }}
            className="p-[2px] rounded-full"
            key={index}
          >
            <a
              className="block w-20 h-20 relative z-10 group rounded-full overflow-hidden"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="social link"
            >
              <div className="flex absolute top-0 left-0 w-full h-full">
                <Icon
                  style={{ "--color": color }}
                  className={`text-4xl mx-auto m-auto contact-icon`}
                />
              </div>
              <div
                style={{
                  borderBottom: `1px solid ${color}`,
                  color,
                }}
                className={`absolute top-[-1px] left-0 h-0 w-full group-hover:h-[calc(100%+2px)] transition-all duration-700 overflow-hidden`}
              >
                <div className="pt-[100%] relative">
                  <div className="absolute w-full h-full flex top-[1px] left-0">
                    <Icon className={`text-4xl m-auto`} />
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
