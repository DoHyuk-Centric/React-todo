import "./TermsAgree.css";
import { useRef, useState } from "react";
import { X } from "react-feather";

const TermsAgree = ({ detailOpen, onClose ,onAgreeAll }) => {
  const [detailsAgree, setdetailsAgree] = useState(false);
  const termsRef = useRef(null);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const handleScroll = () => {
    if(termsRef.current) {
      const {scrollTop, scrollHeight, clientHeight} = termsRef.current;
      if(scrollHeight - scrollTop <= clientHeight + 1){
        setIsScrolledToBottom(true);
      }
    }
  }

  const handleAgreeScroll = () => {
    if(isScrolledToBottom){
      onAgreeAll?.();
      onClose();
      return;
    }

  }

  if (!detailOpen) return null;

  return (
    <div onMouseDown={onClose} className="TermAgreeModal-overlay">
      <div onMouseDown={(e) => e.stopPropagation()} className="TermAgreeModal">
        <div
          onMouseDown={() => setdetailsAgree(true)}
          className="TermAgreeModal-header"
        >
          <X className="TermsExit" onClick={onClose} size={24} color="black" />
          <h2>회원가입 약관 동의</h2>
          <div ref={termsRef} onScroll={handleScroll} className="TermAgreeScroll-box">
            <h2>서비스 이용약관</h2>
            <p>
              본 약관은 서비스 제공자(이하 "회사")와 회원 사이의 권리, 의무 및
              책임사항을 규정함을 목적으로 합니다.
              <br />
              1. 총칙
              <br />
              - 본 약관은 서비스를 이용함에 있어 회사와 회원 간의 모든 사항에
              적용됩니다.
              <br />
              2. 회원가입
              <br />
              - 회원은 정해진 절차에 따라 가입을 완료해야 하며, 잘못된 정보를
              입력할 경우 서비스 이용에 제한이 있을 수 있습니다.
              <br />
              3. 서비스 제공
              <br />
              - 회사는 안정적인 서비스 제공을 위해 노력하며, 필요 시 서비스의
              내용 또는 제공 방식을 변경할 수 있습니다.
              <br />
              4. 서비스 이용 제한
              <br />
              - 다음의 경우 회사는 회원의 서비스 이용을 제한하거나 중단할 수
              있습니다.
              <br />
              · 타인의 정보를 도용한 경우
              <br />
              · 서비스의 정상 운영을 방해한 경우
              <br />
              · 법령 및 약관을 위반한 경우
              <br />
              5. 개인정보 보호
              <br />
              - 회원의 개인정보는 관련 법령 및 개인정보 처리방침에 따라
              보호됩니다.
              <br />
              6. 회원의 의무
              <br />
              - 회원은 법령, 약관, 공지사항을 준수해야 하며 서비스 이용 시
              타인에게 피해를 주지 않아야 합니다.
              <br />
              7. 회사의 의무
              <br />
              - 회사는 회원의 개인정보를 보호하며 안정적인 서비스를 제공하기
              위해 최선을 다합니다.
              <br />
              8. 책임 제한
              <br />
              - 회사는 천재지변, 시스템 장애 등 불가항력으로 인해 발생한 손해에
              대해 책임을 지지 않습니다.
              <br />
              9. 약관 변경
              <br />
              - 회사는 약관을 변경할 수 있으며 변경 시 사전에 고지합니다.
              <br />
              10. 준거법
              <br />
              - 본 약관은 대한민국 법률을 따릅니다.
              <br />
            </p>

            <h2>개인정보 수집 및 이용 동의</h2>
            <p>
              회사는 회원의 개인정보를 아래의 목적에 따라 최소한으로 수집하며,
              법령에 따라 안전하게 관리합니다.
              <br />
              1. 수집 항목
              <br />
              - 필수: 이름, 아이디, 비밀번호, 이메일, 전화번호
              <br />
              - 선택: 서비스 이용 과정에서 자동 수집되는 정보(접속 기록, 쿠키
              등)
              <br />
              2. 수집 목적
              <br />
              - 회원 가입 및 본인 확인
              <br />
              - 서비스 제공 및 고객 지원
              <br />
              - 서비스 개선 및 품질 향상
              <br />
              3. 보유 및 이용 기간
              <br />
              - 회원 탈퇴 시 또는 법정 보유 기간 종료 시까지 보관합니다.
              <br />
              4. 동의 거부권 및 불이익
              <br />
              - 회원은 개인정보 제공을 거부할 권리가 있으나, 필수항목 제공 거부
              시 서비스 이용에 제한이 있습니다.
              <br />
            </p>

            <h2>마케팅 정보 수신 동의 (선택)</h2>
            <p>
              회사는 아래 목적에 따라 마케팅 정보를 제공할 수 있으며, 회원은
              이를 선택적으로 동의할 수 있습니다.
              <br />
              1. 수집 및 이용 목적
              <br />
              - 이벤트, 프로모션, 할인 혜택 등 정보 안내
              <br />
              - 신규 서비스 안내 및 광고성 정보 제공
              <br />
              2. 수신 방법
              <br />
              - 문자(SMS), 이메일, 앱 푸시 등
              <br />
              3. 보유 및 이용 기간
              <br />
              - 동의 철회 또는 회원 탈퇴 시까지 보관합니다.
              <br />
              4. 동의 철회 안내
              <br />
              - 언제든지 설정 변경 또는 고객센터를 통해 수신 동의를 철회할 수
              있습니다.
              <br />
            </p>
          </div>
          <button className="TermsAgreeButton" onClick={handleAgreeScroll} disabled={!isScrolledToBottom}>약관 동의를 위해서 스크롤</button>
        </div>
      </div>
    </div>
  );
};

export default TermsAgree;
