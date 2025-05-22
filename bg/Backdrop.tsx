export default function Backdrop() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-blue-950 via-black to-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
    </div>
  );
}
