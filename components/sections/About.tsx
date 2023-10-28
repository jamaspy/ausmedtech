import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="w-full flex flex-col md:flex-row p-8">
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-xl font-semibold mb-2">About AMTA</p>

        <p>
          Welcome to the Australasian Med Tech Association (AMTA), a vibrant
          community of innovators, manufacturers, and enterprises in the medical
          technology sector across Australia and the broader Australasian
          region. Our association stands as a beacon of support, knowledge, and
          networking opportunities for entities committed to advancing
          healthcare through cutting-edge medical devices and technology.
        </p>
        <p className="mt-4">
          Founded with the vision of fostering a collaborative ecosystem, AMTA
          provides a platform for members to navigate the dynamic landscape of
          medical technology. Our membership program is designed to fuel the
          exchange of ideas, industry knowledge, and best practices, ensuring
          our members are always a step ahead in the evolving medtech landscape.
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center mt-4 md:mt-0">
        <Image
          src="/office.jpg"
          alt="group working at whiteboard"
          width={600}
          height={600}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
