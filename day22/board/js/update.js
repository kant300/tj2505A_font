

// (1) 수정페이지 접속했을때 기존 데이터 호출 함수
function getBoard(){
    const url = new URLSearchParams( location.search );
    const selectNo = url.get('no');
    let boardList = localStorage.getItem('boardList');
    if( boardList == null ){ boardList = [] }
    else{ boardList = JSON.parse( boardList ); }
    for( let i = 0 ; i < boardList.length ; i++ ){
        const obj = boardList[i];
        if( obj.no == selectNo ){
            // 기존 게시물정보를 input마크업에 넣어주기
            document.querySelector('#titleInput').value=obj.title
            document.querySelector('contentInput').value=obj.conctent
        }//if end
    } //for end
} //f end

// (2) 수정처리 함수