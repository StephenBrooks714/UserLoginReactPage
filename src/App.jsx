import Greeting from './Greetings.jsx'
import Message from './Message.jsx'
import UserCard from './UserCard.jsx'
import UserLoggedIn from './LoggedIn.jsx'
function App(name, age) {

  return (
    <>
      <main className={"container-fluid"}>
          <div className={"row justify-content-center align-items-center"}>
              <div className={"col-lg-12 text-center"}>
                  <Message />
                  <Greeting />
                  <div className={"row"}>
                      <div className={"col-md-6 mb-3"}>
                          <UserLoggedIn/>
                      </div>
                      <div className={"col-md-6 mb-3"}>
                          <UserCard name={name} age={age}/>
                          View the name and email passed to the console window by pressing CTRL, + SHIFT + J
                      </div>
                  </div>
              </div>
          </div>
      </main>
    </>
  )
}

export default App
