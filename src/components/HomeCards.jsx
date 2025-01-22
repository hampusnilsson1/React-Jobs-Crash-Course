import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card
            title="For Developers"
            subtitle="Browse our React jobs and start your career today"
            cardColor="bg-gray-100"
            buttonText="Browse Jobs"
            buttonFGColor="text-white"
            buttonBGColor="bg-black"
            buttonBGColorHover="hover:bg-gray-700"
            href="/jobs"
          ></Card>
          <Card
            title="For Employers"
            subtitle="List your job to find the perfect developer for the role"
            cardColor="bg-indigo-100"
            buttonText="Add Job"
            buttonFGColor="text-white"
            buttonBGColor="bg-indigo-500"
            buttonBGColorHover="hover:bg-indigo-600"
            href="/add-job"
          ></Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;
