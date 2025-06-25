// ============localStorage 연동 함수================

// 로컬 스토리지에서 'products' 키에 해당하는 데이터를 가져오는 함수
function getProducts(){
    let products = localStorage.getItem('products');
    if( products === null ){  // 데이터가 없으면 빈 배열로 초기화
        products = [];
    }else{
        products = JSON.parse(products); //JSON 문자열을 JS배열/객체로 변환
    }
    return products; //처리된 products배열을 반환
}

// 주어진 products 배열을 로컬 스토리지에 저장하는 함수
function setProducts(products) {
    //JS배열을 JSON문자열로 변환하여 저장
    localStorage.setItem('products' , JSON.stringify(products)); 
}

//===========제품 관련 CRUD 함수==============
// CRUD: Create(등록), Read(조회), Update(수정), Delete(삭제)

// C: 새로운 제품을 등록하는 함수
cosnt pnameInput = document.querySelector('#pnameInput');
cosnt ppriceInput = document.querySelector('#ppriceInput');
const pimgInput = document.querySelector('#pimgInput');
const pcontentInput = document.querySelector('#pconteneInput');

 // 각 입력 요소에서 사용자가 입력한 값을 가져옵니다.
 const pname = pnameInput.value;
 const pprice = ppriceInput.value;
 const pcontent = pcontentInput.value;
 const pimgInput = pimgInput.files[o];

// 현재 로컬 스토리지에 저장된 제품 목록을 불러옵니다.
const products = getProducts();
