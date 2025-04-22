import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material/styles";

// ** Hook Import
import { useSettings } from "src/@core/hooks/useSettings";
import LandingLayout from "src/@core/layouts/LandingLayout";

const MainLandingLayout = ({ children }: { children: React.ReactNode }) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings();

  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <LandingLayout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
    >
      {children}
    </LandingLayout>
  );
};

export default MainLandingLayout;
