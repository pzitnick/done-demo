This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run in development mode:

```bash
npm run dev
```

To run the generated .next production file:
```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Process

### Quick Background

Before this project I had had a couple months experience working on a React Native application as part of a team. I had not yet attempted to make a React App by myself. It was a fun challenge to see how far I could get in the time I was able to spare. I wish I could have gotten farther, but I learned a lot in the two days!

### Development Steps

- Identify requirements
- Make Technology Choices
- Do some UI sketches and workflow diagrams
- Create paper prototype (also basically a blueprint of where I want to go UI-wise)
- Follow React tutorial
- Make barebones site
- Implement database
- Implement formatting
- Implement authentication
- Code cleanup/Refactoring
- Investigate/Implement testing
- Remote deployment

Anything past making a barebones site was a stretch goal for me. Since I knew I was probably not going to get super far within the small amount of time I had, I opted to spend more time on the part of development I felt most comfortable with: the UI/UX design portions. Given time I would want to continue down the remaining steps.

### Technology Choices

I initially thought to use React Native, as I had some familiarity, but discarded that as it wasn't very appropriate for a website. I decided to use React instead, and, on the React page saw Next.js as a recommendation for static and server-rendered applications. I thought this would be compatible with making a website that would require a database and a page that did dynamic refreshing to keep the patient list up to date. For databases there were a bunch of options, but I found a demo that had some similar components to what I was looking for and decided to guide my learning after that while I gathered more information and iterated. Finally, for authentication, I found that Auth0 was an option, though I didn't have enough time to look more into it and authentication was lowest on my requirements. 

Final choice: Next.js with MongoDB for the database, probably Auth0 for authentication

### Paper Prototype and Designwork

(All files are in ./design_images)
![alt text](./design_images/initialSketch.jpg?raw=true)
![alt text](./design_images/homePage.jpg?raw=true)
![alt text](./design_images/loginPage.jpg?raw=true)
![alt text](./design_images/viewPatientsPage.jpg?raw=true)
![alt text](./design_images/registerPage.jpg?raw=true)

## Screenshots

(All files are in ./screenshots)
![alt text](./screenshots/homePageSmall.jpg?raw=true)
![alt text](./screenshots/homePage.jpg?raw=true)
![alt text](./screenshots/loginPage.jpg?raw=true)
![alt text](./screenshots/viewPatientsPage.jpg?raw=true)
![alt text](./screenshots/registerPage.jpg?raw=true)

## Next Steps

There are a lot of things I would like to do next! Highest priority is finishing functionality that is required by the original challenge. This would include:
- Implement database
- Implement formatting
- Code cleanup/Refactoring

I'd also like to explore the following:
- Implement authentication
- Investigate/Implement testing
- Remote deployment
- Accessibility features
- Adding icons
- Figuring out how to have components rearrange when window is made larger or smaller
- Investigating css generation sites

## Resources and Links

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [MongoDB Next.js Demo](https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose) - An app demo for showing how to use MongoDB in a Next.js app
- [Software Engineering School Project](https://github.com/pzitnick/spring2017-project-pzitnick) - Wishlist application I created for a school project.

