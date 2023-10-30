import React from "react";
import Image from "next/image";
import { LuBrainCircuit } from "react-icons/lu";
import { RiUserVoiceLine } from "react-icons/ri";
import { FaRegBell, FaRegCompass } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineInsights } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { PiPlant } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";

const data = [
  {
    id: 1,
    title: "Industry Voice",
    icon: <RiUserVoiceLine className="w-8 h-8 text-mint" />,
    body: "Amplify your influence in policy and decision-making arenas crucial to the MedTech sector. As a united front, AMTA engages with key stakeholders to ensure our members&lsquo; voices are heard, fostering a conducive environment for medtech innovation and growth.",
  },
  {
    id: 2,
    title: "Knowledge and Expertise",
    icon: <LuBrainCircuit className="w-8 h-8 text-mint" />,
    body: " Access a reservoir of specialized knowledge and analytical insights into healthcare and industry-related issues. Our member-exclusive webinars and strategic committees are designed to keep you abreast of major developments as they unfold.",
  },
  {
    id: 3,
    title: "Networking and Collaboration",
    icon: <HiOutlineUserGroup className="w-8 h-8 text-mint" />,
    body: "  Engage with a network of industry peers, experts, and decision-makers at our seminars, functions, and the AnnualConference - a melting pot of innovative ideas and strategies in the MedTech sphere.",
  },
  {
    id: 4,
    title: "Professional Development",
    icon: <PiPlant className="w-10 h-10 text-mint" />,
    body: "Elevate your team’s expertise through our professional development program, tailored to nurture a culture of continuous learning and excellence in the MedTech domain.",
  },
  {
    id: 5,
    title: "Early Alerts",
    icon: <FaRegBell className="w-8 h-8 text-mint" />,
    body: "Stay ahead with early notifications on legislative, regulatory, and policy changes, enabling you to adapt swiftly to the evolving industry landscape.",
  },
  {
    id: 6,
    title: "Industry Recognition",
    icon: <LiaIndustrySolid className="w-10 h-10 text-mint" />,
    body: "Participate in our annual Awards Program and stand a chance to be recognized for your contributions to the MedTech sector through accolades like the Excellence in MedTech Award.",
  },
  {
    id: 7,
    title: "Exclusive Discounts",
    icon: <FaSackDollar className="w-8 h-8 text-mint" />,
    body: "Enjoy member-only discounts to external conferences, expanding your learning and networking horizons while keeping your expenses in check.",
  },
  {
    id: 8,
    icon: <FaRegCompass className="w-8 h-8 text-mint" />,
    title: "Ethical Leadership",
    body: " Showcase your dedication to upholding the highest ethical standards in the industry by adhering to our Code of Practice, elevating your organization’s stature in the MedTech community.",
  },
  {
    id: 9,
    title: "Market Insights",
    icon: <MdOutlineInsights className="w-8 h-8 text-mint" />,
    body: "Gain exclusive access to industry intelligence, aiding in informed decision-making to propel your ventures forward in the MedTech arena.",
  },
];
const Benefits = () => {
  return (
    <div className="w-full p-8">
      <p className="text-xl font-semibold mb-4">Benefits of Membership</p>
      <p className="text-lg">
        Joining the Australasian Med Tech Association (AMTA) grants you a
        gateway to a community deeply ingrained in the pursuit of medical
        technological advancement across Australia and the wider region.
      </p>
      <div className="flex flex-row gap-8 mt-8">
        <div className="flex-1">
          <p className="font-semibold text-xl">
            Here’s what you stand to gain as a member of AMTA:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-start p-4 rounded-lg  border-2 border-mint"
              >
                <div className="flex flex-col w-full justify-start items-center">
                  <div className="mb-2">{item.icon}</div>
                  <p className="font-semibold mb-2 text-lg text-center">
                    {item.title}
                  </p>
                </div>
                <p className="text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 lg:flex items-center justify-center p-4 hidden bg-[url('../public/doc.jpg')] bg-cover bg-center ml-2 rounded-lg"></div>
      </div>
      <p className="mt-8 text-lg font-semibold">
        Embark on a journey of enhanced visibility, collaborative growth, and
        industry-leading expertise with AMTA. Your pathway to becoming a pivotal
        player in the medtech sector begins here. Contact us for more
        information or apply for membership to start reaping the benefits today.
      </p>
    </div>
  );
};

export default Benefits;
