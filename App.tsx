import React from "react";
import {
  Button,
  Pressable,
  Box,
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  return (
    <NativeBaseProvider>
      <Box
        padding="1em">

        <HStack
          justifyContent="center"> 
          <Box>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true" 
              role="img"
              width="1.5em" 
              height="1.5em" 
              preserveAspectRatio="xMidYMid meet" 
              viewBox="0 0 24 24">
              <path fill="#fbc412" d="M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10Z"/>
              <path fill="#fbc412" fill-rule="evenodd" d="M12 1a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM3.293 3.293a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414Zm17.414 0a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 1 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0ZM1 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Zm19 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM6.207 17.793a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0Zm11.586 0a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414ZM12 20a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>
            </svg>          
          </Box>             
          <Box
            _text={{
              fontSize: "1.8em",
              fontWeight: "bold"
            }}>
            27
          </Box>
          <Box
            alignItems="flex-start">
            o
          </Box>     
          <Box
            _text={{
              fontSize: "1em",
              fontWeight: "bold",
              color: "#FBC412"
            }}
            alignSelf="flex-end">
            SUNNY
          </Box>
        </HStack>
        <HStack
          justifyContent="flex-end">
          <Pressable
            marginRight=".5em"
            bgColor="white"
            shadow={1}
            padding=".8em">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.8em" height="1.8em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71ZM16 10.68L13.32 8l1.95-2L18 8.73Z"/></svg>
          </Pressable>
          <Pressable
            marginRight=".5em"
            bgColor="white"
            shadow={1}
            padding=".8em">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.8em" height="1.8em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M3 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7.5a.5.5 0 0 0 0-1H3V2h7.5a.5.5 0 0 0 0-1H3Zm9.604 3.896a.5.5 0 0 0-.708.708L13.293 7H6.5a.5.5 0 0 0 0 1h6.793l-1.397 1.396a.5.5 0 0 0 .708.708l2.25-2.25a.5.5 0 0 0 0-.708l-2.25-2.25Z" clip-rule="evenodd"/></svg>
          </Pressable>
        </HStack>
        <Box>
          <HStack 
            flex={1}
            justifyContent="flex-start"
            shadow={1}
            borderRadius="1em"
            padding="1em">

            <Box    
              width = "100px"
              height = "100px"
              borderStyle="solid"
              borderColor="#000"
              borderWidth="1px">              
            </Box>
            <Box
              justifyContent="flex-start">
              <VStack>
                <Box
                _text={{
                  
                }}>
                  GOOD MORNING
                </Box>
    
              </VStack>
            </Box>
          </HStack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}

