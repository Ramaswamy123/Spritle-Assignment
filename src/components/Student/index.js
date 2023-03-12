import {useState} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Student = () => {
  // const [answer, setAnswer] = useState([]);
  // const [inputValue,setInputValue] = useState('')
  const [data, setData] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
  })

  const changeHandler = event => {
    setData({...data, [event.target.name]: event.target.value})
  }

  const onSubmitForm = event => {
    event.preventDefault()
    localStorage.setItem('student-answers', JSON.stringify(data))
  }
  return (
    <div className="student-container">
      <h1 className="student-heading">Student Dashboard</h1>
      <h1>Answer the below Questions</h1>
      <form onSubmit={onSubmitForm}>
        <div className="student-question-container">
          <div>
            <p className="question">
              Question 1: &nbsp; 7 * 5 &nbsp; = {`>`} &nbsp;{' '}
              <input
                onBlur={changeHandler}
                name="question1"
                type="text"
                className="student-input"
              />
            </p>
            <p className="question">
              Question 2: &nbsp; 4 + 9 &nbsp; = {`>`} &nbsp;{' '}
              <input
                onBlur={changeHandler}
                name="question2"
                type="text"
                className="student-input"
              />{' '}
            </p>
            <p className="question">
              Question 3: &nbsp; 8 - 3 &nbsp; = {`>`} &nbsp;{' '}
              <input
                onBlur={changeHandler}
                name="question3"
                type="text"
                className="student-input"
              />{' '}
            </p>
            <p className="question">
              Question 4: &nbsp; 6 / 2 &nbsp; = {`>`} &nbsp;{' '}
              <input
                onBlur={changeHandler}
                name="question4"
                type="text"
                className="student-input"
              />{' '}
            </p>
          </div>
          <div className="button-container">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </div>
      </form>
      <Link to="/">
        <button type="button" className="logout-button">
          Log out
        </button>
      </Link>
    </div>
  )
}

export default Student
