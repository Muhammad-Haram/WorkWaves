import React from "react";
import { Badge } from "./ui/badge";

const LatestJobsCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">Asyncz</h1>
        <p className="text-sm text-gray-500">Pakistan</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Mern Stack Developer</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error itaque
          ea quos exercitationem deserunt voluptatem laudantium ut numquam
          accusantium ipsam vero minima nisi adipisci aut et suscipit iure, ipsa
          facilis.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          12 Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          Full Time (9 to 5)
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          24LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobsCards;
