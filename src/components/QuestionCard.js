/**
 * @component QuestionCard
 * @description Displays a dish's questions and handles answer selection
 * @param {Object} props - Component props
 * @param {Object} props.dish - Dish object containing questions
 * @param {Object} props.userAnswers - Object containing user's answers
 * @param {function} props.onAnswerSelect - Callback for answer selection
 */
const QuestionCard = ({ dish, userAnswers, onAnswerSelect }) => {
  return (
    <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-3 text-amber-800 border-b border-amber-200 pb-2">
        {dish.dish}
      </h3>
      
      {dish.questions.map(question => (
        <div key={question.id} className="mb-6">
          <p className="font-medium text-amber-800 mb-2">{question.question}</p>
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <label key={index} className="flex items-start p-2 border rounded-md hover:bg-amber-50">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={userAnswers[question.id] === option}
                  onChange={() => onAnswerSelect(question.id, option)}
                  className="mt-1 mr-2 text-amber-800"
                />
                <span className="text-amber-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;
