export default function Container(props: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      {props.children}
    </div>
  );
}
