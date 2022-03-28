# Analysis Chart Front-End Challenge

The challenge is to implement an analytics dashboard like this one with the description below:

![design](./chart-design.jpg)


## Acceptance Criteria

1. A loading screen is expected while fetching the `data.json` from the server. You can use the `raw` file directly from Github or serve it from a local server.
2.  The 3 drop-down lists at the top should filter the data. `Select School` should have the option to `Show all`.
3. A chart renders the data of the selected schools similar to the image above.
4. On the right of the screen, the total number of lessons is displayed for the selected Camp, School, and Country, followed by a list of the schools with how many lessons each offers.
5. The school's list from **point 4** should include toggles to show or hide the line chart of a certain school.
6. Upon clicking on a point in the chart from **point 3**, the app should navigate to another page where all the details of that item are shown. No UX is provided, but use a simple layout that shows: like country, camp, school, month, and a number of lessons.
7. After coming back from the details page implemented in **point 6**, the last filtering state should be preserved.

## Requirements

### Application Setup

- Use React, TypeScript, and Chart.js *(Next.js if needed)*
- Favor the use of React Functional Components over Class-based components.
- Set up a project structure that promotes scalability. 
	- Source code is kept separate from compiled code.
	- All tests should be contained in their own folder.
	- Separate modules are created for any processing.
- Set up an npm project
	- `Package.json` should contain both devDependencies, and dependencies.
	-  Scripts should be created for testing, linting/prettier, starting the server, and compiling TS.
	-  Build script should run without error.

### Architecture

- Store the data by state-management of your choice ane make sure 
	- The store is the application’s source of truth.
	- Components read the necessary state from the store; they do not have their own versions of the same state.
	- Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.
- The code is structured and organized in a logical way.
- Components are modular and reusable.

### Code Quality

- Write unit tests and make sure that test script runs and all tests created pass, every component must have one test associated with it to pass.
- Utilize **TypeScript** to avoid errors and improve maintainability
	- All code in the SRC folder should use the `.ts` filetype.
	- Functions should include typed parameters and return types and not use the `any` type.
	- Build script should successfully compile TS to JS.
- Prettier and Lint scripts should run without producing any error messages.

## Suggestions to Make Your Project Stand Out!

- Implement a toggle to switch on/off dark mode.
- Multi-lingual support.
- E2E testing


>  The spec is vague on purpose. Please document in a separate markdown file any decisions you've made indicating your analysis and the justification for your choice. **That documentation will be considered as part of the assessment.**
