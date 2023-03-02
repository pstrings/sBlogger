import Header from "../components/header";

const contact = () => {
  return (
    <main>
      <Header />
      <div className="flex flex-col max-w-3xl mx-auto p-10 my-10 shadow-yellow-500 shadow space-y-2">
        <h1 className="text-4xl font-extrabold mt-5 mb-3">Contact Me</h1>
        <p>
          <span className="text-yellow-500">Email: </span>{" "}
          masuya.sblogger@gmail.com
        </p>
      </div>
    </main>
  );
};

export default contact;
