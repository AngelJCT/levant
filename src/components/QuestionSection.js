import { categories, testQuestions } from './menuData';
import QuestionCard from './QuestionCard';

/**
 * @component QuestionSection
 * @description Manages the display of questions and submission button
 * @param {Object} props - Component props
 * @param {string} props.currentCategory - Currently selected category
 * @param {Object} props.userAnswers - Object containing user's answers
 * @param {function} props.onAnswerSelect - Callback for answer selection
 * @param {function} props.onSubmit - Callback for test submission
 */
const QuestionSection = ({ currentCategory, userAnswers, onAnswerSelect, onSubmit }) => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-6 text-amber-800 text-center">
        {categories.find(c => c.id === currentCategory)?.name} Section
      </h2>

      {testQuestions[currentCategory]?.map(dish => (
        <QuestionCard
          key={dish.id}
          dish={dish}
          userAnswers={userAnswers}
          onAnswerSelect={onAnswerSelect}
        />
      ))}
      
      <button
        onClick={onSubmit}
        className="w-full py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 font-medium"
      >
        Submit Answers
      </button>
    </>
  );
};

export default QuestionSection;
