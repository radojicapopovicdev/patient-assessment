import { Breadcrumb } from "~/app/_components/breadcrumb";
import { Header } from "~/app/_components/header";
import { PatientDetail } from "~/app/_components/patient-detail";
import { MainSidebar } from "~/components/main-sidebar";
import { Separator } from "~/components/ui/separator";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <MainSidebar />

      <SidebarInset>
        <Header />
        <Separator />

        <Breadcrumb />
        <Separator />

        <PatientDetail />
      </SidebarInset>
    </SidebarProvider>
  );
}
