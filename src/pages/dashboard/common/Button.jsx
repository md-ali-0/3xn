const Button = () => {
  return (
    <div>
      <div className="mb-10">
        <h2 className="mb-2 text-3xl font-bold">Button</h2>
        <p className="text-md">
          Button is used to start an instant operation and is used when triggers
          an action or event
        </p>
      </div>

      <div className="bg-white flex flex-wrap gap-2 rounded border py-5 px-8 space-x-5">
        <button className="btn btn-light">Light</button>
        <button className="btn btn-dark">Dark</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-danger">Danger</button>
      </div>
    </div>
  );
};

export default Button;
