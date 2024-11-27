import { CheckCircle2, Clock, MoreVertical, Pencil } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

export function PatientDetail() {
  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback>WJ</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">Willie Jennie</h1>
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <Pencil className="h-4 w-4" />
              <span>Have unevent jawline</span>
              <Link href="#" className="text-blue-600">
                Edit
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Create Appointment
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="medical-record" className="mb-6">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="patient-info">Patient Information</TabsTrigger>
          <TabsTrigger value="appointment-history">
            Appointment History
          </TabsTrigger>
          <TabsTrigger value="next-treatment">Next Treatment</TabsTrigger>
          <TabsTrigger value="medical-record">Medical Record</TabsTrigger>
        </TabsList>

        <TabsContent value="medical-record">
          {/* Service Toggle */}
          <div className="mb-6">
            <ToggleGroup type="single" defaultValue="medical">
              <ToggleGroupItem value="medical">Medical</ToggleGroupItem>
              <ToggleGroupItem value="cosmetic">Cosmetic</ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="grid gap-6 md:grid-cols-[300px_1fr]">
            {/* Odontogram */}
            <Card>
              <CardContent className="p-4">
                <h3 className="mb-4 font-semibold">Odontogram</h3>
                <div className="bg-muted aspect-square rounded-lg p-4">
                  {/* Placeholder for dental chart - would be replaced with actual SVG implementation */}
                  <div className="text-muted-foreground flex h-full w-full items-center justify-center">
                    Dental Chart
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Treatment Records */}
            <div className="space-y-4">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 text-xs">
                  22
                </div>
                <h2 className="text-lg font-semibold">
                  Maxillary Left Lateral Incisor
                </h2>
              </div>

              {/* Completed Treatment */}
              <Card>
                <CardContent className="p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-muted-foreground text-sm">MEI</div>
                      <div className="text-xl font-semibold">03</div>
                    </div>
                    <Badge variant="outline" className="gap-1 text-green-500">
                      <CheckCircle2 className="h-3 w-3" />
                      Done
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-muted-foreground text-sm">
                        CONDITION
                      </div>
                      <div>Caries</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-sm">
                        TREATMENT
                      </div>
                      <div>Tooth filling</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-sm">
                        DENTIST
                      </div>
                      <div>Drg Soap Mactavish</div>
                    </div>
                  </div>
                  <div className="bg-muted mt-4 rounded-lg p-4">
                    <div className="text-muted-foreground flex items-center gap-2">
                      <Pencil className="h-4 w-4" />
                      Advanced Decay
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pending Treatment */}
              <Card>
                <CardContent className="p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-muted-foreground text-sm">APR</div>
                      <div className="text-xl font-semibold">12</div>
                    </div>
                    <Badge variant="outline" className="gap-1 text-yellow-500">
                      <Clock className="h-3 w-3" />
                      Pending
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-muted-foreground text-sm">
                        CONDITION
                      </div>
                      <div>Caries</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-sm">
                        TREATMENT
                      </div>
                      <div>Tooth filling</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-sm">
                        DENTIST
                      </div>
                      <div>Drg Soap Mactavish</div>
                    </div>
                  </div>
                  <div className="bg-muted mt-4 rounded-lg p-4">
                    <div className="text-muted-foreground flex items-center gap-2">
                      <Pencil className="h-4 w-4" />
                      Decay in pulp
                    </div>
                  </div>
                  <div className="mt-4 rounded-lg border p-4">
                    <div className="text-muted-foreground text-sm">
                      Reason: Not enough time
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
