document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const usernameInput = document.getElementById('username');
    const nicknameInput = document.getElementById('nickname');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsAgreementCheckbox = document.getElementById('termsAgreement');

    signupForm.addEventListener('submit', function(event) {
        // 기본 폼 제출 동작 방지 (페이지 새로고침 방지)
        event.preventDefault();

        // 1. 모든 필수 입력 필드가 채워져 있는지 확인 (HTML required 속성으로도 1차 검사됨)
        if (!usernameInput.value || !nicknameInput.value || !emailInput.value || !passwordInput.value || !confirmPasswordInput.value) {
            alert('모든 필수 정보를 입력해주세요.');
            return; // 함수 종료
        }

        // 2. 비밀번호와 비밀번호 확인 일치 여부 검사
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
            // 비밀번호 필드를 비워서 다시 입력하도록 유도
            passwordInput.value = '';
            confirmPasswordInput.value = '';
            passwordInput.focus(); // 비밀번호 필드로 포커스 이동
            return;
        }

        // 3. 이용약관 동의 여부 검사
        if (!termsAgreementCheckbox.checked) {
            alert('이용약관 및 개인정보 처리방침에 동의해야 계정을 만들 수 있습니다.');
            return;
        }
        // ... (기존 userList 및 setLocalStorage, signupButtonHandler 함수 유지) ...

// 2. DOMContentLoaded 이벤트 리스너: HTML 문서 로드 완료 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // 2-1. 로컬 스토리지에서 userList 불러오기
    let storedUserList = localStorage.getItem('userList');

    if (storedUserList) {
        userList = JSON.parse(storedUserList);
        console.log('localStorage에서 userList를 불러왔습니다:', userList);
    } else {
        console.log('localStorage에 userList가 없습니다. 초기 userList를 저장합니다.');
        setLocalStorage(userList);
    }

    // 2-2. 회원가입 폼 제출 이벤트 리스너 연결
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', signupButtonHandler);
    } else {
        console.error("Error: 'signupForm' ID를 가진 폼 요소를 찾을 수 없습니다. HTML을 확인해주세요.");
    }

    // 2-3. 이용약관 체크박스 및 상세 내용 요소 가져오기
    const termsAgreementCheckbox = document.getElementById('termsAgreement');
    const termsDetail = document.getElementById('termsDetail');
    const closeTermsDetailBtn = document.getElementById('closeTermsDetail');

    // 2-4. 체크박스 변경 시 약관 상세 내용 표시/숨김 토글
    if (termsAgreementCheckbox && termsDetail) {
        termsAgreementCheckbox.addEventListener('change', function() {
            if (this.checked) { // 체크박스가 체크되면
                termsDetail.classList.remove('terms-detail-hide'); // 숨김 클래스 제거
                termsDetail.classList.add('terms-detail-show'); // 보임 클래스 추가
            } else { // 체크박스가 체크 해제되면
                termsDetail.classList.remove('terms-detail-show'); // 보임 클래스 제거
                termsDetail.classList.add('terms-detail-hide'); // 숨김 클래스 추가
            }
        });
    }

    // 2-5. 약관 상세 내용 내 '닫기' 버튼 클릭 시 숨김
    if (closeTermsDetailBtn && termsDetail && termsAgreementCheckbox) {
        closeTermsDetailBtn.addEventListener('click', function(e) {
            e.preventDefault(); // 링크의 기본 동작 (페이지 이동) 방지
            termsDetail.classList.remove('terms-detail-show');
            termsDetail.classList.add('terms-detail-hide');
            termsAgreementCheckbox.checked = false; // 체크박스도 해제
        });
    }
});

// ... (기존 setLocalStorage, signupButtonHandler 함수 유지) ...

        // 4. 모든 유효성 검사를 통과했을 때 (실제 서비스에서는 여기에 서버 전송 로직 추가)
        alert('계정 만들기가 완료되었습니다! (이것은 가상의 메시지입니다)');
        console.log('--- 계정 정보 ---');
        console.log('이름:', usernameInput.value);
        console.log('닉네임:', nicknameInput.value);
        console.log('이메일:', emailInput.value);
        // 실제로는 비밀번호를 직접 로깅하지 않습니다. 해시된 비밀번호를 전송해야 합니다.
        console.log('비밀번호 (보안상 실제 로깅은 지양):', passwordInput.value); 
        console.log('이용약관 동의:', termsAgreementCheckbox.checked);

        // 실제 서버 전송 예시 (fetch API 사용)
        /*
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: usernameInput.value,
                nickname: nicknameInput.value,
                email: emailInput.value,
                password: passwordInput.value // 실제로는 서버에서 해싱해야 함
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('계정 만들기가 완료되었습니다!');
                // 성공 시 로그인 페이지로 이동 등
                window.location.href = '/login.html'; 
            } else {
                alert('계정 만들기 실패: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('계정 만들기 중 오류가 발생했습니다.');
        });
        */

        // 폼 초기화 (선택 사항)
        signupForm.reset();
    });
});