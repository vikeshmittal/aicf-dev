import { CssBaseline, Container } from "@mui/material";

import { AppLayout } from "./layout/app-layout";

import routes from "./routes";
import { RouterProvider } from "react-router";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <AppLayout>
          <RouterProvider router={routes} />,
        </AppLayout>
      </Container>
    </>
  );
}
