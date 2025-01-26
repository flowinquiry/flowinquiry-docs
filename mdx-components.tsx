import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";
import { ReactElement, ReactNode } from "react";

const {
  tr: Tr,
  th: Th,
  table: Table,
  img: Image,
  ...docsComponents
} = getDocsMDXComponents();

// Define a type for children that matches the expected structure
type ChildWithProps = ReactElement<{ children: ReactNode[] }>;

export const useMDXComponents: typeof getDocsMDXComponents = (components) => ({
  ...docsComponents,
  tr: Tr,
  th: Th,
  thead({ children, ...props }) {
    // Check if the child has props and matches the expected structure
    const isChildWithProps = (node: ReactNode): node is ChildWithProps => {
      return (
        typeof node === "object" &&
        node !== null &&
        "props" in node &&
        Array.isArray((node as any).props.children)
      );
    };

    return (
      <thead {...props}>
        {isChildWithProps(children) ? (
          children
        ) : (
          <Tr>
            <Th align="left">Option</Th>
            <Th align="left">Type</Th>
            <Th align="left">Description</Th>
            {/* Add a column for "Default Value" if children.props.children length is 4 */}
            {isChildWithProps(children) &&
              children.props.children.length === 4 && (
                <Th align="left">Default Value</Th>
              )}
          </Tr>
        )}
      </thead>
    );
  },
  tbody: (props) => (
    <tbody
      className="break-words first:[&_td]:font-semibold first:[&_td]:text-violet-600 first:[&_td]:dark:text-violet-500 [&_tr]:!bg-transparent"
      {...props}
    />
  ),
  table: (props) => <Table className="w-full text-sm" {...props} />,
  img: (props) => (
    <Image
      {...props}
      className="nextra-border rounded-xl border drop-shadow-sm"
    />
  ),
  figure: (props) => <figure className="mt-6" {...props} />,
  figcaption: (props) => (
    <figcaption className="mt-2 text-center text-sm" {...props} />
  ),
  ...components,
});
