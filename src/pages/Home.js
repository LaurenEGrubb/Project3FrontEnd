import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  return (
    <section className="home-page-logo">
      {/* <h1> */}
        <img className="logo" src="https://i.imgur.com/FjsZOji.png" />
      {/* </h1> */}
    </section>
  )
}

export default Home
