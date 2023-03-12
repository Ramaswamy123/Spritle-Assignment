import {Link} from 'react-router-dom'
import './index.css'

// const zero = (op) => op ? op(0) : 0;
// const one = (op) => op ? op(1) : 1;
const two = op => (op ? op(2) : 2)
const three = op => (op ? op(3) : 3)
const four = op => (op ? op(4) : 4)
const five = op => (op ? op(5) : 5)
const six = op => (op ? op(6) : 6)
const seven = op => (op ? op(7) : 7)
const eight = op => (op ? op(8) : 8)
const nine = op => (op ? op(9) : 9)

const plus = a => b => b + a
const minus = a => b => b - a
const times = a => b => b * a
const dividedBy = a => b => Math.floor(b / a)

const Master = () => {
  const studentAnswers = JSON.parse(localStorage.getItem('student-answers'))
  return (
    <div className="master-container">
      <div>
        <h1 className="master-heading">Master DashBoard</h1>
        <div className="question-container">
          <p className="question">
            Question 1: &nbsp; 7 * 5 &nbsp; & &nbsp;{' '}
            <span className="style"> Answer is {seven(times(five()))}</span>
          </p>
          <p className="question">
            Question 2: &nbsp; 4 + 9 &nbsp; & &nbsp;{' '}
            <span className="style"> Answer is {four(plus(nine()))}</span>
          </p>
          <p className="question">
            Question 3: &nbsp; 8 - 3 &nbsp; & &nbsp;{' '}
            <span className="style"> Answer is {eight(minus(three()))}</span>
          </p>
          <p className="question">
            Question 4: &nbsp; 6 / 2 &nbsp; & &nbsp;{' '}
            <span className="style"> Answer is {six(dividedBy(two()))}</span>
          </p>
        </div>
        {/* <Link to = "/"><button className="logout-button">Log out</button></Link> */}
      </div>
      {studentAnswers && (
        <div className="answers-container">
          <p className="student-answer-heading">Student Answers</p>
          {/* {studentAnswers.map(eachItem => (
                        <p className="question">Question {studentAnswers.indexOf(eachItem) + 1} : &nbsp; <span className="style">{eachItem}</span></p>
                    ))} */}
          <p className="question">
            {' '}
            Question 1 : &nbsp;{' '}
            <span className="style">{studentAnswers.question1}</span>
          </p>
          <p className="question">
            {' '}
            Question 2 : &nbsp;{' '}
            <span className="style">{studentAnswers.question2}</span>
          </p>
          <p className="question">
            {' '}
            Question 3 : &nbsp;{' '}
            <span className="style">{studentAnswers.question3}</span>
          </p>
          <p className="question">
            {' '}
            Question 4 : &nbsp;{' '}
            <span className="style">{studentAnswers.question4}</span>
          </p>
        </div>
      )}
      {/* <div className="answers-container">
                <p className="student-answer-heading">Student Answers</p>
                    {studentAnswers.map(eachItem => (
                        <p className="question">Question {studentAnswers.indexOf(eachItem) + 1} : &nbsp; <span className="style">{eachItem}</span></p>
                    ))}
            </div> */}
      <Link to="/">
        <button type="button" className="master-logout-button">
          Log out
        </button>
      </Link>
    </div>
  )
}

export default Master
