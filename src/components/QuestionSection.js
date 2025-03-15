import { categories, testQuestions } from './menuData';
import QuestionCard from './QuestionCard';
import WineSheet from './WineSheet';

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
  // Check if current category is a wine-related category
  const isWineCategory = ['redwines', 'whitewines', 'roséwines', 'sparklingwines', 'winescheatsheet'].includes(currentCategory);

  return (
    <>
      <h2 className="text-xl font-semibold mb-6 text-amber-800 text-center">
        {categories.find(c => c.id === currentCategory)?.name} Section
      </h2>

      {/* Display different components based on category type */}
      {isWineCategory ? (
        // Display wine information using WineSheet component
        testQuestions[currentCategory] ? (
          testQuestions[currentCategory].map(wine => {
            console.log('Wine data being passed to WineSheet:', wine);
            return <WineSheet key={wine.id} wine={wine} />;
          })
        ) : (
          <p className="text-center text-amber-700">No wine data available for this category.</p>
        )
      ) : (
        // Display food questions using QuestionCard component
        testQuestions[currentCategory]?.map(dish => (
          <QuestionCard
            key={dish.id}
            dish={dish}
            userAnswers={userAnswers}
            onAnswerSelect={onAnswerSelect}
          />
        ))
      )}
      
      {/* Only render submit button for non-wine categories */}
      {!isWineCategory && (
        <button
          onClick={onSubmit}
          className="w-full py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 font-medium"
        >
          Submit Answers
        </button>
      )}
    </>
  );
};

export default QuestionSection;
