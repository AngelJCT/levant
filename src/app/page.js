'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryNav from '../components/CategoryNav';
import TestResults from '../components/TestResults';
import QuestionSection from '../components/QuestionSection';
import { categories, testQuestions } from '../components/menuData';

/**
 * @component MenuTest
 * @description Main component for the Mediterranean Menu Knowledge Test application
 */
export default function MenuTest() {
  const [currentCategory, setCurrentCategory] = useState('mezze');
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (questionId, selectedAnswer) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: selectedAnswer
    }));
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    let totalQuestions = 0;
    
    testQuestions[currentCategory]?.forEach(dish => {
      dish.questions.forEach(q => {
        totalQuestions++;
        if (userAnswers[q.id] === q.correctAnswer) {
          correctAnswers++;
        }
      });
    });
    
    setScore((correctAnswers / totalQuestions) * 100);
    setShowResults(true);
  };

  const resetTest = () => {
    setUserAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const handleCategoryChange = (categoryId) => {
    setCurrentCategory(categoryId);
    resetTest();
  };

  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      <Header />
      
      <CategoryNav 
        currentCategory={currentCategory} 
        onCategoryChange={handleCategoryChange}
      />
      
      <main className="flex-grow p-4 md:p-6 max-w-4xl mx-auto w-full">
        {showResults ? (
          <TestResults 
            score={score}
            onRetry={resetTest}
          />
        ) : (
          <QuestionSection
            currentCategory={currentCategory}
            userAnswers={userAnswers}
            onAnswerSelect={handleAnswerSelect}
            onSubmit={handleSubmit}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}