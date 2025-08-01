/*
[실습14: 제품 관리 페이지]
1. 목표
    사용자가 카테고리, 제품명, 가격, 이미지를 포함한 제품 정보를 등록하고, 
    등록된 모든 제품을 표 형태로 한눈에 확인하며 관리할 수 있는 웹 페이지를 제작합니다.
2. 화면 구성(프론트-   )
    페이지는 사용자가 정보를 입력하는 **'제품 등록 영역'**과 
    등록된 결과를 보여주는 **'제품 목록 영역'**으로 명확히 구분되어야 합니다.
    제품 등록 영역 (<div id="header">):
        카테고리 선택: 미리 정의된 카테고리 목록에서 제품의 분류를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다. (예: '음료', '과자')
        제품명 입력: 등록할 제품의 이름을 텍스트로 입력할 수 있어야 합니다. (예: "코카콜라")
        제품 가격 입력: 제품의 가격을 숫자로 입력할 수 있어야 합니다. (예: 1000)
        제품 이미지 입력: 제품의 사진을 사용자의 컴퓨터에서 파일 형태로 선택하여 첨부할 수 있어야 합니다.
        등록 버튼: 모든 정보를 입력한 후, 목록에 제품을 추가하기 위한 "등록" 버튼이 있어야 합니다.
    제품 목록 영역 (<div id="main">):
        등록된 모든 제품 정보를 보여주는 표(테이블)가 있어야 합니다.
        표는 "이미지", "카테고리명", "상품명", "가격", "등록일", "비고" 순서의 열로 구성되어야 합니다.
        각 제품 항목(행)마다 해당 제품을 관리할 수 있는 "삭제" 버튼과 "수정" 버튼이 포함되어야 합니다.

3. 핵심 기능
    초기 데이터 표시:
        사용자가 페이지에 처음 방문했을 때, 카테고리 선택 메뉴에는 두 개의 예시 카테고리('음료', '과자')가 기본적으로 표시되어 있어야 합니다.
        제품 목록 표에는 사용법을 쉽게 이해할 수 있도록 네 개의 예시 제품이 기본적으로 표시되어 있어야 합니다.

    제품 등록 기능:
        사용자가 '등록 영역'에 카테고리, 제품명, 가격을 모두 입력하고 "등록" 버튼을 클릭하면, 해당 제품이 '목록 영역' 표에 새로운 행으로 즉시 추가되어야 합니다.
        제품 등록 시, 등록 날짜는 현재 날짜로 자동 기록되어야 합니다.
        첨부된 이미지는 목록의 '이미지' 열에 표시되어야 하며, 이미지를 첨부하지 않은 경우 기본 이미지가 대신 표시되어야 합니다.

    제품 관리 기능:
        삭제: 각 제품의 "삭제" 버튼을 클릭하면 해당 제품이 목록에서 즉시 제거되어야 합니다.
        수정: "수정" 버튼을 클릭하면, prompt 창을 통해 새로운 제품명과 가격을 입력받아 해당 제품의 정보를 수정하고 목록을 즉시 갱신해야 합니다.

[ 작업순서 ] --- 100% 예측 불가능 ---
    1. [프] 화면스케치(프로토타입)
    2. [프] HTML과 CSS표현
    3. [백] 데이터모델링
    4. [백] 기능(함수)설계
    5. [백] 구현/로직
    6. [백] 테스트
        */

    //===== [1] 데이터 모델링 샘플 ====== //
    //1. 카테고리 목록 - (부서)
    const categoryList = [ { cno : 1 , cname : '음료류'} , { cno : 2 , cname : '과자류'} ];
    let curruntCno = 2; //*코드를 자동대입하기 위한 현재 코드번호 , 샘플의 마지막 코드의 번호로 초기화
    //2. (사원) - 제품목록 , 이미지 등록시 없을경우 : https://placehold.co/100x100 경로샘플
    const productList = [
        { pno : 1 , cno : 1 , pname : '코카콜라' , pprice : 1000 , pimg :'https://placehold.co/100x100' , pdate : '2025-06-17'},
        { pno : 2 , cno : 2 , pname : '새우깡' , pprice : 1200 , pimg :'https://placehold.co/100x100' , pdate : '2025-06-18'},
        { pno : 3 , cno : 1 , pname : '칠성사이다' , pprice : 1000 , pimg :'https://placehold.co/100x100' , pdate : '2025-06-19'}
    ];
    let curruntPno = 3;
    console.log( categoryList);
    console.log( productList );

//===== [2] 데이터 모델림 샘플 ===== //
//1. 카테고리 출력함수 : 카테고리목록의 객체정보를 <select>에 출력하는 함수 : 실행조건 : 페이지가 열렸을때 실행
categoryPrint(); //아무런 조건없이 열릴때
function categoryPrint(){ console.log( ' >> categoryPrint exe');
    // 1. 어디에 , <select id="categoryInput">
    const categoryInput = document.querySelector('#categoryInput'); console.log( categoryInput);
    // 2. 무엇을 , 카테고리목록(배열)내 객체정보를 하나씩HTML 형식으로
    let html = `<option value="disabled selected"> 카테고리 선택하세요. </option>`;
        for( let index = 0 ; index <= categoryList.length - 1 ; index++ ){ //index번째 카테고리(1개) 객체꺼내기
            const category = categoryList[index];  console.log(category);
            html += `<option value="${ category.cno }"> ${ category.cname } </option>`
            // 주의할점 : `백틱 주의
        }//for end
    
    // 3. 출력
    categoryInput.innerHTML = html;     console.log(html);
}//f end
//2. 제품 등록함수 : 실행조건 : <등록번튼> onclick 클릭했을때
//HTML : <button onclick="productAdd()" class="btnAdd"> 등록 </button>

function productAdd(){ console.log(' >> productAdd exe');
    //(1) 입력 마크업객체 가져오기
    const categoryInput = document.querySelector('#categoryInput'); console.log( categoryInput);
    const pnameInput = document.querySelector('#pnameInput'); console.log( pnameInput );
    const ppriceInput = document.querySelector( '#ppriceInput'); console.log( ppriceInput );
    const pimgInput = document.querySelector('#pimgInput'); console.log( pimgInput );

    //(2) 입력 마크업객체에서 입력값 가져오기
    const cno = categoryInput.value; console.log( cno );
    const pname = pnameInput.value; console.log( pname );
    const pprice = ppriceInput.value; console.log( pprice );
    //(*)유효성검사
        // * 입력한 값이 없으면 등록실패
        if( cno == '' || pname == '' || pprice == "" ){
            alert( '비어있는 항목이 있습니다.[실패]' );
            return; // 
        } 
    //첨부파일은 value대신에 files[0] : 선택된 첨부파일의 첫번째 파일객체 가져오기
    const pimg = pimgInput.files[0];
    
    //* 현재 날짜 구하기 == new Date()객체
    let year = new Date().getFullYear(); //현재 연도 반환함수
    let month = new Date().getMonth()+1; // 현재 월 반환함수 *1월달이 0부터 시작함으로 +1
        month = month < 9 ? `0${ month }`: month;  //만약에 월이 한자리수이면 앞에 '0' 붙인다
    let day = new Date().getDate();   //현재 일 반환함수
        day = day <9 ? `0${ day }`: day; //만약에 일이 한자리수이면 앞에 '0' 붙인다
    let pdate = `${ year }-${ month }-${day}`;//`백틱주의   
    console.log( pdate );
    //(*)유효성검사
        // * 입력한 값이 없으면 등록실패
        if( cno == '' || pname == '' || pprice == "" ){
            alert( '비어있는 항목이 있습니다.[실패]' );
            return; // 반환값 없는 함수종료 : 아래코드는 실행되지 않는다.
        } 
    //(3) 여러 데이터 객체로 구성 하기.
    const obj = {
        pno : ++curruntPno, //현재제품코드에 1증가후 구성
        cno : Number( cno ),
        pname : pname , pprice : Number(pprice) , //제품가격은 숫자형 타입변환
        pimg : pimg ? URL.createObjectURL( pimg ) : 'https://placehold.co/100x100', //URL.createObjectURL() 
        pdate : pdate
    };  console.log( obj );
    //(4) 구성한 객체를 배열에 저장
    productList.push( obj );    console.log( productList);
    // (*) 기타등등 
    categoryInput.value = '';
    pnameInput.value = '';
    ppriceInput.value = '';
    alert('[성공] 제품 등록');
    productPrint();
}//f end 등록함수 끝

//3. 제품목록 출력함수, 실행조건 : (1) 페이지(HTML/JS)가 열렸을때 함수실행, (2) 등록/삭제/수정 처리했을때
productPrint();
function productPrint(){ console.log(' >> productPrint exe')
    //(1) 어디에, <tbody>
    const tbody = document.querySelector(`#main > table > tbody` ); console.log(tbody);
    //(2) 무엇을
    let html = '';
        for( let index = 0 ; index <= productList.length -1 ; index++ ){
            const product = productList[index];
            //현재  제품의 저장된 카테고리 번호로 카테고리객체 구하기
            const category = getCategroy( product.cno );
            html += `<tr>
                        <td><img src="${ product.pimg }" /></td>
                        <td> ${ category.cname } </td> 
                        <td> ${ product.pname } </td>
                        <td> ${ product.pprice.toLocaleString() } </td> 
                        <td> ${ product.pdate } </td> 
                        <td><button onclick="productDelete( ${ product.pno } )" class="btnDelete">삭제</button>
                        <button onclick="productEdit( ${ product.pno } )" class="btnEdit">수정</button></td>
                    </tr>`; //백틱주의,  샘플작성한 HTML의 <tr> 복붙
        }; //for end
    //(3) 출력
    tbody.innerHTML = html;
}//f end 출력함수끝

//4. 제품 삭제함수 : 배열내 삭제할 객체를 찾아서 .splice <매개변수 : 제품코드> , 
// 실행조건 :[삭제버튼] onclick 했을때
function productDelete( pno ){ console.log( ' >> productDelete exe'); console.log( pno );
    //(1) 삭제할 번호의 객체를 찾는다. for
    for( let index = 0 ; index <= productList.length - 1 ; index++ ){
        if( productList[index].pno == pno ){//만약에 index번째 제품코드의 삭제할 제품코드가 같으면
            productList.splice( index, 1 ); // 해당 index에서 요소1개 삭제
            alert('[성공] 제품 삭제'); //안내
            productPrint(); //삭제이후 제품목록 새로고침/랜더링
            return; // 목표이뤘으니 함수종료한다.
        }
    }// for end
    //(2) 못찾았다.
    alert('[오류] 제품번호 불일치 ');
}//f end  삭제함수 끝

//5. 제품 수정함수 : 새로운 정보를 받아 배열내 수정할 객체를 찾아서 대입한다. <매개변수 : 제품코드> ,
// 실행조건 :[수정버튼] onclick 했을때
function productEdit( pno ) { console.log(' >> productEdit exe'); console.log( pno );
    //(1) 수정할 번호의 객체를 찾느다. for
    for( let index = 0 ; index <= productList.length -1 ; index++ ){//(1)수정할 번호의 객체를 찾는다
        if( productList[index].pno == pno ){ //만약에 index번째 제품코드가 수정할 제품코드와 같다면
            const pname = prompt('수정할 제품명 : ');//수정할 값 입력받기
            const pprice = prompt('수정할 제품가격 : ');
            productList[index].pname = pname; //입력받은 값으로 수정
            productList[index].pprice = Number( pprice );
            alert('[성공] 제품 수정'); //안내
            productPrint(); //제품목록 새로고침
            return; //목표를 이뤘으니 함수 강제 종료한다.
        } //if end
    }// for end
    //(2)
    alert ('[실패] 제품 수정');
}// f end 수정함수 끝
//6. 카테고리번호에 해당하는 카테고리객체 1개 조회함수
function getCategroy( cno ){console.log(' getCategroy exe');
    //1. 매개변수(cno)와 동일한 카테고리객체 찾기
    for(let index = 0 ; index <= categoryList.length - 1 ; index++ ){
        if( categoryList[index].cno == cno ){// 만일 index번째 cno
            return categoryList[index]; //찾은 객체를 반환한다.
        } //if end
    }//for end
    //2. 못찾았다
    return null; //
} //f end