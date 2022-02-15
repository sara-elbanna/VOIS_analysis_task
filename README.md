# Analysis Front-End Challenge

The challenge consists of 3 small tasks.
You could be done separately and it's not necessary to implement all of them. You can start by forking the repository and updating the necessary files.

## Data filtering

Please replace the dummy values in the [data-provider.js](./data-provider.js) file with real values taken from the [data](./data.json) json file included in the project.

There are 3 functions:

- getCountries() - should return an array of unique countries
- getCamps(country) - should return an array of camps located in the given country
- getLessonsByMonth(country) - should return two arrays, one that contains unique months and the second
  with the total number of lessons in the country by the month

## Data binding

Please connect the data to the UI components by React components

- The "Countries" combo should be populated with the results from the `getCountries()` function.
- The "Camps" combo should be populated with the results from the `getCamps(country)` function.
- The chart should be populated with the results from the `getLessonsByMonth(country)` function.

## Data filtering

Build the chart to be similar

![design](./chart-design.jpg)

## Requirements

- Use React, Next.js, TypeScript, and Chart.js
- Write unit-testing for data binding functions
- Store the data by state-management
- Use React hooks
- Consider the project to be Scalable
- Navigate to another page to show the details of a specific record by on clicking on dot in the chart
