import { useState } from "react";
import { Paper, InputBase, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBoxProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  autoFocus?: boolean;
}

export default function SearchBox({
  placeholder = "Search anything…",
  onSearch,
  autoFocus = true,
}: SearchBoxProps) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value.trim()) {
      onSearch(value.trim());
    }
  };

  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        alignItems: "center",
        width: { xs: 280, sm: 360, md: 420 },
        px: 1.5,
        py: 0.5,
        borderRadius: 2,
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          fontSize: "1rem",
        }}
        placeholder={placeholder}
        value={value}
        autoFocus={autoFocus}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        inputProps={{ "aria-label": "search" }}
      />

      <Box>
        <IconButton onClick={handleSubmit} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}
