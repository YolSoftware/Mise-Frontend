import React, { useEffect, useState } from "react";
import '../stylesheets/Comment.css';


let commentData = {
    pmAction : {
        good : "공기가 정말 좋아요! 오랜만에 운동을 해보는 건 어떨까요?",
        common : "어딘가에 미세먼지가 숨어있을지 몰라요. 자나깨나 미세먼지 조심!",
        bad : "장시간동안 외출은 자제해주세요. 마스크는 필수에요!",
        muchBad : "가급적으로 집 밖으로 나가지 마세요. 실외 활동은 오래하지 않도록 주의합시다."
    },

    o3Action : {
        good : "공기가 정말 좋아요! 오랜만에 운동을 해보는 건 어떨까요?",
        common : "오존 절감을 위해 자가용보다 대중교통을 이용해 봅시다.",
        bad : "물을 충분히 섭취해주시고, 외출 후에는 반드시 세안을 해주세요.",
        muchBad : "주유는 해가 뜨거운 시간에는 조심해야 해요."
    }
};

// status 의 값을 받아 와서.. 미세먼지, 초미세, 오존 정보를 받아오자.


const Comment = ({ pPm10Grade, pPm25Grade, pO3Grade }) => {

    function selectDustComment() {
        let returnComment;
        
        // console.log(mPm10Grade);
        // console.log(mPm25Grade);
        
        if (pPm10Grade === "매우나쁨" | pPm25Grade === "매우나쁨") {
            returnComment = commentData.pmAction.muchBad;
        }
        else if (pPm10Grade === "나쁨" | pPm25Grade === "나쁨") {
            returnComment = commentData.pmAction.bad;
        }
        else if (pPm10Grade === "보통" | pPm25Grade === "보통") {
            returnComment = commentData.pmAction.common;
        }
        else if (pPm10Grade === "좋음" | pPm25Grade === "좋음") {
            returnComment = commentData.pmAction.good;
        }
        return returnComment;
    }

    function selectO3Comment() {
        let returnComment;

        if (pO3Grade === "매우나쁨") {
            returnComment = commentData.o3Action.muchBad;
        }
        else if (pO3Grade === "나쁨") {
            returnComment = commentData.o3Action.bad;
        }
        else if (pO3Grade === "보통") {
            returnComment = commentData.o3Action.common;
        }
        else if (pO3Grade === "좋음") {
            returnComment = commentData.o3Action.good;
        }

        return returnComment;
    }

    return (
        <div className="comment-wrapper">
            <span className="comment">
                {selectDustComment()}
                <br></br>
                {selectO3Comment()}
            </span>
        </div>
    )
}

export default Comment;