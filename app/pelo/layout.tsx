export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Hi from Layout!</h1>
      {children}
    </div>
  );
}
