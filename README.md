## Exam Dashboard

This project is cloned from [create-react-app](https://github.com/facebook/create-react-app/). A live version of this application can be found here, https://frozen-mountain-79316.herokuapp.com.

To set this project up locally, please follow the instructions below:

1. `git clone git@github.com:mbrashid62/teacher-dashboard.git`
2. `cd teacher-dashboard`
3. `npm i`
4. `npm run start`
5. Visit localhost:8080

## Troubleshooting

If you run into issues it's possible there are version compatibility issues. Please try the following:

1. Updating Node to version 8.10.\*
2. Updating npm to at least 5.6.\*

## Usage

When first landing on the application, you will be prompted to enter student exam entries. After entering valid input, you will be able to submit an exam entry. Input is considered valid once both a name and grade (0 - 100) are entered. After creating exam entries, the results will be displayed in a table below.

To submit an exam entry, simply click the button or type 'enter' after filling out the required input fields.

Entries with scores of 65 or lover will be highlighted with a faded red to indicate their failure status.

Class statistics are displayed on the bottom of the page. These statistics are updated as entries are made. No need to refresh.

## Application

The application data is saved in a global state object using Redux. Ideally, this data should be saved in a database somewhere and updated/retrieved via network requests. In order to avoid expanding the scope of this project, I chose to allow everything to live in the browser. Another approach I could have taken would have been to save a copy of the store in a browser cookie. This would allow state to persist across page refresh without having to setup any backend services. This approach would have worked well but in the interest of time, I chose to skip this step.
