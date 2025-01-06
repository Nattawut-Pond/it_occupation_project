import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScore } from '../ScoreContext'

const Successes = () => {
  const { scores } = useScore()
  const [totalScore, setTotalScore] = useState(0)

  useEffect(() => {
    // Calculate total score
    const total = Object.values(scores).reduce((acc, curr) => acc + curr, 0)
    setTotalScore(total)
  }, [scores])

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Your Test Results
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Total Score: {totalScore}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/cyber" className="group">
            <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Cyber Security</h3>
                <p className="mt-2 text-xl font-semibold text-indigo-600">{scores.cyber || 0}</p>
              </div>
            </div>
          </Link>

          <Link to="/itsupport" className="group">
            <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">IT Support</h3>
                <p className="mt-2 text-xl font-semibold text-indigo-600">{scores.itsupport || 0}</p>
              </div>
            </div>
          </Link>

          <Link to="/network" className="group">
            <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Network</h3>
                <p className="mt-2 text-xl font-semibold text-indigo-600">{scores.network || 0}</p>
              </div>
            </div>
          </Link>

          <Link to="/projectmanager" className="group">
            <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Project Manager</h3>
                <p className="mt-2 text-xl font-semibold text-indigo-600">{scores.projectmanager || 0}</p>
              </div>
            </div>
          </Link>

          <Link to="/software" className="group">
            <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Software Developer</h3>
                <p className="mt-2 text-xl font-semibold text-indigo-600">{scores.software || 0}</p>
              </div>
            </div>
          </Link>

          <Link to="/system" className="group">
            <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">System Admin</h3>
                <p className="mt-2 text-xl font-semibold text-indigo-600">{scores.system || 0}</p>
              </div>
            </div>
          </Link>

          <Link to="/uxui" className="group">
            <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">UX/UI Designer</h3>
                <p className="mt-2 text-xl font-semibold text-indigo-600">{scores.uxui || 0}</p>
              </div>
            </div>
          </Link>

          <Link to="/web" className="group">
            <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Web Developer</h3>
                <p className="mt-2 text-xl font-semibold text-indigo-600">{scores.web || 0}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Successes;
