
export default function CardContainer({ children }) {

  return (
    <div className="rounded-xl border-4 w-full h-full max-w-[480px] mx-auto card-container">
      {children}
    </div>
  );
}
