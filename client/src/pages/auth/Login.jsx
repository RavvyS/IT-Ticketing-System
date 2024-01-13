import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

import AuthNavbar from "../../components/common/AuthNavbar";

import { toast } from "sonner";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    await login(email, password);
    
  };

  return (
    <div>
      <AuthNavbar />
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <h1 className="mb-5 text-center text-7xl font-black leading-none text-gray-900 select-none">
            SaberDesk<span className="text-indigo-600">.</span>
          </h1>
          <Card className="w-96">
            <CardBody>
              <p className="text-center text-gray-500 mb-5">Welcome back!</p>
              <FormControl className="mb-2">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </FormControl>

              <FormControl className="mb-5">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />

                <FormHelperText>
                  <a href="#" className=" hover:underline">
                    Forgot password?
                  </a>
                </FormHelperText>
              </FormControl>
              {/* #4F46E5 */}
              <Button
                colorScheme="purple"
                className="w-full"
                disabled={isLoading}
                type="submit"
              >
                Log-In
              </Button>
            </CardBody>

            <Box position="relative" padding="3">
              <Divider />
              <AbsoluteCenter bg="white" px="4" className="text-xs">
                Dont have an account ?
              </AbsoluteCenter>
            </Box>

            <CardFooter className="flex justify-center">
              <a href="/signup">
                <Button colorScheme="gray">Sign-Up</Button>
              </a>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default Login;
