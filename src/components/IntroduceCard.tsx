import React from "react";
import ChatCardLayout from "@/components/ChatCardLayout";

type IntroduceCardProps = {
  time: string;
};

const IntroduceCard: React.FC<IntroduceCardProps> = ({ time }) => {
  return (
    <div className="space-y-1 w-full">
      <ChatCardLayout title="Introduce">
        <div className="space-y-3 text-sm sm:text-base whitespace-pre-line">
          <p>
            저는 솔루션 업무에 1년 5개월 동안 경험이 있습니다. React, Spring
            Boot, MariaDB, JavaScript, Java 등의 기술을 활용하여 신규 솔루션
            프로그램을 개발하고 운영 중인 프로젝트를 관리해 왔습니다.
          </p>
          <p>
            경력으로는 이엠포커스와 밀리언웨어에서 솔루션 개발 업무를
            수행했습니다. 이를 통해 프로그램의 안정성을 고려한 최적화된 코드를
            작성하고, 사용자 요청에 신속히 대응하여 문제를 해결해 왔습니다.
            React, Java 등의 언어로 HTRS와 PDP 웹 사이트를 개발하고 운영한
            경험이 있습니다.
          </p>
          <p>
            이력서에서 소개된 기술 스택을 바탕으로 솔루션 개발 역량을 보유하고
            있습니다. 신규 프로그램 개발과 기존 시스템 운영에서 능숙하게 작업할
            수 있는 능력을 갖추고 있으며, 언제나 빠르고 정확한 업무 수행을
            목표로 합니다.
          </p>
        </div>
      </ChatCardLayout>
      <span className="text-[10px] text-gray-400 pl-2">{time}</span>
    </div>
  );
};

export default IntroduceCard;
