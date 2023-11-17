

import React, { useState } from "react";
import { Flex, Box, Image, Container, FormControl, Heading, Text, FormLabel, Input, Button } from "@chakra-ui/react";
import Navbar from "../Components/Navbar/Navbar";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const getData = async (email, password) => {
    
  };

  const handleClick = (e) => {
    e.preventDefault();
    getData(email, password);
  };

 
          
         
          return (
            <div >
              <Navbar showNavbar={true} isLoginPage={true} />
            < Flex height="100vh">
              {}
              <Box width="50%" display="flex" alignItems="center" justifyContent="center" style={{backgroundColor:'#ffeecc'}}>
                <Image
                  src="https://dashboard.airgarage.com/static/media/money_machine.d2da764d26972247316c.png"
                  alt="LOGO"
                  width="299px" 
                />
                
              </Box>
        
              {}
              <Container textAlign="center" alignItems="center" mt="10%" width="50%">
                <FormControl
                  isRequired
                  boxShadow="rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px"
                  border="none"
                  borderBottom="none"
                  borderRight="none"
                  borderRadius="10"
                  p="10"
                >
                  <Heading fontSize="20" fontFamily="Times New Roman, Times, serif">
                    Log in to AirGarage
                  </Heading>
                  <Text>Or Signup</Text>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="Email"
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormLabel>Password</FormLabel>
                  <Input
                    placeholder="Password"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button w="full" mt="10" onClick={handleClick}>
                    Submit
                  </Button>
                </FormControl>
                
              </Container>
            </Flex>
            </div>
          );
        };
        
        export default Login;