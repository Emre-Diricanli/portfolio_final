import { File, Folder, Tree } from "./file-tree";

export function FileTree() {
  return (
    <div className="relative flex h-auto w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg ">
      <Tree
        className="overflow-hidden rounded-md p-2"
        initialSelectedId="7"
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18"
        ]}
        elements={ELEMENTS}
      >
        <Folder element="Tech Stack" value="1" className="text-lg text-white">
          <Folder value="2" element="Languages" className="text-lg text-white">
            <File value="3" className="text-lg text-white">
              <p>Java</p>
            </File>
            <File value="4" className="text-lg text-white">
              <p>TypeScript</p>
            </File>
            <File value="5" className="text-lg text-white">
              <p>JavaScript</p>
            </File>
            <File value="6" className="text-lg text-white">
              <p>Python</p>
            </File>
          </Folder>
          <Folder
            value="7"
            element="Technologies"
            className="text-lg text-white"
          >
            <Folder value="8" element="Database" className="text-lg text-white">
              <File value="9" className="text-lg text-white">
                <p>PostgreSQL</p>
              </File>
            </Folder>
            <Folder
              value="10"
              element="Containerization"
              className="text-lg text-white"
            >
              <File value="11" className="text-lg text-white">
                <p>Kubernetes</p>
              </File>
              <File value="12" className="text-lg text-white">
                <p>Docker</p>
              </File>
            </Folder>
            <File value="13" className="text-lg text-white">
              <p>Github</p>
            </File>
            <File value="14" className="text-lg text-white">
              <p>Jenkins</p>
            </File>
          </Folder>
          <Folder
            value="15"
            element="Frameworks"
            className="text-lg text-white"
          >
            <File value="16" className="text-lg text-white">
              <p>Next.JS</p>
            </File>
            <File value="17" className="text-lg text-white">
              <p>Spring Boot</p>
            </File>
            <File value="18" className="text-lg text-white">
              <p>Node.JS</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "Tech Stack",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "Languages",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "Java"
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx"
          }
        ]
      },
      {
        id: "5",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "header.tsx"
          },
          {
            id: "7",
            isSelectable: true,
            name: "footer.tsx"
          }
        ]
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts"
          }
        ]
      }
    ]
  }
];
