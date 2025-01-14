
const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex space-x-2">
        <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
