"use client";

import ChatLayout from "@/components/ChatLayout";
import ChatCardLayout from "@/components/ChatCardLayout";
import ChatMessage from "@/components/ChatMessage";
import ChatOptions from "@/components/ChatOptions";
import { useChatStore, Message } from "@/store/ChatStore";

export default function Page() {
  const messages = useChatStore((s) => s.messages);

  return (
    <ChatLayout>
      {messages.map((msg: Message, i: number) => {
        if (msg.text === "...") {
          return (
            <ChatMessage key={i} message="..." time={msg.time} isUser={false} />
          );
        }
        if (msg.type === "card" && msg.title === "Career") {
          return (
            <div key={i} className="space-y-1 w-full">
              <div className="w-full bg-gray-100 text-black px-2 py-2 rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-md">
                {/* 헤더 */}
                <div className="px-4 pt-1">
                  <span className="text-lg font-bold text-[#005F99]">
                    Career
                  </span>
                  <div className="border-b-2 border-[#005F99] mt-1" />
                </div>

                <div className="px-4 py-2">
                  <div className="bg-white border border-gray-200 p-4 rounded-md max-h-96 overflow-y-auto whitespace-pre-line">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      ㈜이엠포커스
                    </h3>
                    <hr className="border-t border-gray-300 my-4" />
                    <p className="font-semibold text-gray-700 mb-2">
                      프로젝트: 풍강 MES 시스템 구축 및 솔루션 유지보수
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      기간: 2024.05 ~ 2024.11 (약 7개월) | 개발 인원: 3명
                    </p>
                    <p className="font-medium text-gray-700 mb-1">주요 업무:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                      <li>Frontend 개발 (DevExpress WinForms)</li>
                      <li>Backend 개발 (MSSQL 저장 프로시저 및 쿼리 작성)</li>
                      <li>시스템 유지보수 및 개선</li>
                    </ul>
                    <p className="font-medium text-gray-700 mb-2">담당 역할:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>UI/UX 설계·구현</li>
                      <li>MSSQL 프로시저 설계·데이터 추출</li>
                      <li>엑셀 데이터 연동 기능 개발</li>
                      <li>스케줄러 설계·자동화</li>
                      <li>쿼리 최적화·성능 개선</li>
                    </ul>
                  </div>
                </div>

                <div className="px-4 py-2">
                  <div className="bg-white border border-gray-200 p-4 rounded-md max-h-96 overflow-y-auto whitespace-pre-line">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      밀리언웨어 (SK Hynix C&C 협력사)
                    </h3>
                    <hr className="border-t border-gray-300 my-4" />

                    <section className="mb-6">
                      <p className="font-semibold text-gray-700 mb-1">
                        프로젝트: SK Hynix PDP 운영
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        프로젝트 기간: 2023.01 ~ 2023.07 (약 7개월) | 개발 인원:
                        3명
                      </p>
                      <p className="font-medium text-gray-700 mb-4">
                        주요 업무: Frontend 및 Backend
                      </p>
                      <p className="font-medium text-gray-700 mb-1">
                        담당 역할:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 mb-3">
                        <li>신규 화면 개발 및 UI 개선</li>
                        <li>Excel 업로드 및 데이터 검증 기능 설계</li>
                        <li>사용자 권한 관리 기능 구현</li>
                        <li>서버단 로직 개발</li>
                      </ul>
                      <p className="font-medium text-gray-700 mb-1">
                        기술 스택:
                      </p>
                      <p className="text-gray-600 mb-4">
                        React.js, Java Spring Boot, Oracle DB, Git
                      </p>
                      <p className="font-medium text-gray-700 mb-1">
                        상세 내용:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>MSA 아키텍처 기반 TP 프로젝트 전반 업무 수행</li>
                        <li>
                          프론트엔드와 백엔드 연동을 통한 효율적인 데이터 통신
                          구현
                        </li>
                        <li>Excel 업로드 기능 개발로 업무 프로세스 자동화</li>
                        <li>사용자 역할별 권한 제어 로직 작성</li>
                        <li>화면 리뉴얼로 UX 개선 및 데이터 검증 로직 강화</li>
                      </ul>
                    </section>
                    <hr className="border-t border-gray-300 my-4" />

                    <section>
                      <p className="font-semibold text-gray-700 mb-1">
                        프로젝트: SK Hynix HTRS 운영
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        프로젝트 기간: 2022.11 ~ 2022.12 (약 2개월) | 개발 인원:
                        2명
                      </p>
                      <p className="font-medium text-gray-700 mb-4">
                        주요 업무: Frontend 및 Backend
                      </p>
                      <p className="font-medium text-gray-700 mb-1">
                        담당 역할:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 mb-3">
                        <li>조직도 화면 및 수정 화면 설계·개발</li>
                        <li>DB 테이블 설계 및 데이터베이스 연동 로직 작성</li>
                        <li>시스템 운영 및 에러 대응</li>
                      </ul>
                      <p className="font-medium text-gray-700 mb-1">
                        기술 스택:
                      </p>
                      <p className="text-gray-600 mb-4">
                        React.js, Java Spring Boot, Oracle DB, Git
                      </p>
                      <p className="font-medium text-gray-700 mb-1">
                        상세 내용:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>조직도 화면 개발 및 조직도 수정 화면 개발</li>
                        <li>
                          프론트엔드와 백엔드 연동을 통한 효율적인 데이터 통신
                          구현
                        </li>
                        <li>백엔드 로직 개발 및 데이터베이스 연동</li>
                        <li>사용자 요구사항에 맞는 화면 구성</li>
                        <li>시스템 운영 및 에러 대응</li>
                      </ul>
                    </section>
                  </div>
                </div>

                <span className="text-[10px] text-gray-400 pl-2">
                  {msg.time}
                </span>
              </div>
            </div>
          );
        }

        if (msg.type === "card" && msg.title) {
          return (
            <div key={i} className="space-y-1 w-full">
              <ChatCardLayout title={msg.title}>
                <div className="max-h-96 overflow-y-auto whitespace-pre-line">
                  {msg.text}
                </div>
              </ChatCardLayout>
              <span className="text-[10px] text-gray-400 pl-2">{msg.time}</span>
            </div>
          );
        }
        return (
          <ChatMessage
            key={i}
            message={msg.text}
            time={msg.time}
            isUser={msg.role === "user"}
          />
        );
      })}

      <ChatOptions />
    </ChatLayout>
  );
}
