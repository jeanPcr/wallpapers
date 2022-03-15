import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "./theme.provider";
import NavigationProvider from "./navigationProvider";

const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
