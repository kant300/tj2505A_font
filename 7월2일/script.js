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