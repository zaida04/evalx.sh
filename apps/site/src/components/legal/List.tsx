export default function List(props: { children: React.ReactNode }) {
  return <ul className="mb-4 list-inside list-disc">{props.children}</ul>;
}

export function ListItem(props: { children: React.ReactNode }) {
  return <li>{props.children}</li>;
}
