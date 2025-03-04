# Levant Menu Knowledge Test

A web application designed to help restaurant staff learn and test their knowledge of the Levant Mediterranean restaurant menu. This interactive tool allows staff to study menu items, ingredients, allergens, and serving details across different menu categories.

## Features

- **Category-based Learning**: Navigate through different menu sections including Mezze, Crudos, Primi, Pasta, Principale, Sides, and Dessert
- **Interactive Testing**: Answer questions about menu items, ingredients, allergens, and serving details
- **Immediate Feedback**: Get instant scoring and results after completing each category test
- **Responsive Design**: Works seamlessly on desktop and mobile devices for on-the-go learning
- **Beautiful UI**: Clean, intuitive interface with Mediterranean-inspired color scheme

## Technology Stack

This application is built with:

- **Next.js 15**: React framework for production-grade applications
- **React 19**: For building the user interface
- **Tailwind CSS 4**: For styling and responsive design
- **JavaScript**: Core programming language

## Project Structure

- `/src/app`: Contains the main application pages and layout
- `/src/components`: Reusable components including:
  - `menuData.js`: Comprehensive database of menu items and test questions
  - `Header.js`, `Footer.js`: Application layout components
  - `CategoryNav.js`: Navigation between menu categories
  - `QuestionSection.js`: Displays questions for the selected category
  - `TestResults.js`: Shows test scores and provides retry option
