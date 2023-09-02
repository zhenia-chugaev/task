# Tassker

## How to run the app
Live demo is available at [https://clever-to-do-list-1122b.web.app/](https://clever-to-do-list-1122b.web.app/).

## Application stack
Along with **Firebase** platform and **React** library (create-react-app was used as a boilerplate) the following tools were applied for developing the application:
- **React Router** for client-side routing;
- **Bootstrap** components and icons formed the basis of application interface;
- **Formik** library was utilized to handle forms data;
- **classnames** package was used for conditional addition of React components classNames;
- **moment.js** for dates processing.

## Database snapshot
Entities in the database are structured as follows:
```
{
  tasks: {
    [user.uid]: {
      [taskId]: {
        title: string,
        description: string,
        date: number,
        completed: boolean,
        id: string,
      },
      ... // other tasks
    }
  }
}
```

Live example:
![Screenshot from 2023-05-07 16-59-06](https://user-images.githubusercontent.com/89708037/236699165-52306138-5cf0-4901-bbde-cd5b83dc8ba1.png)
