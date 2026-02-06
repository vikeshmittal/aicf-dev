import { Box, CssBaseline, Container } from "@mui/material";

import SearchBox from "./search-box";
import { AppLayout } from "./layout/app-layout";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <AppLayout>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="calc(100vh - 64px - 47px)"
          >
            <SearchBox
              onSearch={(query) => {
                console.log("User searched:", query);
                // Trigger AICF intent → AI → view composition
              }}
            />
          </Box>
        </AppLayout>
      </Container>
    </>
  );
}
