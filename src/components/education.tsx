import { useState } from "react";
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemActions,
  ItemGroup,
  ItemHeader,
  ItemMedia,
} from "@/components/ui/item";
import { ChevronDown, ChevronUp, School } from "lucide-react";

const educationData = [
  {
    id: "secondary",
    title: "Secondary Education",
    school: "Ushumpure Adarsha Uchcha Vidyalaya",
    years: "2010 - 2012",
    degree: "Secondary Certificate",
    branch: "General",
  },
  {
    id: "higher-secondary",
    title: "Higher Secondary",
    school: "XYZ Higher Secondary School",
    years: "2012 - 2014",
    degree: "Higher Secondary Certificate",
    branch: "Science",
  },
  {
    id: "graduation",
    title: "Graduation",
    school: "State University",
    years: "2014 - 2018",
    degree: "Bachelor of Technology",
    branch: "Computer Science",
  },
];

export default function Education() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <section id="education" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-bold mb-6">Education</h2>

      <ItemGroup>
        {educationData.map((item) => (
          <Item
            variant={"outline"}
            key={item.id}
            className="mb-4 shadow-md rounded-lg p-4 bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <ItemHeader>
              <div className="flex items-center gap-3">
                <ItemMedia className="text-amber-600">
                  <School className="h-5 w-5 text-amber-600" />
                </ItemMedia>
                <ItemTitle>{item.title}</ItemTitle>
              </div>

              <ItemActions>
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 bg-amber-600 text-white hover:bg-amber-700"
                >
                  {open[item.id] ? (
                    <>
                      Close <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Open <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </button>
              </ItemActions>
            </ItemHeader>

            <ItemContent>
              <p className="text-sm text-muted-foreground mb-2">
                {item.title} — click open to view details.
              </p>

              {open[item.id] && (
                <div className="mt-2 border-t pt-3 text-sm text-gray-700 dark:text-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    <div>
                      <div className="text-xs text-muted-foreground">School</div>
                      <div className="font-medium">{item.school}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Years</div>
                      <div className="font-medium">{item.years}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Degree</div>
                      <div className="font-medium">{item.degree}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Branch</div>
                      <div className="font-medium">{item.branch}</div>
                    </div>
                  </div>
                </div>
              )}
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </section>
  );
}