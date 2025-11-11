const DisclaimerBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-yellow-500/95 dark:bg-yellow-600/95 backdrop-blur-sm border-b-2 border-yellow-600 dark:border-yellow-700 shadow-lg min-h-[70px] md:min-h-[60px] flex items-center">
      <div className="container mx-auto px-4 py-2 md:py-3 w-full">
        <p className="text-xs md:text-sm lg:text-base text-yellow-900 dark:text-yellow-100 text-center font-medium leading-relaxed">
          All documents and materials provided on this website are for personal and illustrative use only. They are not official records and must not be used for legal, governmental, or fraudulent purposes. The website and its operators disclaim any responsibility for misuse or misrepresentation of the content provided.
        </p>
      </div>
    </div>
  );
};

export default DisclaimerBanner;

