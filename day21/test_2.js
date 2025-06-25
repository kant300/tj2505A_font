/* ============================== LocalStorage 연동 함수 ============================== */

// 로컬 스토리지에서 'products' 키에 해당하는 데이터를 가져오는 함수
function getProducts() {
    let products = localStorage.getItem('products');
    if (products === null) { // 데이터가 없으면 빈 배열로 초기화
        products = [];
    } else {
        products = JSON.parse(products); // JSON 문자열을 JS 배열/객체로 변환
    }
    return products;
}

// 주어진 products 배열을 로컬 스토리지에 저장하는 함수
function setProducts(products) {
    localStorage.setItem('products', JSON.stringify(products)); // JS 배열을 JSON 문자열로 변환하여 저장
}

/* ============================== 전역 변수 (DOM 요소 참조) ============================== */
const pnameInput = document.querySelector('#pnameInput');
const ppriceInput = document.querySelector('#ppriceInput');
const pcontentInput = document.querySelector('#pcontentInput');
const pimgInput = document.querySelector('#pimgInput');
const addUpdateBtn = document.querySelector('#addUpdateBtn');
const productBody = document.querySelector('#productBody');

// 현재 수정 중인 제품의 pcode를 저장하는 변수 (null이면 등록 모드, 숫자면 수정 모드)
let editingPcode = null;

/* ============================== 제품 관련 CRUD 함수 ============================== */

// C: 새로운 제품을 등록하거나 기존 제품을 수정하는 함수
function productAddUpdate() {
    const pname = pnameInput.value.trim(); // 공백 제거
    const pprice = ppriceInput.value;
    const pcontent = pcontentInput.value.trim();
    const pimgFile = pimgInput.files[0]; // 선택된 파일 객체

    // 유효성 검사
    if (!pname || !pprice || !pcontent) {
        alert('모든 필수 입력 필드를 채워주세요.');
        return;
    }
    if (isNaN(pprice) || Number(pprice) <= 0) {
        alert('가격은 0보다 큰 숫자로 입력해주세요.');
        return;
    }

    let products = getProducts();
    let productImgUrl = 'https://placehold.co/100x100?text=No+Image'; // 기본 이미지

    // 파일이 선택되었을 경우 이미지 URL 생성
    if (pimgFile) {
        productImgUrl = URL.createObjectURL(pimgFile);
    }

    // 수정 모드인 경우
    if (editingPcode !== null) {
        const indexToUpdate = products.findIndex(product => product.pcode === editingPcode);
        if (indexToUpdate !== -1) {
            products[indexToUpdate].pname = pname;
            products[indexToUpdate].pprice = Number(pprice);
            products[indexToUpdate].pcontent = pcontent;
            // 이미지가 새로 선택되었을 경우에만 이미지 URL 업데이트
            if (pimgFile) {
                // 이전 URL 해제 (메모리 누수 방지)
                if (products[indexToUpdate].pimg.startsWith('blob:')) {
                    URL.revokeObjectURL(products[indexToUpdate].pimg);
                }
                products[indexToUpdate].pimg = productImgUrl;
            }
            alert('제품이 성공적으로 수정되었습니다.');
        }
    } else { // 등록 모드인 경우
        let pcode = products.length === 0 ? 1 : products[products.length - 1].pcode + 1;

        const newProduct = {
            pcode: pcode,
            pname: pname,
            pprice: Number(pprice),
            pcontent: pcontent,
            pimg: productImgUrl,
        };
        products.push(newProduct);
        alert('제품이 성공적으로 등록되었습니다.');
    }

    setProducts(products); // 로컬 스토리지에 저장
    clearInputFields(); // 입력 필드 초기화
    productPrint(); // 화면 다시 그리기
    resetFormForAdd(); // 버튼 텍스트 '등록'으로, editingPcode 초기화
}

// R: 제품 목록을 화면에 출력(조회)하는 함수
function productPrint() {
    let products = getProducts();
    let html = '';

    if (products.length === 0) {
        html = `<tr><td colspan="5" style="text-align: center; padding: 20px; color: #888;">등록된 제품이 없습니다. 새 제품을 등록해 보세요!</td></tr>`;
    } else {
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            html += `
                <tr>
                    <td> <img src="${product.pimg}" alt="${product.pname} 이미지"/> </td>
                    <td> ${product.pname} </td>
                    <td> ${product.pprice.toLocaleString()} 원 </td>
                    <td> ${product.pcontent} </td>
                    <td>
                        <button class="btn secondary edit-btn" data-pcode="${product.pcode}"> 수정 </button>
                        <button class="btn danger delete-btn" data-pcode="${product.pcode}"> 삭제 </button>
                    </td>
                </tr>
            `;
        }
    }
    productBody.innerHTML = html;
}

// U: 제품 수정 폼 채우기 (실제 수정은 productAddUpdate에서 처리)
function productEdit(pcode) {
    const products = getProducts();
    const productToEdit = products.find(product => product.pcode === pcode);

    if (productToEdit) {
        pnameInput.value = productToEdit.pname;
        ppriceInput.value = productToEdit.pprice;
        pcontentInput.value = productToEdit.pcontent;
        // 이미지 input은 보안상 값을 직접 설정할 수 없습니다. (placeholder 역할만 하거나 그대로 둠)
        // pimgInput.value = ''; // 기존 선택된 파일 제거 (선택적)

        addUpdateBtn.textContent = '수정 완료'; // 버튼 텍스트 변경
        addUpdateBtn.classList.remove('primary');
        addUpdateBtn.classList.add('secondary'); // 수정 버튼 색상 변경

        editingPcode = pcode; // 수정 중인 제품 코드 저장

        // 폼으로 스크롤 이동 (UX 개선)
        pnameInput.focus();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// D: 특정 제품을 삭제하는 함수
function productDelete(pcode) {
    if (!confirm('정말 이 제품을 삭제하시겠습니까?')) {
        return; // 사용자가 '취소'를 누르면 함수 종료
    }

    let products = getProducts();
    // filter()를 사용하여 삭제할 제품을 제외한 새 배열 생성
    const updatedProducts = products.filter(product => {
        // 이미지 URL이 createObjectURL로 생성된 것이면 해제하여 메모리 누수 방지
        if (product.pcode === pcode && product.pimg.startsWith('blob:')) {
            URL.revokeObjectURL(product.pimg);
        }
        return product.pcode !== pcode;
    });

    setProducts(updatedProducts); // 로컬 스토리지에 업데이트된 배열 저장
    alert('제품이 삭제되었습니다.');
    productPrint(); // 화면 다시 그리기
    resetFormForAdd(); // 삭제 후에는 등록 모드로 전환될 수 있도록 폼 초기화
}

/* ============================== 유틸리티 및 이벤트 리스너 ============================== */

// 입력 필드 초기화
function clearInputFields() {
    pnameInput.value = '';
    ppriceInput.value = '';
    pcontentInput.value = '';
    pimgInput.value = ''; // 파일 입력 필드 초기화
}

// 폼을 '등록' 모드로 초기화 (수정 완료 후 또는 삭제 후 호출)
function resetFormForAdd() {
    editingPcode = null; // 수정 모드 해제
    addUpdateBtn.textContent = '등록'; // 버튼 텍스트 '등록'으로 변경
    addUpdateBtn.classList.remove('secondary');
    addUpdateBtn.classList.add('primary'); // 버튼 색상 '등록' 색상으로 변경
    clearInputFields(); // 입력 필드도 초기화
}

// 페이지 로드 시 제품 목록을 출력하고 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', () => {
    productPrint(); // 페이지 로드 시 기존 제품 목록 출력

    // '등록/수정' 버튼 클릭 이벤트
    addUpdateBtn.addEventListener('click', productAddUpdate);

    // 이벤트 위임을 사용하여 '수정' 및 '삭제' 버튼 클릭 처리
    productBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')) {
            const pcode = parseInt(e.target.dataset.pcode);
            productEdit(pcode);
        } else if (e.target.classList.contains('delete-btn')) {
            const pcode = parseInt(e.target.dataset.pcode);
            productDelete(pcode);
        }
    });
});