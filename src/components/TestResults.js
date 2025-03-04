/**
 * @component TestResults
 * @description Displays test results and provides option to retry
 * @param {Object} props - Component props
 * @param {number} props.score - Test score as a percentage
 * @param {function} props.onRetry - Callback for retry button
 */
const TestResults = ({ score, onRetry }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg text-amber-800 font-semibold mb-4">Your Results</h3>
      <p className="text-2xl text-amber-800 font-bold text-center mb-4">
        Score: {score.toFixed(1)}%
      </p>
      <button 
        onClick={onRetry}
        className="w-full py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700"
      >
        Try Again
      </button>
    </div>
  );
};

export default TestResults;
