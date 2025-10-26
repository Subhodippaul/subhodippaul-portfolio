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
import { APP_CONSTANTS } from "@/constants";

export default function Education() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <section id="education" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-bold mb-6">{APP_CONSTANTS.EDUCATION.TITLE}</h2>

      <ItemGroup>
        {APP_CONSTANTS.EDUCATION.ITEMS.map((item) => (
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
                  className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 bg-amber-600 text-white hover:bg-amber-700 transition-all duration-300"
                >
                  {open[item.id] ? (
                    <>
                      {APP_CONSTANTS.COMMON.CLOSE} <ChevronUp className="h-4 w-4 transition-transform duration-300" />
                    </>
                  ) : (
                    <>
                      {APP_CONSTANTS.COMMON.OPEN} <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </ItemActions>
            </ItemHeader>

            <ItemContent>
              <p className="text-sm text-muted-foreground mb-2">
                {item.title} — {APP_CONSTANTS.COMMON.CLICK_FOR_DETAILS}
              </p>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open[item.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="mt-2 border-t pt-3 text-sm text-gray-700 dark:text-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    <div>
                      <div className="text-xs text-muted-foreground">{APP_CONSTANTS.EDUCATION.FIELDS.SCHOOL}</div>
                      <div className="font-medium">{item.school}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{APP_CONSTANTS.EDUCATION.FIELDS.YEARS}</div>
                      <div className="font-medium">{item.years}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{APP_CONSTANTS.EDUCATION.FIELDS.DEGREE}</div>
                      <div className="font-medium">{item.degree}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{APP_CONSTANTS.EDUCATION.FIELDS.BRANCH}</div>
                      <div className="font-medium">{item.branch}</div>
                    </div>
                  </div>
                </div>
              </div>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </section>
  );
}