# Meal Planner App

A meal tracking app built with Angular2 that allows users to log their daily meals and filter their meals by calories.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Gulp](https://gulpjs.com/)

## Installation and Deployment

* `git clone <repository-url>` this repository
* `cd meal-planner`
* `npm install`
* `bower install`
* `gulp build`
* `gulp serve`

## Planning

1. Configuration/dependencies
  * Bootstrap: located in package.json
  * All other other dependencies are installed by Ember and located in package.json

2. Specs
  * Spec 1: User can view all meals.
  * Spec 2: User can edit meals.
  * Spec 3: User can log a meal including a name, details, calories, and time.
  * Spec 4: Users can filter logged meals by calories.

3. Integration
  * Components are used to create display and behavior for listing meals, editing meals, and creating new meals.
  * Pipe is used to filter meals by high or low healthiness based on calories.

4. UX/UI
  * Develop custom style with css/Bootstrap

5. Polish
  * Refactor and DRY up code where appropriate
  * Improve README!

6. Future Additions:
  * Add functionality to view total daily calories.
  * Refactor for use with Firebase & Angular-Cli
