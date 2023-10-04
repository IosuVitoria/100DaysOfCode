
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Rightbar from "./components/Rightbar/Rightbar";
import { Box, Container, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Stack direction={"row"} spacing={3} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App;
