import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constent";
import { setUser } from "../../redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  // const user = false;
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      console.log(user);
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

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
            <li className="cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/jobs">Jobs</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/browse">Browse</Link>
            </li>
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
                    <h4 className="user-name font-bold">{user?.fullname}</h4>
                    <p className="text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis asperiores culpa,
                    </p>
                  </div>
                </div>

                <div className="flex w-fit items-center gap-3 cursor-pointer">
                  <User2 />
                  <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                </div>

                <div className="flex w-fit items-center gap-3 cursor-pointer">
                  <LogOut />
                  <Button onClick={logoutHandler} variant="link">
                    Logout
                  </Button>
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
