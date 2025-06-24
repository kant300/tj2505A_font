// // // 2. 제품 목록 , 이미지 등록시 없을경우 : https://placehold.co/100x100 경로 샘플
// const productList = [
//     { pno: 1, pname: '아메리카노', pprice: 1000, pimg: 'https://placehold.co/100x100', etc: '....' },
//     { pno: 2, pname: '바닐라라떼', pprice: 1200, pimg: 'https://placehold.co/100x100', etc: '....' },
//     { pno: 3, pname: '에이드', pprice: 1400, pimg: 'https://placehold.co/100x100', etc: '....' }
// ];
// let currentPno = 3; //*코드를 자동대입 하기 위한 
// const inventoryLogs = [
//     { lno: 1, pno: 1, lstate: '입고', lcount: 3, lcontent: '...', ldate: '2025-06-24'},
//     { lno: 2, pno: 1, lstate: '출고', lcount: -1, lcontent: '...', ldate: '2025-06-24'},
// ];
//  let curretlno = 2;

// ==================== 3. localStorage 관리하는 함수 ================= //
function setLocalStorage( productList ){
    localStorage.setItem('productList' , JSON.stringify(productList) );
} // func end 

function getLocalStorage(){
    let productList = localStorage.getItem('productList');
    if( productList == null ){
        productList = []
    }else{
        productList = JSON.parse(productList)
    }
    return productList; // 웹스토리지 에서 조회된 배열을 반환하는 함수, 없으면 []빈배열 , 있으면 [{},{}]
}
// 2. 제품 등록함수 :
//2. 실행조건 : 등록버튼 onclick 클릭했을때
function productAdd(){ console.log( '--> productAdd exe' );
    //(1) 입력 마크업 객체 가져오기
    const pnameInput = document.querySelector('#pnameInput'); console.log(pnameInput);
    const ppriceInput = document.querySelector('#ppriceInput'); console.log(ppriceInput);
    const pimgInput = document.querySelector('#pimgInput'); console.log(pimgInput);
    const ptextInput = document.querySelector('#ptextInput'); console.log(ptextInput);
    //(2) 입력 마크업 객체에서 입력값 가져오기
    const pname = pnameInput.value; console.log(pname);
    const pprice = ppriceInput.value; console.log(pprice);
    const ptext = ptextInput.value; console.log(ptext);
    // 첨부파일은 value 대신에 files[0] : 선택된 첨부파일의 첫번째 파일객체 가져오기
    const pimg = pimgInput.files[0]; console.log(pimg);

    //* 입력한 값이 없으면 등록 실패
    if ( pname == '' || pprice == '') {
        alert('비어있는 항목이 있습니다.[실패]');
        return; // 반환값 없는 함수종료 : 아래코드는 실행되지 않는다.
    }

    //localStorage 저장함수   .getItem('속성명/key')
    let currentPno = 1; // 제품번호 초기값 
    let productList = getLocalStorage();
        // // ============== localStorage 에서 productList 가져오기 ============ //
        // // (1) localStorage 에서 productList 가져오기
        // let productList = localStorage.getItem('productList'); // .getItem('속성명/key')
        // // (2) 존재하지 않으면 (배열) 새로 생성 , 존재하면 타입변환
        // if( productList == null ){ // 해당 속성명(productList)이 존재 하지 않으면 
        //     productList = []; // 새로운 배열 생성 
        //     // no(제품번호)  1 사용한다.
        // }else{ // 존재하면 JSON(배열타입)으로 변환하기. 
        //     productList = JSON.parse( productList );
        //     currentPno = productList[ productList.length-1 ].pno + 1; // 배열내 마지막인덱스의 제품번호 + 1
        // }
//     function setLocalStorage( productList ){
//     localStorage.setItem('productList' , JSON.stringify(productList) );
// } // func end 
// //      function getLocalStorage(){
// //      let productList = localStorage.getItem('productList');
// //      if( productList == null ){
// //          productList = []
// //      }else{
// //         productList = JSON.parse(productList)
// //      }
// //      return productList; // 웹스토리지 에서 조회된 배열을 반환하는 함수, 없으면 []빈배열 , 있으면 [{},{}]
// // }

    // 3. 객체화
    const obj = {
        pno: currentPno, //제품코드는 1 증가 후 저장 
        pname: pname, 
        pprice: Number(pprice), //제품가격은 숫자형 타입변환
        pimg: pimg ? URL.createObjectURL(pimg) : 'https://placehold.co/100x100',
        etc: ptext 
        // 선택한 파일객체의 url 주소 생성함수.
    }; console.log(obj);
    // 4. 배열 저장
    productList.push(obj);
    
    // 5. 기타등등( 입력창 초기화 )
    pnameInput.value = '';
    ppriceInput.value = '';
    ptextInput.value = '';
    alert('[성공] 제품 등록 ');

    // ============== localStorage 에서 productList 저장하기 ============ //
        // (1) 배열타입을 JSON문자열 타입으로 변환
    //     let jsonData = JSON.stringify( productList );
    //     // (2) localStorage 에 productList 속성명으로 배열저장하기.
    //    localStorage.setItem( 'productList' , jsonData ); // 'productList' 라는 이름(아무거나) 으로 jsonData변수값 저장
setLocalStorage(productList);
    ViewAllProduct();
}//f end



// 출력함수.
ViewAllProduct(); console.log(ViewAllProduct);
function ViewAllProduct() {
    console.log(ViewAllProduct);
    // (1) 어디에
    const tbody = document.querySelector('#main > table > tbody');
let productList = getLocalStorage();
    // (2) 무엇을
    let html = '';
    for (let i = 0; i < productList.length; i++) {
        const productFor = productList[i];
        html += `<tr>    
                        <td> <img src=${productFor.pimg}> </td>     <td>  ${productFor.pname} </td> 
                        <td>  ${productFor.pprice} </td>             <td>  ${productFor.etc} </td>       
                        <td> 
                        <button class="btnDelete" onclick="deleteList(${productFor.pno})"> 삭제 </button> 
                </tr>`
    }
    // (3) 출력
    tbody.innerHTML = html;
}



//4. 제품 삭제함수 : 배열내 삭제할 객체를 찾아서
// 실행조건 : [삭제버튼] onclick 했을때
function deleteList(pno){
    console.log(`>> delete exe`);   console.log(pno);
    for(let index=0; index<=productList.length -1; index++){
        if(productList[index].pno == pno){ 
            productList.splice(index, 1) // 해당 index 해서 요소 1개 삭제
            alert('[성공] 제품삭제'); //안내
            ViewAllProduct(); // 삭제 이후 새로고침/랜더링
            return; // 목표 달성 함수 종료
        }
    }
    alert('[오류] 제품번호 불일치');
} // func end // 삭제함수 끝


console.log(inventoryLogs);

function Add(){
    console.log('Add');
    //(1) 입력 마크업객체 가져오기
    const pnoInput = document.querySelector('#pnoInput');
    const categoryInput = document.querySelector('#categoryInput');
    const mpriceInput = document.querySelector('#mpriceInput');
    const mtextInput = document.querySelector('#mtextInput');
    //(2) 입력 마크업객체에서 입력값 가져오기
    const pno = pnoInput.value; console.log(pno);
    // product 목록에서 입력받은 pno가 존재하지 않으면 return
    let check = false    
    for(let index=0; index <= productList.length -1; index++){
            if(productList[index].pno == pno){
                check = true
            }
        }
    if(check == false){
        alert('존재하지 않는 번호입니다');
        return
    }

    const category = categoryInput.value; console.log(category);
    const mprice = mpriceInput.value; console.log(mprice);
    const mtext = mtextInput.value; console.log(mtext);

    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    month = month < 9 ? `0${month}` : month;
    let day = new Date().getDate();
    day = day < 9 ? `0${day}` : day; 
    let ldate = `${year}-${month}-${day}`; console.log(ldate);
    
    if(pno =='' || category =='' || mprice =='' || mtext =='' ){
        alert('비어있는 항목이 있습니다. [실패]');
        return;
    }
    const obj = {
    lno: ++curretlno,
    pno: pno,
    lstate: category, 
    lcount: mprice,
    lcontent:mtext,
    ldate:ldate
    }; console.log(obj);

    inventoryLogs.push(obj); console.log(inventoryLogs);

    pnoInput.value ='',
    categoryInput.value ='',
    mpriceInput.value ='',
    mtextInput.value ='',
    alert('[성공] 제품 등록');

    AddPrint();

}

//재고 출력함수
// 실행조건 : (1) 페이지 HTML/JS 페이지가 열렸을때 함수실행, (2)등록완료 했을때
AddPrint();
function AddPrint(){ 
    console.log('--> AddPrint exe' );
    //(1) 어디에  , <tbody>
    const tbody = document.querySelector('#main2 > table > tbody'); console.log(tbody);
    //(2) 무엇을
    let html=``;
    for(let index = 0 ; index <= inventoryLogs.length - 1 ; index++ ){
        const inventory = inventoryLogs[index];         console.log(inventory);
        html += `<tr>
                    <th> ${ inventory.pno } </td>   
                    <td> ${ inventory.lcount } </td>
                    <td> ${ inventory.lcontent } </td>
                    <td> ${ inventory.ldate } </td>
                    <td>  <button onclick="btnEdit(${inventory.lno})" class="btnEdit()"> 수정 </button> </td>
                </tr>`; //백틱 주의, 샘플 작성한 HTML의 <tr> 복사붙여넣기

    }//for end
 tbody.innerHTML = html;    console.log(html);
}//f end




// 제품 내역 수정
function btnEdit(lno){
    console.log('btnEdit')
    // 수정 번호의 객체 찾기
    for( let i = 0 ; i <= inventoryLogs.length -1; i++){
        if( inventoryLogs[i].lno == lno){
            const mtext = prompt("입출사유 : ");
            inventoryLogs[i].lcontent = mtext;
            alert('[성공] 입출사유 변경되었습니다.');
            AddPrint();
            return;
        } // if end
    } // for end
    // 실패시
    alert("[실패] 입출사유 변경되지 않았습니다.")
} // func end


