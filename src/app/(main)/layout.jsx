import Navigation from "./_components/Navigation";

const MarketingLayout = ({ children }) => {
  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default MarketingLayout;
