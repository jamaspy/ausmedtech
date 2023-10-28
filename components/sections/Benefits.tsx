import React from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Industry Voice",
    body: "Amplify your influence in policy and decision-making arenas crucial to the medtech sector. As a united front, AMTA engages with key stakeholders to ensure our members&lsquo; voices are heard, fostering a conducive environment for medtech innovation and growth.",
  },
  {
    id: 2,
    title: "Knowledge and Expertise",
    body: " Access a reservoir of specialized knowledge and analyticalinsights into healthcare and industry-related issues. Ourmember-exclusive webinars and strategic committees are designed to keep you abreast of major developments as they unfold.",
  },
  {
    id: 3,
    title: "Networking and Collaboration",
    body: "  Engage with a network of industry peers, experts, anddecision-makers at our seminars, functions, and the AnnualConference - a melting pot of innovative ideas and strategies in the medtech sphere.",
  },
  {
    id: 4,
    title: "Professional Development",
    body: "Elevate your team’s expertise through our professional development program, tailored to nurture a culture of continuous learning and excellence in the medtech domain.",
  },
  {
    id: 5,
    title: "Early Alerts",
    body: "Stay ahead with early notifications on legislative, regulatory, and policy changes, enabling you to adapt swiftly to the evolving industry landscape.",
  },
  {
    id: 6,
    title: "Industry Recognition",
    body: "Participate in our annual Awards Program and stand a chance to berecognized for your contributions to the medtech sector through accolades like the Excellence in MedTech Award.",
  },
  {
    id: 7,
    title: "Exclusive Discounts",
    body: "Enjoy member-only discounts to external conferences, expanding your learning and networking horizons while keeping your expenses in check.",
  },
  {
    id: 8,
    title: "Ethical Leadership",
    body: " Showcase your dedication to upholding the highest ethical standards in the industry by adhering to our Code of Practice, elevating your organization’s stature in the medtech community.",
  },
  {
    id: 9,
    title: "Market Insights",
    body: "Gain exclusive access to industry intelligence, aiding in informed decision-making to propel your ventures forward in the medtech arena.",
  },
];
const Benefits = () => {
  return (
    <div className="p-8">
      <p className="text-xl font-semibold mb-4">Benefits of Membership</p>
      <p className="text-lg">
        Joining the Australasian Med Tech Association (AMTA) grants you a
        gateway to a community deeply ingrained in the pursuit of medical
        technological advancement across Australia and the wider region.
      </p>
      <div className="flex flex-row mt-8">
        <div className="flex-1">
          <p className="font-semibold text-xl">
            Here’s what you stand to gain as a member of AMTA:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-start p-4 rounded-lg shadow-md bg-gradient-to-br from-navy to-sky-700 text-white"
              >
                <p className="font-semibold mb-2 text-lg">{item.title}</p>
                <p className="text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 lg:flex items-center justify-center p-4 hidden">
          <Image
            src="/group.jpg"
            alt="group working at whiteboard"
            width={800}
            height={800}
            className="rounded-lg"
          />
        </div>
      </div>
      <p className="mt-4 text-lg">
        Embark on a journey of enhanced visibility, collaborative growth, and
        industry-leading expertise with AMTA. Your pathway to becoming a pivotal
        player in the medtech sector begins here. Contact us for more
        information or apply for membership to start reaping the benefits today.
      </p>
    </div>
  );
};

export default Benefits;
