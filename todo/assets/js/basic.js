// 抓取必要的 DOM
let dom = {
    text: document.querySelector('#data-text'),
    btn: document.querySelector('#add-btn'),
    data: document.querySelector('#todo-data')
};

/**
* 1. 按鈕事件綁定
* 2. 當按下按鈕時，抓取輸入框文字
*  2-1. 檢查輸入框是否有值
*      2-1-1. 沒有值的時候
*          2-1-1-a. 顯示提醒文字
*          2-1-1-b. 將焦點放到輸入框
*  2-2. 清除輸入框的值
*  2-3. 將焦點放到輸入框
* 3. 將值新增到列表區塊
*/

/**
 * 將值新增到列表區塊
 * @param {string} text
 * @returns {void}
 */
const inserTodo = (text) => {
    console.log(`insert text:${text}`);
}

//
/**
 * 1.按鈕事件綁定
 * @param {object} e
 * @returns {void}
 */
const onBtnClick = async (e) => {
    //2. 當下按鈕時，抓取輸入框文字
    let value = dom.text.value;

    //2-1. 檢查輸入框是否有值
    //2-1-1. 沒有值的時候，顯示提醒文字，將焦點放到輸入框
    if (!value) {
        // 2-1-1-a. 顯示提醒文字
        await Swal.fire({
            title: '新增失敗',
            html: '未輸入項目名稱',
            icon: 'error'
        })

        // 2-1-1-b. 將焦點放到輸入框
        // 省略動作，最後統一處理
    } else {
        // 3. 將值新增到列表區塊
        insertTodo(value);
    }

    // 2-2. 清除輸入框的值
    dom.text.value = '';

    // 2-3. 將焦點放到輸入框
    // FIXME: 修正 sweetalert 套件消失過場動畫導致焦點遺失問題
    setTimeout(() => {
        dom.text.focus();
    }, 400)

}
dom.btn.addEventListener('click', onBtnClick);