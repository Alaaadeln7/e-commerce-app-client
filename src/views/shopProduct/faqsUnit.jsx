export default function faqsUnit({ qoute, answer }) {
  return (
    <div className="collapse collapse-arrow bg-base-200 ">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title text-xl font-medium">{qoute}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
}
