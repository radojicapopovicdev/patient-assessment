import {
  Building2,
  Calendar,
  CreditCard,
  FileText,
  HelpCircle,
  LayoutDashboard,
  Package,
  Printer,
  Receipt,
  ShoppingCart,
  Stethoscope,
  Users,
  Users2,
  WalletCards,
} from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

/**
 * You should fetch this data from your API or another service, I can help you
 * with this if you need it.
 */
const clinic = {
  name: "Zendenta",
  location: {
    clinic: "Avicena Clinic",
    address: "845 Euclid Avenue, CA",
  },
};

export function MainSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="gap-4">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-blue-600">
                  {clinic.name}
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton size="sm" className="text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span className="text-sm">{clinic.location.clinic}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>CLINIC</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Calendar className="h-4 w-4" />
                  <span>Reservations</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <Users className="h-4 w-4" />
                  <span>Patients</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <FileText className="h-4 w-4" />
                  <span>Treatments</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Users2 className="h-4 w-4" />
                  <span>Staff List</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>FINANCE</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <WalletCards className="h-4 w-4" />
                  <span>Accounts</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Receipt className="h-4 w-4" />
                  <span>Sales</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <ShoppingCart className="h-4 w-4" />
                  <span>Purchases</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <CreditCard className="h-4 w-4" />
                  <span>Payment Method</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>PHYSICAL ASSET</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Package className="h-4 w-4" />
                  <span>Stocks</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Printer className="h-4 w-4" />
                  <span>Peripherals</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <FileText className="h-4 w-4" />
                  <span>Report</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HelpCircle className="h-4 w-4" />
                  <span>Customer Support</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
