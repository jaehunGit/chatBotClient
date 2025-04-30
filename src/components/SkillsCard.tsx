import React from "react";
import ChatCardLayout from "@/components/ChatCardLayout";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  SiReact,
  SiSpringboot as SiJavaSpring,
  SiOracle,
  SiJavascript,
  SiTypescript,
  SiNextdotjs as SiNextjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiRedux,
  SiGit,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { DiRedis, DiMsqlServer } from "react-icons/di";

import { JSX } from "@emotion/react/jsx-runtime";

type Skill = {
  name: string;
  description: string;
};

const skills: Skill[] = [
  {
    name: "React",
    description:
      "함수형 컴포넌트와 Hooks로 대규모 SPA를 구현했으며, Redux와 Zustand로 상태를 효율적으로 관리한 경험이 있습니다.",
  },
  {
    name: "React Native",
    description:
      "iOS 및 Android 네이티브 모듈 연동부터 최적화된 UI 구성까지 수행한 크로스 플랫폼 앱 개발 경험이 있습니다.",
  },
  {
    name: "Java Spring",
    description:
      "Spring Boot 기반 RESTful API 설계·구현과 보안, 예외 처리 적용으로 안정적인 백엔드 서비스를 제공했습니다.",
  },
  {
    name: "JPA",
    description:
      "Hibernate, JPA 엔티티 모델링 및 복잡한 쿼리 최적화로 데이터 처리 성능을 개선한 이력이 있습니다.",
  },
  {
    name: "Redis",
    description:
      "세션 스토어와 캐시 레이어로 활용해 서버 부하를 줄이고 사용자 경험을 향상시켰습니다.",
  },
  {
    name: "Oracle",
    description:
      "스키마 설계와 인덱스 튜닝으로 대용량 데이터 처리 속도를 최적화한 경험이 있습니다.",
  },
  {
    name: "MSSQL",
    description:
      "저장 프로시저 작성, 트랜잭션 관리, 쿼리 튜닝을 통해 데이터 일관성과 성능을 확보했습니다.",
  },
  {
    name: "JavaScript",
    description:
      "ES6+ 문법과 비동기 프로미스, 이벤트 핸들러를 이용해 동적 UI와 효율적 데이터 흐름을 구현했습니다.",
  },
  {
    name: "TypeScript",
    description:
      "제네릭과 유틸리티 타입으로 코드 안정성을 강화하고 대규모 리팩토링을 용이하게 했습니다.",
  },
  {
    name: "Next.js",
    description:
      "App Router, SSR/SSG를 통한 SEO 최적화 페이지 구현과 API 라우트를 활용한 백엔드 설계 경험이 있습니다.",
  },
  {
    name: "Styled-Components",
    description:
      "테마 기반 스타일 관리와 재사용 가능한 UI 컴포넌트 제작으로 일관된 디자인 시스템을 구축했습니다.",
  },
  {
    name: "Tailwind CSS",
    description:
      "유틸리티 클래스 중심의 빠른 프로토타이핑과 반응형 레이아웃 적용으로 생산성을 높였습니다.",
  },
  {
    name: "Zusatnd & Reudx",
    description:
      "Zustand와 Redux를 사용한 전역 상태 관리 및 미들웨어 연동으로 복잡한 비즈니스 로직을 처리했습니다.",
  },
  {
    name: "Git",
    description:
      "Git Flow 기반 브랜치 전략과 PR 리뷰 프로세스를 통해 다수 협업 환경을 원활하게 운영했습니다.",
  },
];

const iconMap: Record<string, JSX.Element> = {
  React: <SiReact size={64} color="#61DBFB" />,
  "React Native": <TbBrandReactNative size={64} color="#61DBFB" />,
  "Java Spring": <SiJavaSpring size={64} color="#6DB33F" />,
  JPA: <FaDatabase size={64} color="#8892BF" />,
  Redis: <DiRedis size={64} color="#DC382D" />,
  Oracle: <SiOracle size={64} color="#F80000" />,
  MSSQL: <DiMsqlServer size={64} color="#CC2927" />,
  JavaScript: <SiJavascript size={64} color="#F7DF1E" />,
  TypeScript: <SiTypescript size={64} color="#3178C6" />,
  "Next.js": <SiNextjs size={64} color="#000000" />,
  "Styled-Components": <SiStyledcomponents size={64} color="#DB7093" />,
  "Tailwind CSS": <SiTailwindcss size={64} color="#38B2AC" />,
  "Zusatnd & Reudx": <SiRedux size={64} color="#764ABC" />,
  Git: <SiGit size={64} color="#F05032" />,
};

type SkillsCardProps = {
  time: string;
};

const SkillsCard: React.FC<SkillsCardProps> = ({ time }) => {
  return (
    <div className="space-y-1 w-full">
      <ChatCardLayout title="Skills">
        <div className="min-h-[320px]">
          <ScrollContainer className="flex gap-4 overflow-x-auto py-4 h-full">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="w-[200px] h-[280px] bg-white border border-gray-200 p-4 rounded-md shadow-sm flex-shrink-0 flex flex-col"
              >
                <div className="flex-1 flex flex-col justify-start items-center">
                  <div className="h-16 w-full flex items-center justify-center mb-4">
                    {iconMap[skill.name]}
                  </div>
                  <hr className="w-[180px] border-t border-gray-300 my-4" />
                  <h4 className="text-center font-semibold mb-4 text-lg">
                    {skill.name}
                  </h4>
                  <p className="text-xs leading-relaxed text-gray-600 text-center">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </ScrollContainer>
        </div>
      </ChatCardLayout>
      <span className="text-[10px] text-gray-400 pl-2">{time}</span>
    </div>
  );
};

export default SkillsCard;
