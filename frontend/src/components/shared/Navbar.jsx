import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-[#037cb0] font-bold text-3xl navbar">
            Work <span className="text-[#5ec2e0]">Waves</span>
          </h1>
        </div>

        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5 link-list">
            <li className="cursor-pointer"><Link to="/">Home</Link></li>
            <li className="cursor-pointer"><Link to="/">Jobs</Link></li>
            <li className="cursor-pointer"><Link to="/">Browse</Link></li>
          </ul>

          {!user ? (
            <div>
              <Link to="/login">
                <Button className="mr-2 outline-[#037cb0]" variant="outline">
                  Login
                </Button>
              </Link>

              <Link to="/signup">
                <Button className="bg-[#037cb0] hover:bg-[#29728f]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-3 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>

                  <div>
                    <h4 className="user-name font-bold">Muhammad Haram</h4>
                    <p className="text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis asperiores culpa,
                    </p>
                  </div>
                </div>

                <div className="flex w-fit items-center gap-3 cursor-pointer">
                  <User2 />
                  <Button variant="link">View Profile</Button>
                </div>

                <div className="flex w-fit items-center gap-3 cursor-pointer">
                  <LogOut />
                  <Button variant="link">Logout</Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
