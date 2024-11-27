import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Breadcrumb as SBreadcrumb,
} from "~/components/ui/breadcrumb";

export function Breadcrumb() {
  return (
    <nav className="flex h-12 items-center px-4">
      <SBreadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Patient List</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Patient Detail</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </SBreadcrumb>
    </nav>
  );
}
