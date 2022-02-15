# Analysis Chart Front-End Challenge

The challenge is to implement an analytics dashboard like this one with the next description:

![design](./chart-design.jpg)

## Description

- Loading screen is expected while fetching the "data.json" from server (can be github).
- The 3 drop-down lists at the top is to filter the data and the school one should have the option to "show all".
- The chart renders the data of the selected schools as shown.
- On the right the total no. of lessons is displayed for the selected Camp, then after it a list of the schools with a summary is shown.
- This schools list should be like toggles to show/hide the line chart of a certain school.
- Upon clicking on a point in the chart, the app should navtigate to another page with the most simple layout to show all details of that point like country, camp, school, month, no. of lessons.
- On getting back from the details page the last filtering state should be preserved.


## Requirements

- Use React, TypeScript and Chart.js (Next.js if needed)
- Good unit-test cases is required to secure the code (bonus: E2E testing)
- Store the data by state-management
- Use React hooks
- Consider the project to be Scalable and try to follow the best pratices for the project and code like project structure, linting, components structure, layering, modularity
- Bonus: Implemant a toggle to switch on/off the night mode
- Bonus: Consider supporting may languages in the app

Note: If a requirement is not stated, please assume based on your analysis and have a justification as it is a part of the assessment
