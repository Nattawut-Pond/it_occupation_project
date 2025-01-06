import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { toast } from "react-hot-toast";
import { useScore } from "../ScoreContext";
import axios from "axios";

function UXUI() {
  const navigate = useNavigate();
  const { setUXUIScore } = useScore();
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [question_list, setQuestion] = useState([]);

  const fetchQuestion = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/Question/6")
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

      setUXUIScore(suitabilityPercentage.toFixed(2));
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
        <div className="flex-grow flex flex-col items-center py-8">
          <div className="w-5/6 mb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">ความก้าวหน้า</h2>
              <span className="text-sm">{progress.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
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

export default UXUI;
