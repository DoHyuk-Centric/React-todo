import "./TermsModal.css";
import { useState, useEffect } from "react";
import { validateAgree } from "../js/validataAgree.js";
import TermsAgree from "./TermsAgree.jsx";

const Modal = ({ isOpen, onClose, onUpdateAgreeAll }) => {
  /** 약관 전체동의 */
  const [agreeAll, setAgreeAll] = useState(false);
  /** 서비스 이용약관 */
  const [agreeTerms, setAgreeTerms] = useState(false);
  /** 개인정보 수집 및 이용동의 */
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  /** 마케팅 정보 수신 동의 */
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  const [detailOpen, setDetailOpen] = useState(false);
  

  const agreeData = {
    agreeTerms,
    agreePrivacy,
    agreeMarketing,
  };

  const handleAgreeAll = (checked) => {
    setAgreeAll(checked);
    setAgreeTerms(checked);
    setAgreePrivacy(checked);
    setAgreeMarketing(checked);

    onUpdateAgreeAll(checked);
  };

  useEffect(() => {
    const allRequired = agreeTerms && agreePrivacy;
    if (!allRequired) {
      setAgreeAll(false);
      return;
    }
    onUpdateAgreeAll(allRequired);
    if (agreeTerms && agreePrivacy && agreeMarketing) {
      setAgreeAll(true);
    } else {
      setAgreeAll(false);
    }
  }, [agreeTerms, agreePrivacy, agreeMarketing]);

  if (!isOpen) return null;
  return (
    <div>
      <div onMouseDown={onClose} className="TermModal-overlay">
        <div onMouseDown={(e) => e.stopPropagation()} className="TermModal"> {/*클릭시 overlay 닫힘 방지*/}
          <h2>회원가입 약관 동의</h2>
          <div className="TermModal-content">
            <div onMouseDown={() => setDetailOpen(true)} className="Term-agree-container">
              <input
                className="Term-agree-checkbox"
                type="checkbox"
                checked={agreeAll}
                onChange={(e) => handleAgreeAll(e.target.checked)}
              />
              <span className="Term-All-agree-checkbox-text">
                To Do List 이용약관, 개인정보 수집 및 이용, 위치정보
                이용약관(선택), 프로모션 정보 수신(선택)에 모두 동의합니다.
              </span>
            </div>

            <h3 className="Term-h3">
              <input
                className="Term-agree-checkbox"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <span className="Term-agree-header">
                [서비스 이용약관] <span style={{ color: "blue" }}>(필수)</span>
              </span>
            </h3>
            <p className="Term-scrollBox">
              본 약관은 회사(이하 “서비스 제공자”)가 제공하는 서비스 이용과
              관련하여 회원과 서비스 제공자 간의 권리·의무 및 책임사항 등을
              규정함을 목적으로 합니다.
              <br />제 2 조 (용어의 정의)
              <br /> 1. “서비스”란 회사가 제공하는 모든 온라인 서비스 및 관련
              제반 기능을 의미합니다.
              <br /> 2. “회원”이란 본 약관에 따라 서비스에 가입하여 이용하는
              사용자를 말합니다.
            </p>
            <h3 className="Term-h3">
              <input
                className="Term-agree-checkbox"
                type="checkbox"
                checked={agreePrivacy}
                onChange={(e) => setAgreePrivacy(e.target.checked)}
              />
              <span className="Term-agree-header">
                [개인정보 수집 및 이용 동의]{" "}
                <span style={{ color: "blue" }}>(필수)</span>
              </span>
            </h3>
            <p className="Term-scrollBox">
              수집 항목: 아이디, 비밀번호, 이름, 이메일, 전화번호
              <br />
              수집 목적: 회원가입 및 본인 확인, 서비스 제공
            </p>
            <h3 className="Term-h3">
              <input
                className="Term-agree-checkbox"
                type="checkbox"
                checked={agreeMarketing}
                onChange={(e) => setAgreeMarketing(e.target.checked)}
              />
              <span className="Term-agree-header">
                [마케팅 정보 수신 동의] (선택)
              </span>
            </h3>
            <p className="Term-scrollBox">
              이벤트/혜택 안내를 위한 이메일·문자 발송에 활용됩니다.
            </p>
          </div>
          <div>
            <button
              type="submit"
              onClick={(e) => {
                validateAgree(e, agreeData, onClose);
                const allAgreed = agreeTerms && agreePrivacy;
                onUpdateAgreeAll(allAgreed);
            }}
            >
              확인
            </button>
          </div>
        </div>
      </div>
        <TermsAgree detailOpen={detailOpen} onClose={() => setDetailOpen(false)} onAgreeAll={() => handleAgreeAll(true)}/>
    </div>
  );
};

export default Modal;
