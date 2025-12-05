export function validateAgree(e,agreeData, onClose) {
  e.preventDefault();
  
  const {agreeTerms, agreePrivacy, agreeMarketing} = agreeData;

  if(!agreeTerms) {
    return alert("서비스 이용약관에 동의해주세요.");
  }
  if(!agreePrivacy) {
    return alert("개인정보 수집 및 이용 동의에 동의해주세요.");
  }

  return onClose();
}
