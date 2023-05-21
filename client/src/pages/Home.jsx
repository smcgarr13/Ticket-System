import React from 'react';
import UserForm from '../components/UserForm';
import '../index.css';

function Home() { 
  return (
    <div>
  <UserForm />
    </div>
  );
}

export default Home;




// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import '../index.css';

// function Home({ children }) { 
//   return (
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Randy's Booth Co</title>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
//       </head>
//       <body>
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

// export default Home;