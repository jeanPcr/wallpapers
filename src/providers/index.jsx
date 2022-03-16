import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "./theme.provider";
import { ResearchProvider } from "./research.provider";
import NavigationProvider from "./navigation.provider";

const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ResearchProvider>
          <NavigationProvider>{children}</NavigationProvider>
        </ResearchProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
