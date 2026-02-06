import { Box } from "@mui/material";
import { Header } from "../components/header";
import Footer from "../components/footer";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
