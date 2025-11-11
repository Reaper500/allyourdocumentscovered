const DisclaimerBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-yellow-500/95 dark:bg-yellow-600/95 backdrop-blur-sm border-b-2 border-yellow-600 dark:border-yellow-700 shadow-lg h-[48px] md:h-auto md:min-h-[55px] flex items-center">
      <div className="container mx-auto px-2 md:px-4 w-full h-full flex items-center justify-center">
        <p className="text-[9px] md:text-xs lg:text-sm text-yellow-900 dark:text-yellow-100 text-center font-medium disclaimer-text">
          All documents and materials provided on this website are for personal and illustrative use only. They are not official records and must not be used for legal, governmental, or fraudulent purposes. The website and its operators disclaim any responsibility for misuse or misrepresentation of the content provided.
        </p>
      </div>
    </div>
  );
};

export default DisclaimerBanner;

