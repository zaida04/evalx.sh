export default function UsageMeter() {
  return <div className="flex flex-col items-center justify-center h-full">
    <h4 className="mb-4">Request Usage</h4>
    <div className="radial-progress " style={{ "--value": 70, "--size": "6rem" } as React.CSSProperties}>70%</div>
  </div>
}