import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { toast } from "react-hot-toast";
import { useScore } from "../ScoreContext";
import axios from "axios";

function System() {
  const navigate = useNavigate();
  const { setSystemScore } = useScore();
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [question_list, setQuestion] = useState([]);

  const fetchQuestion = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/Question/7")
      const questions = response.data.results.slice(0, 20);
      setQuestion(questions);
    } catch (error) {
      console.log(error);
      toast.error("Error loading questions");
    }
  }

  useEffect(() => {
    fetchQuestion();
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(selectedRatings).length === 20) {
      const totalScore = Object.values(selectedRatings).reduce((sum, score) => sum + score, 0);
      const averageScore = totalScore / 20;
      const suitabilityPercentage = ((5 - averageScore) / 4) * 100;

      setSystemScore(suitabilityPercentage.toFixed(2));
      navigate("/successes");
    } else {
      const unanswered = 20 - Object.keys(selectedRatings).length;
      toast.error(`กรุณาตอบคำถามให้ครบ (เหลืออีก ${unanswered} ข้อ)`);
    }
  };

  const progress = (Object.keys(selectedRatings).length / 20) * 100;

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-8">
          <div className="w-full max-w-xl mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-center mt-2">
              {Object.keys(selectedRatings).length}/20 คำถาม
            </p>
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="text-center mt-10">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6x1">
                แบบทดสอบความเหมาะสม
              </h1>
              <p className="mt-8 text-pretty text-sm font-medium text-gray-500 sm:text-md">
                กรุณาตอบคำถามทั้ง 20 ข้อเพื่อวัดความเหมาะสมในสายงาน System Administrator
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-5/6 justify-items-center">
            {question_list.map((data, key) => (
              <div key={key} className="card w-full bg-base-100 shadow-xl my-4">
                <div className="card-body">
                  <h2 className="card-title">คำถามที่ {key + 1}</h2>
                  <p>{data.question_text}</p>
                  <div className="rating rating-lg rating-half flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <input
                        key={rating}
                        type="radio"
                        name={`rating-${key}`}
                        className="mask mask-star-2 bg-orange-400"
                        checked={selectedRatings[key] === rating}
                        onChange={() => {
                          setSelectedRatings({
                            ...selectedRatings,
                            [key]: rating,
                          });
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <button 
              type="submit" 
              className={`btn w-full mt-4 ${
                Object.keys(selectedRatings).length === 20 
                  ? "btn-success text-white" 
                  : "btn-disabled"
              }`}
            >
              ส่งคำตอบ ({Object.keys(selectedRatings).length}/20)
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default System;
