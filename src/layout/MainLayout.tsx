import { Outlet } from "react-router-dom";
import  FooterComponent  from "../components/Footer"
import { AppShell } from "@mantine/core";
import HeaderComponent from "../components/Header";
import { useDisclosure } from "@mantine/hooks";

export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      padding="md"
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      footer={{ height: 50 }}
    >
      <AppShell.Header>
        <HeaderComponent opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer>
        <FooterComponent
        courseName = "CPE207"
        year = "2025"
        fullName = "Sitiroj Hemlakpairoge"
        studentId = "670610739"
        />
      </AppShell.Footer>
    </AppShell>
  );
}
