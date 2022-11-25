import { useSelector,  } from 'react-redux'
import { Todo } from '../components/todo'


function Dashboard() {

  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
      </section>
      <Todo/>
    </>
  )
}

export default Dashboard
