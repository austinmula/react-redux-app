import Heading from "../components/Heading";

export default function Home() {
  return (
    <div>
      <h1 data-testid="heading">This is the homepahge</h1>
      <Heading title="Heading" text="This is simple text for testing" />
    </div>
  );
}
