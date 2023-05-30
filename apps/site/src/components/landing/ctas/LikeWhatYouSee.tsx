import GetStarted from "../buttons/GetStarted";

export default function LikeWhatYouSee() {
  return <div className="bg-base-300 px-10 md:px-16 py-6 rounded-xl flex justify-between items-center">
    <div>
      <h3 className="font-semibold">Like what you see?</h3>
      <p>So do we.</p>
    </div>
    <GetStarted />
  </div>
}